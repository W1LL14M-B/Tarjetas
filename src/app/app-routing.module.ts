import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoComponent } from './components/banco/banco.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
{path: '', redirectTo:'/banco', pathMatch: 'full' },
{ path: 'banco', component: BancoComponent},
{ path: 'tarjeta', component: TarjetaComponent},
{ path: 'marketplace', component: MarketplaceComponent},
{ path: '**', component: PagenotfoundComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
