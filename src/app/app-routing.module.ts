import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MisProyectosComponent } from './pages/mis-proyectos/mis-proyectos.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'mis-proyecto', component: MisProyectosComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'currriculum', component: CurriculumComponent},
  {path: 'contactos', component: ContactosComponent},
  {path: ' ', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
