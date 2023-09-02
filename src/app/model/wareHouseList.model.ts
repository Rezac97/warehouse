import { WareHouse } from './warehouse.model';

export class WareHouseList {
  count: number;
  results: WareHouse[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      obj && obj.results && obj.results.map((elem: any) => new WareHouse(elem));
  }
}
