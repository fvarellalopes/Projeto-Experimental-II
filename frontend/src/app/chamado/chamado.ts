import { TipoChamado } from './tipoChamado';
import { Cliente } from '../cliente/cliente';
import { Usuario } from '../usuario/usuario';


export class Chamado{


    constructor(
      public idChamado?: number,
      public  descricao?: string,
      public  titulo?: string,
      public  data?: string,
      public situacao?: number,
      public  prioridade?: number,
      public cliente?: Cliente,
      public usuario?: Usuario,
      public tipoChamado?: TipoChamado ) { }
    }
