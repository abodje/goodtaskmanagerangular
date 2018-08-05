import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routing, appRoutingProviders } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';

//Pipe
import { GenerateDatePipe } from './pipes/generate.date.pipe';
import { UserService } from './services/user.service';
import { TaskService } from './services/task.service';
import { DefaultComponent } from './default/default.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { UsereditComponent } from './useredit/useredit.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { TaskeditComponent } from './taskedit/taskedit.component';
@NgModule({
  declarations: [
    AppComponent,
    GenerateDatePipe,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    NewtaskComponent,
    UsereditComponent,
    TaskdetailComponent,
    TaskeditComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [appRoutingProviders, UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
