import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveViewComponent } from './archive.component';

@NgModule({
    imports: [CommonModule, ArchiveRoutingModule],
    declarations: [ArchiveViewComponent]
})
export class ArchiveModule {}
