import { CommunicateService } from './../communicate.service'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from './../product';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnDestroy {
  subscription: Subscription;
  product = new Product();
  products = [];
  id: any;
  constructor(
    private _communicateService: CommunicateService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.subscription = _communicateService.observedProducts.subscribe(
      (updateProducts) => { this.products = updateProducts },
    )
    this._route.params.subscribe(
      (param) => { this.id = param.id }
    )
  }
  onSubmit(product) {
    this.products[this.id] = product;
    this._communicateService.updateProducts(this.products);
    this._router.navigate(['products']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
