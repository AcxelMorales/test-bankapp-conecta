import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DataService } from '../../services/data.service';
import { ITarjeta } from '../../models/ITarjeta';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, OnDestroy {

  tarjetas: ITarjeta[] = [];
  flag: boolean = false;

  tarjetaSubscription: Subscription = new Subscription();

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.tarjetaSubscription = this._dataService.getTarjetas().subscribe(resp => {
      this.tarjetas = resp;
    });
  }

  ngOnDestroy(): void {
    this.tarjetaSubscription.unsubscribe();
  }

}
