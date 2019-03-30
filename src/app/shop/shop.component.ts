import { Component, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  constructor(
    public service: CustomService,
    private router: Router,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate([''], { replaceUrl: true }));
    // this.user = null;
    console.log('do logout() on shop');
    // console.log("user", this.user);
  }
}
