import { Component, Input, inject } from '@angular/core';
import { Address } from '../../../models/common/address.model';
import { TextComponent } from '../text/text.component';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { ApiRegionService } from '../../../apis/api-region.service';
import { BaseComponent } from '../../base/base.component';
import { NgSelectComponent } from '../ng-select/ng-select.component';

@Component({
  selector: 'app-address',
  standalone: true,
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
  imports: [FormsModule, TextComponent, NgSelectComponent],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class AddressComponent extends BaseComponent {
  private _address!: Address;
  countries: Array<string> = [];
  regions: Array<string> = [];
  cities: Array<string> = [];
  @Input() set address(value: Address) {
    this.fillLocationList(value);
    this._address = value;
  }
  get address() {
    return this._address;
  }
  @Input() required!: boolean;
  @Input() name!: string;
  @Input() headerTitle = '';
  apiRegionService = inject(ApiRegionService);

  fillLocationList(value: Address) {
    if (this.countries.length < 1) this.getAllCountries();
    if (!value.country) {
      this.regions = [];
      this.cities = [];
      return;
    }
    if (this.regions.length > 0 && this.address.country == value.country)
      return;
    this.getRegionByCountry(value.country);

    if (!value.region) {
      this.cities = [];
      return;
    }
    if (this.cities.length > 0 && this.address.region == value.region) return;
    this.getCitiesByRegionName(value.region);
  }

  onChangeCountry(countryName: string) {
    this.address.region = '';
    this.address.city = '';
    this.regions = [];
    this.cities = [];
    this.getRegionByCountry(countryName);
  }

  onChangeState(regionName: string) {
    this.address.city = '';
    this.cities = [];
    this.getCitiesByRegionName(regionName);
  }

  addCity = (city: string) => {
    this.cities.push(city);
  };

  //#region  GET
  getAllCountries() {
    this.apiRegionService
      .getAllCountries()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.countries = res;
      });
  }

  getRegionByCountry(countryName: string) {
    if (!countryName) return;
    this.apiRegionService
      .getRegionByCountry(countryName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.regions = res;
      });
  }

  getCitiesByRegionName(regionName: string) {
    if (!regionName) return;
    this.apiRegionService
      .getCitiesByRegionName(regionName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.cities = res;
      });
  }
}
