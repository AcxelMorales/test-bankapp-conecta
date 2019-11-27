import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddCardAccountsComponent } from './add-card-accounts/add-card-accounts.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';

import { ConvertPipe } from '../pipes/convert.pipe';
@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    CardComponent,
    MainComponent,
    TableComponent,
    AccountsComponent,
    AddCardAccountsComponent,
    FooterComponent,
    FormComponent,
    ConvertPipe
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
