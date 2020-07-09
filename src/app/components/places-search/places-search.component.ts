import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListDataService } from "../../services/list-data/list-data.service";
import { LocationService } from "../../services/location/location.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { GlobalRoutingDataService } from "../../services/global-routing-data/global-routing-data.service";

@Component({
  selector: 'app-places-search',
  templateUrl: './places-search.component.html',
  styleUrls: ['./places-search.component.scss']
})
export class PlacesSearchComponent implements OnInit, OnDestroy {
  public popular_places: any[];
  public place_types: any[];
  public latitude: number = null;
  public longitude: number = null;
  public searchQuery: string = '';

  private locationsSubscription: Subscription;
  private locationRetrievalIsErroneous: boolean = null;
  private locationRetrievalError: string = null;

  constructor(
    private router: Router,
    private listDataService: ListDataService,
    private locationService: LocationService,
    private globalRoutingDataService: GlobalRoutingDataService
  ) { }

  searchByType(type: string) {
    this.globalRoutingDataService.setSearchQuery(null);
    this.globalRoutingDataService.setType(type);
    this.router.navigate(['/search']);
  }

  onSubmit() {
    if (this.searchQuery && this.searchQuery !== '') {
      this.globalRoutingDataService.setSearchQuery(this.searchQuery);
      this.globalRoutingDataService.setType(null);
      this.router.navigate(['/search']);
    }
  }

  ngOnInit(): void {
    this.popular_places = [...this.listDataService.getPopularPlacesData()];
    this.place_types = [...this.listDataService.getPlaceTypes()];

    let thisComponent = this;
    this.locationsSubscription = this.locationService.locationsSubscription.subscribe({
      next(position) {
        thisComponent.longitude = position.coords.longitude;
        thisComponent.latitude = position.coords.latitude;
        thisComponent.locationRetrievalIsErroneous = false;
        thisComponent.locationRetrievalError = null;
      },
      error(errorMessage) {
        thisComponent.locationRetrievalIsErroneous = true;
        thisComponent.locationRetrievalError = errorMessage;
      }
    });
  }

  ngOnDestroy(): void {
    this.locationsSubscription.unsubscribe();
  }
}
