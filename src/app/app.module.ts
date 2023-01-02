import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
