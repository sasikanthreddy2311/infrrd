import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getHeaderList() {
    return [
      "Product Team",
      "IDC",
      "OCBC",
      "Radian",
      "Rustify"
    ]
  }
}
