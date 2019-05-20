import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HumanComponent } from './components/human/human.component';
import { KennelComponent } from './components/kennels/kennel/kennel.component';
import { DoggoComponent } from './components/doggos/doggo/doggo.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HumanCreateComponent } from './components/human/human-create/human-create.component';
import { HumanDetailComponent } from './components/human/human-detail/human-detail.component';
import { HumanEditComponent } from './components/human/human-edit/human-edit.component';
import { HumanDeleteComponent } from './components/human/human-delete/human-delete.component';
import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatTableModule,
         MatCheckboxModule,
         MatRadioModule,
         MatSelectModule, } from '@angular/material';
import { DoggoCreateComponent } from './components/doggos/doggo-create/doggo-create.component';
import { DoggoDetailComponent } from './components/doggos/doggo-detail/doggo-detail.component';
import { DoggoEditComponent } from './components/doggos/doggo-edit/doggo-edit.component';
import { DoggoDeleteComponent } from './components/doggos/doggo-delete/doggo-delete.component';
import { DoggoService } from './services/doggo.service';
import { HumanService } from './services/human.service';
import { KennelService } from './services/kennel.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KennelCreateComponent } from './components/kennels/kennel-create/kennel-create.component';
import { KennelDeleteComponent } from './components/kennels/kennel-delete/kennel-delete.component';
import { KennelDetailComponent } from './components/kennels/kennel-detail/kennel-detail.component';
import { KennelEditComponent } from './components/kennels/kennel-edit/kennel-edit.component';
import { AdminComponent } from './components/admin/admin.component';

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
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSelectModule,
  ],
  providers: [
    DoggoService,
    HumanService,
    KennelService,
    AuthGuardService,
    AuthService,
    RoleGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
