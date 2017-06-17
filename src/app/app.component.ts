import { CommunicateService } from './communicate.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  subscription: Subscription;
  products = [];
  constructor(private _communicateService: CommunicateService) {
    _communicateService.updateProducts(this.products);
    this.subscription = _communicateService.observedProducts.subscribe(
      (updateProducts) => { this.products = updateProducts },
      (err) => { },
      () => { }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
