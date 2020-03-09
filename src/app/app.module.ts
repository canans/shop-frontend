import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import{ HttpClientModule} from '@angular/common/http'

import { from } from 'rxjs';
import { ProductService } from './service/product.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './service/category.service';
import { AdminPaneliComponent } from './admin-paneli/admin-paneli.component';
import{ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    CategoryComponent,
    AdminPaneliComponent,
    FormComponent
  
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [ProductService,CategoryService],
  bootstrap: [AppComponent,ProductComponent]
})
export class AppModule { }
