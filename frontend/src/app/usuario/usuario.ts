
export class Usuario{


    constructor(
      public nome?: string,
      public telefone?: string,
      public email?: string,
      public senha?: string,
      public cliente?: object,
      public perfilacesso?: object  ) { }
    }
