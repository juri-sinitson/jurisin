import { Component, OnInit } from '@angular/core';
import { ProductStateService } from '../+state/product-state.service';
import { ProductService } from '../product.service';
import { Product } from '../types/product';


@Component({
  selector: 'jurisin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  selectedProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private productStateService: ProductStateService,
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      {
        next: (products: Product[]): void => {
          this.products = products
        }
      }
    );
  }

  selectProduct(product: Product) {
    // Original example on https://primefaces.org/primeng/showcase/#/table/selection
    // this.messageService.add({severity:'info', summary:'Product Selected', detail: product.name});

    product.inBasket = true;
    this.productStateService.updateOneInCache(product);
  }

  /*getSelected(): Product[] {
    returh this.productStateService.getAll();
  }*/

}
