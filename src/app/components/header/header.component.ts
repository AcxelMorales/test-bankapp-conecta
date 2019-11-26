import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DataService } from '../../services/data.service';
import { ISaldos } from '../../models/ISaldos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  cantidades: ISaldos;

  saldosSubscription: Subscription = new Subscription();

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.saldosSubscription = this._dataService.getSaldos().subscribe(resp => this.cantidades = resp[0]);
  }

  ngOnDestroy(): void {
    this.saldosSubscription.unsubscribe();
  }

}
