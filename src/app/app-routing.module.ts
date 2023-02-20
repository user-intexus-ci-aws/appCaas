import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
