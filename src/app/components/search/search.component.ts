import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { GlobalRoutingDataService } from "../../services/global-routing-data/global-routing-data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public originalSearchQuery: string = null;
  public searchQuery: string = null;

  constructor(
    private router: Router,
    private globalRoutingDataService: GlobalRoutingDataService
  ) { }

  onInit() {
    this.originalSearchQuery = this.globalRoutingDataService.getSearchQuery();
    this.searchQuery = this.originalSearchQuery;
    if (this.originalSearchQuery === null) {
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
