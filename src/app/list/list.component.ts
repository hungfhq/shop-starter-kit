import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomService } from '../custom.service';
import { Product } from '@app/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: Array<Product> = [];
  category: any;
  found: any;

  constructor(
    public service: CustomService,
    public authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      this.category = para.get('category');
      console.log(this.category);
      this.service.getProducts().subscribe(_products => {
        this.products = _products.filter(p => p['clink'] === this.category);
      });
    });
  }
}
