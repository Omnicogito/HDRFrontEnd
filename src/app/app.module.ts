import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { humanComponent } from './components/human/human.component';
import { KennelComponent } from './components/kennels/kennel/kennel.component';
import { DoggoComponent } from './components/doggos/doggo/doggo.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { humanCreateComponent } from './components/human/human-create/human-create.component';
import { humanDetailComponent } from './components/human/human-detail/human-detail.component';
import { humanEditComponent } from './components/human/human-edit/human-edit.component';
import { humanDeleteComponent } from './components/human/human-delete/human-delete.component';
import { DoggoCreateComponent } from './components/doggos/doggo-create/doggo-create.component';
import { DoggoDetailComponent } from './components/doggos/doggo-detail/doggo-detail.component';
import { DoggoEditComponent } from './components/doggos/doggo-edit/doggo-edit.component';
import { DoggoDeleteComponent } from './components/doggos/doggo-delete/doggo-delete.component';
import { DoggoService } from './services/doggo.service';
import { humanService } from './services/human.service';
import { KennelService } from './services/kennel.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KennelCreateComponent } from './components/kennels/kennel-create/kennel-create.component';
import { KennelDeleteComponent } from './components/kennels/kennel-delete/kennel-delete.component';
import { KennelDetailComponent } from './components/kennels/kennel-detail/kennel-detail.component';
import { KennelEditComponent } from './components/kennels/kennel-edit/kennel-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HumanComponent,
    KennelComponent,
    RegisterComponent,
    HumanCreateComponent,
    HumanDetailComponent,
    HumanEditComponent,
    HumanDeleteComponent,
    HumanComponent,
    DoggoCreateComponent,
    DoggoDetailComponent,
    DoggoEditComponent,
    DoggoDeleteComponent,
    DoggoComponent,
    KennelComponent,
    KennelCreateComponent,
    KennelDeleteComponent,
    KennelDetailComponent,
    KennelEditComponent,
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
    HumanService
    KennelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
