import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { DoggoComponent } from './components/doggo/doggo.component';
import { KennelComponent } from './components/kennel/kennel.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'person', component: PersonComponent},
  {path: 'doggo', component: DoggoComponent},
  {path: 'kennel', component: KennelComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
