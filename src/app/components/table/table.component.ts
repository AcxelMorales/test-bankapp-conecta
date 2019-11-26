import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { IMovimientos } from '../../models/IMovimientos';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data: IMovimientos[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getMovimientos().subscribe(resp => {
      this.data = resp;
    });
  }

}
