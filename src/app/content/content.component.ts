import { Component, OnInit } from '@angular/core';
import { CustomService } from '@app/custom.service';
import { Product } from '../interfaces';
import { AuthenticationService } from '@app/core/authentication/authentication.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  products: Array<Product> = [];
  constructor(public service: CustomService, public authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.service.getProducts().subscribe(_products => {
      this.products = _products;
    });
  }
}
