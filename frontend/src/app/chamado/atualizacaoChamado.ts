import { Usuario } from '../usuario/usuario';
import { Chamado } from './chamado';


export class AtualizacaoChamado{
    constructor(
      public idAtualizacaoChamado?: number,
      public descricao?: string,
      public data?: number,
      public usuario?: Usuario

     ) { }
    }
