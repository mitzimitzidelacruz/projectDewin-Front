import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './components/careers/careers.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';

import { AuthGuard } from './auth.guard';
import { ListarTalleresComponent } from './components/listar-talleres/listar-talleres.component';
import { CrearTalleresComponent } from './components/crear-talleres/crear-talleres.component';
;


const routes: Routes = [

{path: '', redirectTo: '/login',
pathMatch: 'full'},
//ruta que necesita validacion
{path: 'private', component:PrivateTasksComponent, canActivate: [AuthGuard]},
{path: 'tasks', component: TasksComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'home', component: HomeComponent},
{path: 'careers', component: CareersComponent},
{path:'listar-taller', component: ListarTalleresComponent},
{path:'crear-taller',component: CrearTalleresComponent,},
{path:'editar-taller/:id', component: CrearTalleresComponent},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
