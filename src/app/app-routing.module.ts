import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'room', pathMatch: 'full' },
//  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'room', loadChildren: './room/room.module#RoomPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
