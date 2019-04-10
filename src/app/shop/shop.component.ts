import { Component, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { Router } from '@angular/router';

import { Subject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  categories: Array<any[]>;
  products$: Observable<any[]>;
  products: any[];

  public show = 'block';
  private searchTerms = new Subject<string>();

  constructor(
    public service: CustomService,
    private router: Router,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.products$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchProducts(term))
    );

    this.service.getCategories().subscribe(_categories => {
      this.categories = _categories;
      // console.log(this.categories);
    });

    this.service.getProducts().subscribe(products => {
      this.products = products;
      // this.products = this.products.filter(p => {
      //   return p.link.includes('on');
      // });
      // this.products$ = of(this.products);
    });

    // this.products$ = this.searchProducts('canon');
  }

  delayBlur() {
    setTimeout(() => {
      this.show = 'none';
    }, 25);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  searchProducts(term: string) {
    if (!term.trim()) {
      return of([]);
    }
    if (this.products) {
      return of(
        this.products.filter(p => {
          return p.link.includes(term);
        })
      );
    }
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate([''], { replaceUrl: true }));
    // this.user = null;
    console.log('do logout() on shop');
    // console.log("user", this.user);
  }
}
