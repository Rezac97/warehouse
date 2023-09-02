import { Component, OnInit } from '@angular/core';
import { WareHouseService } from '../services/ware-house.service';
import { WareHouseList } from '../model/wareHouseList.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent implements OnInit {
  constructor(private service: WareHouseService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((documents: WareHouseList) => {
      console.log(documents);
    });
  }
}
