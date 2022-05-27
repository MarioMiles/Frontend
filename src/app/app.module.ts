import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import "@angular/common/locales/global/es";

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { NumerosPipe } from './pipes/numeros.pipe';
import { DniPipe } from './pipes/dni.pipe';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';
import { ListaPerfilesComponent } from './componentes/lista-perfiles/lista-perfiles.component';
import { AdopcionesComponent } from './componentes/adopciones/adopciones.component';
import { AnuncioComponent } from './componentes/anuncio/anuncio.component';
import { MisAdopcionesComponent } from './componentes/mis-adopciones/mis-adopciones.component';
import { ConfirmarAdopcionComponent } from './componentes/confirmar-adopcion/confirmar-adopcion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginAdminComponent } from './componentes/auth/login-admin/login-admin.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { SugerenciasComponent } from './componentes/sugerencias/sugerencias.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavegacionComponent,
    HolaComponent,
    NumerosPipe,
    DniPipe,
    EstructurasComponent,
    FormularioClaseComponent,
    RegistroComponent,
    CrudComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    ListaPerfilesComponent,
    AdopcionesComponent,
    AnuncioComponent,
    MisAdopcionesComponent,
    ConfirmarAdopcionComponent,
    FooterComponent,
    LoginAdminComponent,
    AdminComponent,
    SugerenciasComponent
    
   
    
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:"es"},
    {provide: HTTP_INTERCEPTORS, useClass:EnviarTokenInterceptor, multi:true}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
