import { Component } from '@angular/core';
import { AuthenticationService } from '../../../_services';
import { Router } from '@angular/router';
import { User } from '../../../_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  currentUser:User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
  this.currentUser = this.authenticationService.currentUserValue;
}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
