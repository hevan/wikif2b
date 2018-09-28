import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogViewComponent } from './blog.component';

const routes: Routes = [
    {
        path: 'detail/:id',
        component: BlogViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {}
