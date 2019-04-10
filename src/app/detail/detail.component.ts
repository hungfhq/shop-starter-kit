import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomService } from '../custom.service';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { Product } from '@app/interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  link: any;
  foundProduct: Product;
  category: any;
  brand: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: CustomService,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      this.category = para.get('category');
      this.brand = para.get('brand');
      this.link = para.get('link');
      // console.log(this.link);

      this.service.getProducts().subscribe(_products => {
        this.foundProduct = _products.find(p => p['link'] === this.link);
        // console.log(this.foundProduct);
        if (!this.foundProduct) {
          this.router.navigate(['pagenotfound']);
        }
      });
    });
  }
}
