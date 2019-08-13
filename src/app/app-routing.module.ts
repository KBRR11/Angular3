import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { FormComponent } from "./Components/form/form.component";
import { Opc1Component } from "./Components/opc1/opc1.component";
import { Opc2Component } from "./Components/opc2/opc2.component";

const routes: Routes = [
  {path:'form', component:FormComponent},
  {path:'opc1', component:Opc1Component},
  {path:'opc2', component:Opc2Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
