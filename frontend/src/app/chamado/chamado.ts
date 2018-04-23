import { Cliente } from '../cliente/cliente';
import { TipoChamado } from './tipoChamado';
export class Chamado{


    constructor(
      public  descricao?: string,
      public  titulo?: string,
      public  data?: string,
      public situacao?: number,
      public  prioridade?: number,
      public cliente?: Cliente,
      public tipoChamado?: TipoChamado ) { }
    }
