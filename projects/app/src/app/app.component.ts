import { Component } from '@angular/core';

import { Font } from 'ngx-font-picker';

@Component({
  selector: 'my-app',
  moduleId: 'src/app/app.component',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
  private _filteredFonts = ['Open Sans', 'Oswald', 'Courier', 'Nunito Sans', 'Quicksand', 'Karla', 'Oxygen', 'Dosis', 'Bitter', 'Noto Sans SC', 'Assistant', 'Domine'];
  private _presetFonts = ['Arial', 'Times', 'Courier', 'Lato', 'Open Sans', 'Roboto Slab'];

  public font: Font = new Font({
    family: 'Roboto',
    size: '14px',
    style: 'regular',
    styles: ['regular']
  });

  public sizeSelect: boolean = true;
  public sortFonts: boolean = false;
  public styleSelect: boolean = true;

  public filteredFonts = [];
  public presetFonts = this._presetFonts;

  constructor() {}

  public togglePresetFonts(): void {
    this.presetFonts = this.presetFonts.length ? [] : this._presetFonts;
  }

  public toggleExtraOptions(): void {
    this.sizeSelect = !this.sizeSelect;
    this.styleSelect = !this.styleSelect;
  }

  public toggleFilterFonts(): void {
    this.filteredFonts = this.filteredFonts.length ? [] : this._filteredFonts;
  }

  public toggleSortOptions(): void {
    this.sortFonts = !this.sortFonts;
  }
}
