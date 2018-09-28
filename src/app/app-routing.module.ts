import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'archive', loadChildren: './pages/archive/archive.module#ArchiveModule' },
    { path: 'blog', loadChildren: './pages/blog/blog.module#BlogModule' },
    { path: 'origin', loadChildren: './pages/origin/origin.module#OriginModule' },
    { path: 'product', loadChildren: './pages/product/product.module#ProductModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
