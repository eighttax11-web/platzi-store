import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  public today = new Date();

  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(`Se añadio al carrito el producto: ${this.product.id}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
