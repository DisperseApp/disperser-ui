import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { GlobalRoutingDataService } from "../../services/global-routing-data/global-routing-data.service";
import { ListDataService } from "../../services/list-data/list-data.service";
import { PlacesService } from "../../services/places/places.service";
import { LocationService } from "../../services/location/location.service";
import { Config } from "codelyzer";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  originalSearchQuery: string;
  searchQuery: string;
  originalPlaceType: string;
  placeType: string;

  latitude: number;
  longitude: number;
  locationRetrievalIsErroneous: boolean;
  locationRetrievalError: string;

  private placesSubscription: Subscription;
  private locationSubscription: Subscription;

  searchResultsData: any[] = [];
  searchResultsLoaded: boolean = false;

  constructor(
    private router: Router,
    private locationService: LocationService,
    private listDataService: ListDataService,
    private globalRoutingDataService: GlobalRoutingDataService,
    private placesService: PlacesService
  ) { }

  // Lifecycle Methods
  onInit() {
    this.searchResultsLoaded = false;
    this.getGlobalRoutingData();
  }

  onSubmit() {
    if (this.searchQuery && this.searchQuery !== '') {
      this.globalRoutingDataService.resetFields();
      this.globalRoutingDataService.setSearchQuery(this.searchQuery);
      this.onInit();
      this.displaySearchResults();
    }
  }

  ngOnInit(): void {
    this.onInit();
    this.subscribeToLocation();
  }

  ngOnDestroy(): void {
    if (this.placesSubscription)
      this.placesSubscription.unsubscribe();
    if (this.locationSubscription)
      this.locationSubscription.unsubscribe();
  }

  // Initialization methods
  private getGlobalRoutingData() {
    this.originalSearchQuery = this.globalRoutingDataService.getSearchQuery();
    this.searchQuery = this.originalSearchQuery;
    this.originalPlaceType = this.globalRoutingDataService.getType();
    this.placeType = this.originalPlaceType;
    if (this.originalSearchQuery === null && this.placeType === null) {
      this.router.navigate(['/home']);
    }
  }

  private subscribeToLocation() {
    let thisComponent = this;
    this.locationSubscription = this.locationService.locationsSubscription.subscribe({
      next(position) {
        thisComponent.longitude = position.coords.longitude;
        thisComponent.latitude = position.coords.latitude;
        thisComponent.locationRetrievalIsErroneous = false;
        thisComponent.locationRetrievalError = null;

        if (!thisComponent.searchResultsLoaded) {
          thisComponent.displaySearchResults();
          thisComponent.searchResultsLoaded = true;
        }
      },
      error(errorMessage) {
        thisComponent.longitude = undefined;
        thisComponent.latitude = undefined;
        thisComponent.locationRetrievalIsErroneous = true;
        thisComponent.locationRetrievalError = errorMessage;
      }
    });
  }

  private displaySearchResults() {
    let thisComponent = this;
    this.placesSubscription = this.placesService.getFuzzySearchResults(this.latitude, this.longitude, this.searchQuery)
      .subscribe((data: Config) => {
        thisComponent.searchResultsData = data['results'];
        for (let place of thisComponent.searchResultsData) {
          if (place.poi.url) {
            place.poi.url = this.createFullUrl(place.poi.url);
          }
        }
        console.log(thisComponent.searchResultsData);
      })
  }

  // UI Methods
  displayHeader(searchQuery: string, placeType: string) {
    const pluralType = this.listDataService.getPluralName(placeType);

    if (searchQuery !== null && placeType !== null)
      return `You searched for ${pluralType} named "${searchQuery}".`;
    if (searchQuery === null)
      return `You searched for ${pluralType}.`;
    if (placeType === null)
      return `You searched for "${searchQuery}".`;

    return '';
  }

  private createFullUrl(incompleteUrl: string) {
    let fullUrl = '';
    if (!incompleteUrl.startsWith('http://') && !incompleteUrl.startsWith('https://')) {
      fullUrl = 'http://' + incompleteUrl;
    }
    else fullUrl = incompleteUrl;
    console.log(fullUrl);
    return fullUrl;
  }

  shortUrl(url: string) {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      let domain = url.split('/')[2];
      if (domain.startsWith('www.')) {
        return domain.slice(4);
      }
      else return domain;
    }
    return url;
  }

  // Example input: +(1)-(610)-4504250
  formattedPhoneNumber(phone: string) {
    if (!phone) return '';
    const [countryCode, ...rest] = phone.split(')');
    let cleanedCountryCode = '';
    for (let char of countryCode) {
      if (char >= '0' && char <= '9') cleanedCountryCode += char;
    }
    let cleanedRest = '';
    const restStr = rest.join('');
    for (let char of restStr) {
      if (char >= '0' && char <= '9') cleanedRest += char;
    }

    if (cleanedRest.length === 10) {
      const [part1, part2, part3] = [cleanedRest.slice(0,3), cleanedRest.slice(3,6), cleanedRest.slice(6,10)];
      return `+${cleanedCountryCode} (${part1}) ${part2}-${part3}`;
    }
    else {
      return `+${cleanedCountryCode} ${cleanedRest}`;
    }
  }

  metersToMiles(m: number) {
    return m * 0.000621371192;
  }
}
