-- View: public.atualiza_chamado

-- DROP VIEW public.atualiza_chamado;

CREATE OR REPLACE VIEW public.atualiza_chamado AS 
 SELECT "AtualizacaoChamado".idchamado AS "A_ID",
    "AtualizacaoChamado".descricao AS "A_Descricao",
    "AtualizacaoChamado".data AS "A_Data",
    "Usuario".nome AS "A_Usuario"
   FROM "AtualizacaoChamado"
     JOIN "Usuario" ON "AtualizacaoChamado".idusuario = "Usuario".idusuario;

ALTER TABLE public.atualiza_chamado
  OWNER TO postgres;

-- View: public.cabecalho_chamado

-- DROP VIEW public.cabecalho_chamado;

CREATE OR REPLACE VIEW public.cabecalho_chamado AS 
 SELECT "Chamado".idchamado AS "C_ID",
    "Chamado".data AS "C_Data",
    "Chamado".prioridade AS "C_Prioridade",
    "Chamado".situacao AS "C_Situacao",
    "Usuario".nome AS "C_Usuario",
    "Cliente".nome AS "C_Cliente",
    "TipoChamado".descricao AS "C_Tipo"
   FROM "Chamado"
     JOIN "UsuarioChamado" ON "UsuarioChamado".idusuario = "Chamado".idusuario
     JOIN "Usuario" ON "Usuario".idusuario = "UsuarioChamado".idusuario
     JOIN "Cliente" ON "Cliente".idcliente = "Chamado".idcliente
     JOIN "TipoChamado" ON "Chamado".idtipo = "TipoChamado".idtipochamado;

ALTER TABLE public.cabecalho_chamado
  OWNER TO postgres;

-- View: public.descricao_chamado

-- DROP VIEW public.descricao_chamado;

CREATE OR REPLACE VIEW public.descricao_chamado AS 
 SELECT "Chamado".idchamado AS "D_ID",
    "Chamado".descricao AS "D_Descricao"
   FROM "Chamado";

ALTER TABLE public.descricao_chamado
  OWNER TO postgres;

-- View: public.usuarios

-- DROP VIEW public.usuarios;

CREATE OR REPLACE VIEW public.usuarios AS 
 SELECT "Usuario".nome AS "Usuario",
    "Usuario".telefone AS "Contato",
    "Usuario".email AS "E-Mail",
    "PerfilUsuario".tipo AS "Perfil",
    "Cliente".nome AS "Cliente"
   FROM "Usuario"
     JOIN "PerfilUsuario" ON "Usuario".idperfil = "PerfilUsuario".idperfilusuario
     JOIN "Cliente" ON "Usuario".idcliente = "Cliente".idcliente;

ALTER TABLE public.usuarios
  OWNER TO postgres;
