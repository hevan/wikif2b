import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OriginRoutingModule } from './origin-routing.module';
import { OriginViewComponent } from './origin.component';
import {NgbModule,NgbCarouselModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule,NgbModule,NgbCarouselModule, NgbTabsetModule,OriginRoutingModule],
    declarations: [OriginViewComponent]
})
export class OriginModule {}
