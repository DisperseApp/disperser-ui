import { Injectable } from '@angular/core';
import { ApiKeyProviderService } from "../api-key-provider/api-key-provider.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(
    private http: HttpClient,
    private apiKeyProviderService: ApiKeyProviderService
  ) { }

  getNearbySearchResults(latitude: number, longitude: number): Observable<any> {
    if (!latitude || !longitude) return null;
    const url = `https://api.tomtom.com` +
      "/search/2/" +
      "nearbySearch/.JSON" +
      "?key=" + this.apiKeyProviderService.getTomtomAPIKey() +
      "&lat=" + latitude +
      "&lon=" + longitude;
      //"&radius=<radius>" +
      //"[&limit=<limit>]" +
      //"[&ofs=<ofs>]" +
      //"[&countrySet=<countrySet>]" +
      //"[&topLeft=<topLeft>]" + // Deprecated
      //"[&btmRight=<btmRight>]" + // Deprecated
      //"[&language=<language>]" +
      //"[&extendedPostalCodesFor=<extendedPostalCodesFor>]" +
      //"[&categorySet=<categorySet>]" +
      //"[&brandSet=<brandSet>]" +
      //"[&connectorSet=<connectorSet>]" +
      //"[&fuelSet=<fuelSet>]" +
      //"[&view=<view>]" +
      //"[&openingHours=<openingHours>]" +
      //"[&timeZone=<timeZone>]" +
      //"[&mapcodes=<mapcodes>]" +
      //"[&relatedPois=<relatedPois>]";

    return this.http.get(url);
  }
}
