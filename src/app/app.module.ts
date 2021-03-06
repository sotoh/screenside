import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioSesionComponent } from './componentes/generales/usuario/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './componentes/generales/usuario/registro/registro.component';
import { MenuComponent } from './componentes/generales/menu/menu/menu.component';
import { JuegoComponent } from './componentes/generales/menu/juego/juego.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFixtureAutoDetect } from '@angular/core/testing'
import { PuntuajeComponent } from './componentes/generales/menu/puntuaje/puntuaje.component';
import { JwtinterceptorService } from './servicios/jwtinterceptor.service';
import { ErrorinterceptorService } from './servicios/errorinterceptor.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MenujuegoComponent } from './componentes/generales/menu/menujuego/menujuego.component';
import { AdministradorComponent } from './componentes/generales/administrador/administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistroComponent,
    MenuComponent,
    JuegoComponent,
    PuntuajeComponent,
    MenujuegoComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorinterceptorService,multi:true},
    {provide: ComponentFixtureAutoDetect,useValue:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
