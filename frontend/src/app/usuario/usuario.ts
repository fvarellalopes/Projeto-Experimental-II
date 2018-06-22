import { PerfilUsuario } from './perfilUsuario';
import { Cliente } from '../cliente/cliente';

export class Usuario{


    constructor(
      public idUsuario?: number,
      public nome?: string,
      public telefone?: string,
      public email?: string,
      public senha?: string,
      public cliente?: Cliente,
      public perfilUsuario?: PerfilUsuario  ) { }
    }
