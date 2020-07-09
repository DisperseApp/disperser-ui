import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { GlobalRoutingDataService } from "../../services/global-routing-data/global-routing-data.service";
import { ListDataService } from "../../services/list-data/list-data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public originalSearchQuery: string = null;
  public searchQuery: string = null;
  public originalPlaceType: string = null;
  public placeType: string = null;

  constructor(
    private router: Router,
    private listDataService: ListDataService,
    private globalRoutingDataService: GlobalRoutingDataService
  ) { }

  displayHeader(searchQuery: string, placeType: string) {
    const pluralType = this.listDataService.getPluralName(placeType);

    if (searchQuery === null && placeType === null)
      return `You searched for ${pluralType} named "${searchQuery}".`;
    if (searchQuery === null)
      return `You searched for ${pluralType}.`;
    if (placeType === null)
      return `You searched for "${searchQuery}".`;
  }

  onInit() {
    this.originalSearchQuery = this.globalRoutingDataService.getSearchQuery();
    this.searchQuery = this.originalSearchQuery;
    this.originalPlaceType = this.globalRoutingDataService.getType();
    this.placeType = this.originalPlaceType;
    if (this.originalSearchQuery === null && this.placeType === null) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    if (this.searchQuery && this.searchQuery !== '') {
      this.globalRoutingDataService.setSearchQuery(this.searchQuery);
      this.onInit();
    }
  }

  ngOnInit(): void {
    this.onInit();
  }

  ngOnDestroy(): void {

  }
}
