import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiveViewComponent } from './archive.component';

const routes: Routes = [
    {
        path: 'detail/:code',
        component: ArchiveViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArchiveRoutingModule {}
