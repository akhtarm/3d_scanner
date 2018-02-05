import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AlertModule } from 'ngx-bootstrap';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CameraComponent } from './camera/camera.component';
import { CameraSectionComponent } from './camera-section/camera-section.component';
import { SettingsSectionComponent } from './settings-section/settings-section.component';
import { InstructionsSectionComponent } from './instructions-section/instructions-section.component';


import { CameraService } from './camera/camera.service';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    TopBarComponent,
    CameraComponent,
    CameraSectionComponent,
    SettingsSectionComponent,
    InstructionsSectionComponent
  ],
  imports: [
    RoutingModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AlertModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService,
    CameraService

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
