import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BancoComponent } from './components/banco/banco.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormTarjetaComponent } from './components/form-tarjeta/form-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    BancoComponent,
    TarjetaComponent,
    MarketplaceComponent,
    PagenotfoundComponent,
    FormTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
