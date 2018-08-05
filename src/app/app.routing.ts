import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DefaultComponent } from './default/default.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { UsereditComponent } from './useredit/useredit.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { TaskeditComponent } from './taskedit/taskedit.component';
const appRoutes: Routes = [
    
    { path: '', component: DefaultComponent },
    { path: 'index', component: DefaultComponent },
    { path: 'index/:page', component: DefaultComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login/:id', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user-edit', component: UsereditComponent },
    { path: 'task-new', component: NewtaskComponent },
    { path: 'task/:id', component: TaskdetailComponent },
    { path: 'index/:page/task/:id', component: TaskdetailComponent },
    { path: 'task-edit/:id', component: TaskeditComponent },
    { path: 'index/:page/task-edit/:id', component: TaskeditComponent },
    { path: '**', component: LoginComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);