import {NgModule} from '@angular/core';
import {CountryListComponent} from './components/country-list/country-list.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    CountryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CountryListComponent
  ]
})
export class NgxCountriesDropdownModule { }
