import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h2 class="custom">
      'Country-list' component works! with inline template + style.
    </h2>
  `,
  styles: [
    '.custom{color : cyan}'
  ]
})
export class CountryListComponent {

}
