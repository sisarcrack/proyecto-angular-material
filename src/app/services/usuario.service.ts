import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  listaUsuarios: Usuario[] = [
    { usuario: 'Jperez', nombre: 'Jose', apellido: 'Perez', sexo: 'Masculino' },
    {
      usuario: 'ctorres',
      nombre: 'Cesar',
      apellido: 'Torres',
      sexo: 'Masculino',
    },
  ];

  constructor() {}

  getUsuario() {
    return this.listaUsuarios.slice();
  }

  eliminarUsuaio(index: number) {
    this.listaUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listaUsuarios.unshift(usuario);
  }
}
