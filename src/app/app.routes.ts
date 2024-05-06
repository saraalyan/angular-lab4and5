import { Routes } from '@angular/router';
import path from 'path';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'cart',component:CartComponent},
    {path:'product',component:ProductComponent},
    {path:'product-details/:id',component:DetailsproductComponent},

    {path:'product-details',component:DetailsproductComponent},
    {path:'**',component:NotfoundComponent}

];
