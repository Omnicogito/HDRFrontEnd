import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { KennelComponent } from './components/kennels/kennel/kennel.component';
import { DoggoComponent } from './components/doggos/doggo/doggo.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonDetailComponent } from './components/person/person-detail/person-detail.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';
import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';
import { DoggoCreateComponent } from './components/doggos/doggo-create/doggo-create.component';
import { DoggoDetailComponent } from './components/doggos/doggo-detail/doggo-detail.component';
import { DoggoEditComponent } from './components/doggos/doggo-edit/doggo-edit.component';
import { DoggoDeleteComponent } from './components/doggos/doggo-delete/doggo-delete.component';
import { DoggoService } from './services/doggo.service';
import { PersonService } from './services/person.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PersonComponent,
    KennelComponent,
    RegisterComponent,
    PersonCreateComponent,
    PersonDetailComponent,
    PersonEditComponent,
    PersonDeleteComponent,
    PersonComponent,
    DoggoCreateComponent,
    DoggoDetailComponent,
    DoggoEditComponent,
    DoggoDeleteComponent,
    DoggoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DoggoService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
