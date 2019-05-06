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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PersonComponent,
    KennelComponent,
    DoggoComponent,
    RegisterComponent
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
