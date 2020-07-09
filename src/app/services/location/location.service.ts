import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public locationsSubscription: Observable<any>;

  constructor() {
    this.locationsSubscription = new Observable(observer => {
      let watchId: number;

      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: Position) => {
          console.log('Location received');
          console.log(position.coords.latitude, position.coords.longitude);
          observer.next(position);
        }, (error: PositionError) => {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }

      return {
        unsubscribe() {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    });
  }
}
