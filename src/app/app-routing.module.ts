import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { OrderMasterComponent } from './component/order-master/order-master.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { LogoutComponent } from './component/logout/logout.component';
import { authGuard } from './auth.guard';
import { AddProductComponent } from './component/addProduct/addProduct.component';
import { UserRegisterComponent } from './component/userRegister/userRegister.component';




const routes: Routes = [
  // First-match wins startegy
  {path:'',component:MainLayoutComponent,children:[
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'E/:pid', component:ProductDetailsComponent },
  { path: 'addproduct', component:AddProductComponent },
  { path: 'Register', component:UserRegisterComponent },
  { path: 'order', component: OrderMasterComponent,canActivate:[authGuard]},





  ]},

  {path:'login' , component: LoginComponent},
  {path:'logout' , component: LogoutComponent},

  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
