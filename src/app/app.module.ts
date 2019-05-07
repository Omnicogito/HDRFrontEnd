import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { KennelComponent } from './components/kennel/kennel.component';
import { DoggoComponent } from './components/doggos/doggo/doggo.component';
import { RegisterComponent } from './components/register/register.component';
import { DoggoService } from './services/doggo.service';
import { PersonIndexComponent } from './components/person/person-index/person-index.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { DoggoCreateComponent } from './components/doggos/doggo-create/doggo-create.component';
import { DoggoDetailComponent } from './components/doggos/doggo-detail/doggo-detail.component';
import { DoggoEditComponent } from './components/doggos/doggo-edit/doggo-edit.component';
import { DoggoDeleteComponent } from './components/doggos/doggo-delete/doggo-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PersonComponent,
    KennelComponent,
    DoggoComponent,
    RegisterComponent,
    PersonIndexComponent,
    DoggoCreateComponent,
    DoggoDetailComponent,
    DoggoEditComponent,
    DoggoDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [
    DoggoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
