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

    return this.http.get(url);
  }

  getFuzzySearchResults(latitude: number, longitude: number, searchQuery: string): Observable<any> {
    if (!latitude || !longitude || !searchQuery) return null;
    const url = `https://api.tomtom.com/search/2/search/${searchQuery}.json?lat=${latitude}&lon=${longitude}&limit=20&idxSet=POI&key=${this.apiKeyProviderService.getTomtomAPIKey()}`;
    return this.http.get(url);
  }
}
