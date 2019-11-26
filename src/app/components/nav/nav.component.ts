import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DataService } from '../../services/data.service';
import { ICuenta } from '../../models/ICuenta';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  data: ICuenta;

  cuentaSubscription: Subscription = new Subscription();

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.cuentaSubscription = this._dataService.getCuenta().subscribe(resp => this.data = resp[0]);
  }

  ngOnDestroy(): void {
    this.cuentaSubscription.unsubscribe();
  }

}
