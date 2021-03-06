import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/generales/usuario';
import { AuthenticationService } from 'src/app/servicios/autenfificacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { first } from 'rxjs/operators';
import { JugadorService } from 'src/app/servicios/jugador.service';
import { Role } from 'src/app/interface/generales/roles';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentUser: Usuario;
  userFromApi: Usuario;
  public puntuajeUsuario:any = [];
  constructor(
    private playerService: JugadorService,
    private authService: AuthenticationService,
    private userService: UsuarioService
  ) {
    this.currentUser = this.authService.currentUserValue;
   }

  ngOnInit() {
    if(this.currentUser.rol == Role.user){
    this.userService.getByID(this.currentUser.id).pipe(first()).subscribe(
      user => {
        this.userFromApi= user;
      });     
    }
      if(this.currentUser && this.currentUser.rol == Role.user){
      this.playerService.verPuntuajeUsuario();
    this.playerService.getpuntuajeJuegoUsuario.subscribe(getPuntuaje  => 
      {
        this.puntuajeUsuario = getPuntuaje;

      })
    }
  }

  

}
