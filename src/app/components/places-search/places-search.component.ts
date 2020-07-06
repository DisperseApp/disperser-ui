import { Component, OnInit } from '@angular/core';
import { ListDataService } from "../../services/list-data/list-data.service";
import { LocationService } from "../../services/location/location.service";

@Component({
  selector: 'app-places-search',
  templateUrl: './places-search.component.html',
  styleUrls: ['./places-search.component.scss']
})
export class PlacesSearchComponent implements OnInit {
  public popular_places: any[];
  public place_types: any[];
  public latitude: number = null;
  public longitude: number = null;

  private locationRetrievalIsErroneous: boolean = null;
  private locationRetrievalError: string = null;

  constructor(
    private listDataService: ListDataService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.popular_places = [...this.listDataService.getPopularPlacesData()];
    this.place_types = [...this.listDataService.getPlaceTypes()];

    let thisComponent = this;
    const locationsSubscription = this.locationService.locationsSubscription.subscribe({
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

  onSubmit() {

  }
}
