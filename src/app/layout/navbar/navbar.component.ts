import { Component } from '@angular/core';
import { NoahNavbarComponent } from '@dandy1103/navbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NoahNavbarComponent],
  template: `<noah-navbar repo="noah-notify" fallbackLabel="通知" />`,
})
export class NavbarComponent {}
