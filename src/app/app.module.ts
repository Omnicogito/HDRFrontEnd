import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { KennelComponent } from './components/kennel/kennel.component';
import { DoggoComponent } from './components/doggo/doggo.component';
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
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonDetailComponent } from './components/person/person-detail/person-detail.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';
import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';
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
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    PersonCreateComponent,
    PersonDetailComponent,
    PersonEditComponent,
    PersonDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [
    DoggoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
