import {Component} from '@angular/core';
import {IConfig, ICountry} from 'projects/ngx-countries-dropdown/src/lib/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sandbox';
  preferredCountryCodes: string[] = ['us', 'in'];
  selectedCountryCode: any = 'in';
  blockedCountryCodes: string[] = [];
  selectedCountryConfig: IConfig = {
    displayCurrencyCode: true,
    displayCurrencyName: true,
    displayCurrencySymbol: true,
    displayLanguageCode: true,
    displayLanguageName: true
  };
  countryListConfig: IConfig = {
    displayCurrencyCode: true,
    displayCurrencyName: true,
    displayCurrencySymbol: true,
    displayLanguageCode: true,
    displayLanguageName: true
  };
  allowedCountryCodes: string[] = [];

  onCountryChange(country: ICountry) {
    console.log(country);
    this.selectedCountryCode = country?.code
  }

  reset() {
    this.selectedCountryCode = undefined
  }
}
