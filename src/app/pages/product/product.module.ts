import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductViewComponent } from './product.component';

@NgModule({
    imports: [CommonModule, ProductRoutingModule],
    declarations: [ProductViewComponent]
})
export class ProductModule {}
