import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateShoeComponent } from './create-shoe/create-shoe.component';
import { DeleteShoeComponent } from './delete-shoe/delete-shoe.component';
import { HomeComponent } from './home/home.component';
import { UpdateShoesComponent } from './update-shoes/update-shoes.component';
import { ViewShoesComponent } from './view-shoes/view-shoes.component';

const routes: Routes = [
  //{path:'', component:HomeComponent},
  {path:'view',component:ViewShoesComponent},
  {path:'create',component:CreateShoeComponent},
  {path:'update',component:UpdateShoesComponent},
  {path:'delete',component:DeleteShoeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
