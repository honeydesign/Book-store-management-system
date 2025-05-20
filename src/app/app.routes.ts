import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { CustomersComponent } from './customers/customers.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LogInComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'orders', component: OrderComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'transactions', component: TransactionComponent },
    { path: 'add-products', component: AddProductComponent },
    { path: 'admin-role', component: AdminComponent }


];
