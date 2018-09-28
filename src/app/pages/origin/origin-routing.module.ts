import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OriginViewComponent } from './origin.component';

const routes: Routes = [
    {
        path: 'detail/:code', component: OriginViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OriginRoutingModule {}
