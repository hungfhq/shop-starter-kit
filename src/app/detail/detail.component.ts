import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomService } from '../custom.service';
import { AuthenticationService } from '@app/core/authentication/authentication.service';

import { Logger } from 'app/core/logger.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  link: any;
  foundProduct: any;
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
    });

    this.foundProduct = this.service.getData().products.find((data: { link: any }) => this.link.includes(data.link));
    this.service.isCategoryExisted(this.category) &&
    this.service.isBrandExisted(this.brand) &&
    this.service.isLinkExisted(this.link)
      ? this.router.navigate(['/shop', this.foundProduct.clink, this.foundProduct.blink, this.foundProduct.link])
      : this.router.navigate(['/pagenotfound']);
    // console.log("id 1", this.service.isExistedInWishlist("1"));
    // console.log("id 4", this.service.isExistedInWishlist("4"));
    // console.log("id 6", this.service.isExistedInWishlist("6"));
    // console.log("check existed or not on ngOnInit", this.service.isExistedInWishlist(this.foundProduct.id));
  }

  toggleWishlistButton() {
    // console.log("check existed or not on toggleWishlistButton",this.service.isExistedInWishlist(this.foundProduct.id));
    if (this.service.isExistedInWishlist(this.foundProduct.id))
      this.service.removeItemOutOfWishlist(this.foundProduct.id);
    else this.service.addItemToWishlist(this.foundProduct);
  }
}
