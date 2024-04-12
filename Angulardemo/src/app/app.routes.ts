import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
   
    {
    path: 'contact', component: ContactComponent
   },
   {
    path: 'about', component: AboutComponent 
   }
  
];
