import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { WareHouseList } from '../model/wareHouseList.model';

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root',
})
export class WareHouseService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${baseUrl}documents`).pipe(
      map((data: any) => {
        return new WareHouseList(data);
      })
    );
  }
}
