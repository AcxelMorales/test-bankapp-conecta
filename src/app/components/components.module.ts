import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CardAccountsComponent } from './card-accounts/card-accounts.component';
import { AddCardAccountsComponent } from './add-card-accounts/add-card-accounts.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    CardComponent,
    MainComponent,
    TableComponent,
    AccountsComponent,
    CardAccountsComponent,
    AddCardAccountsComponent,
    FooterComponent,
    FormComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
