import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/HeaderComponent';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDPipe } from './pipes/USD.pipe';
import { OrderMasterComponent } from './component/order-master/order-master.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { LogoutComponent } from './component/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './component/addProduct/addProduct.component';
import { UserRegisterComponent } from './component/userRegister/userRegister.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductComponent,
    LightBoxDirective,
    USDPipe,
    OrderMasterComponent,
    NotFoundComponent,
    LoginComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    LogoutComponent,
     AddProductComponent,
     UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
