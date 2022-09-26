import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',
   component:ProfileComponent},
   {path:'about',component:AboutComponent},
   {path:'education',component:EducationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
