import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForminputService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get('/assets/data.json');
  }

}