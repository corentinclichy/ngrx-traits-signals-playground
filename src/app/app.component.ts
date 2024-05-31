import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListDetailLocalComponent } from './product-list-detail/product-list-detail-local.component';
import { ProductListDetailRemoteComponent } from './product-list-detail/product-list-detail-remote.component';
import { ProductBranchListInfiniteComponent } from './product-list-detail/product-branch-list-infinite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductListDetailLocalComponent,
    ProductListDetailRemoteComponent,
    ProductBranchListInfiniteComponent,
  ],
  template: '<product-branch-infinite-list/>',
})
export class AppComponent {
  title = 'ngrx-traits-signals-playground';
}
