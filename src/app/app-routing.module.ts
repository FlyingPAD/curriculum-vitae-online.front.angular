import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = 
[
  {
    path: '', component: AppComponent,
    loadChildren:() => import('./app-modules/mod-cv/mod-cv.module').then(m => m.ModCvModule)
  },
  { path : "**", redirectTo: "not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
