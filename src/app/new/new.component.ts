import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicateService } from './../communicate.service';
import { Product } from './../product';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  subscription: Subscription;
  product = new Product();
  products = [];
  constructor(
    private _communicateService: CommunicateService,
    private _router: Router,
  ) {
    this.subscription = _communicateService.observedProducts.subscribe(
      (updateProducts) => { this.products = updateProducts },
      (err) => { },
      () => { }
    )
  }

  onSubmit() {
    this.products.push(this.product);
    this._communicateService.updateProducts(this.products);
    this.product = new Product();
    this._router.navigate(['/products']);
  }
}
