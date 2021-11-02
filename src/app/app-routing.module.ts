import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { AppComponent } from './app.component';
import { ClassicosComponent } from './classicos/classicos.component';
import { DisneyInfinityComponent } from './disney-infinity/disney-infinity.component';
import { GeekENerdComponent } from './geek-e-nerd/geek-e-nerd.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { NintendoComponent } from './nintendo/nintendo.component';
import { PCComponent } from './pc/pc.component';
import { PlaystationComponent } from './playstation/playstation.component';
import { SeminovosComponent } from './seminovos/seminovos.component';
import { XboxComponent } from './xbox/xbox.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'xbox',
    component: XboxComponent,
},
{
  path: "playstation",
  component: PlaystationComponent
},
{
  path:"nintendo",
  component: NintendoComponent
},
{
  path: "classicos",
  component: ClassicosComponent
},
{
  path: "pc",
  component: PCComponent
},
{
  path:"geek-e-nerd",
  component: GeekENerdComponent
},
{
  path:"acessorios",
  component: AcessoriosComponent
},
{
  path:"mobile",
  component: MobileComponent
},
{
  path:"disney-infinity",
  component: DisneyInfinityComponent
},
{
  path:"seminovos",
  component: SeminovosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
