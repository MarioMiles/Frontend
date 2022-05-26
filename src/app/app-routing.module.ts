import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRouterGuard } from './auth/user-router.guard';
import { AboutComponent } from './componentes/about/about.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ListaPerfilesComponent } from './componentes/lista-perfiles/lista-perfiles.component';
import { AdopcionesComponent } from './componentes/adopciones/adopciones.component';
import { AnuncioComponent } from './componentes/anuncio/anuncio.component';
import { MisAdopcionesComponent } from './componentes/mis-adopciones/mis-adopciones.component';
import { ConfirmarAdopcionComponent } from './componentes/confirmar-adopcion/confirmar-adopcion.component';
import { LoginAdminComponent } from './componentes/auth/login-admin/login-admin.component';
import { AdminComponent } from './componentes/admin/admin.component';



const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "hola/:nombre/:apellidos", component:HolaComponent},
  {path: "estructuras", component:EstructurasComponent},
  {path: "formulario", component:FormularioClaseComponent},
  {path: "crud", component:CrudComponent},
  {path: "registro", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "perfil", component:PerfilComponent, canActivate:[UserRouterGuard]},
  {path: "listaPerfiles", component:ListaPerfilesComponent},
  {path: "misAnimales", component:AdopcionesComponent},
  {path: "anuncio", component:AnuncioComponent},
  {path: "adopciones", component:MisAdopcionesComponent},
  {path: "confirmar", component:ConfirmarAdopcionComponent},
  {path: "loginAdmin", component:LoginAdminComponent},
  {path: "panelAdmin", component:AdminComponent},
 

  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
