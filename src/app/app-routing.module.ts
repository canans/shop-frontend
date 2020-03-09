import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { AdminPaneliComponent  } from './admin-paneli/admin-paneli.component';


const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"product",component:ProductComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"admin-paneli",component:AdminPaneliComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
