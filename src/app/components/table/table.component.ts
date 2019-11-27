import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DataService } from '../../services/data.service';
import { IMovimientos } from '../../models/IMovimientos';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  data: IMovimientos[] = [];

  movimientosSubscription: Subscription = new Subscription();

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.movimientosSubscription = this._dataService.getMovimientos().subscribe(resp => this.data = resp);
  }

  ngOnDestroy(): void {
      this.movimientosSubscription.unsubscribe();
  }

}
