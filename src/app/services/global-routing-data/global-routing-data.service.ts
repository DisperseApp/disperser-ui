import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalRoutingDataService {
  private searchQuery: string = null;
  //private searchQuery: string = 'Walmart';
  private type: string = null;

  getSearchQuery(): string {
    return this.searchQuery;
  }

  setSearchQuery(sq: string): void {
    this.searchQuery = sq;
  }

  getType(): string {
    return this.type;
  }

  setType(t: string): void {
    this.type = t;
  }

  resetFields(): void {
    this.searchQuery = null;
    this.type = null;
  }

  constructor() { }
}
