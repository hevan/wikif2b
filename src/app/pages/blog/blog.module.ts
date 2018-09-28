import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogViewComponent } from './blog.component';

@NgModule({
    imports: [CommonModule, BlogRoutingModule],
    declarations: [BlogViewComponent]
})
export class BlogModule {}
