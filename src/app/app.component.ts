import { Component } from '@angular/core';
import { TranslationService, AuthenticationService } from '@alfresco/adf-core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  mode = new FormControl('push');
  constructor(translationService: TranslationService, private authService: AuthenticationService, private router: Router) {

    translationService.use('en');

  }

  checkIfLogged() {
    const loggedTest = this.authService.isLoggedIn();
    return loggedTest;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
