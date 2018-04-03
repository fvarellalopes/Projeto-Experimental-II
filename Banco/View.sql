-- View: public.descricao_chamado

-- DROP VIEW public.descricao_chamado;

CREATE OR REPLACE VIEW public.descricao_chamado AS 
 SELECT "Chamado".idchamado AS d_id,
    "Chamado".descricao AS d_descricao
   FROM "Chamado";

ALTER TABLE public.descricao_chamado
  OWNER TO postgres;

-- View: public.cabecalho_chamado

-- DROP VIEW public.cabecalho_chamado;

CREATE OR REPLACE VIEW public.cabecalho_chamado AS 
 SELECT "Chamado".idchamado AS c_id,
    "Chamado".data AS c_data,
    "Chamado".prioridade AS c_prioridade,
    "Chamado".situacao AS c_situacao,
    "Usuario".nome AS c_usuario,
    "Cliente".nome AS c_cliente,
    "TipoChamado".descricao AS c_tipo
   FROM "Chamado"
     JOIN "UsuarioChamado" ON "UsuarioChamado".idusuario = "Chamado".idusuario
     JOIN "Usuario" ON "Usuario".idusuario = "UsuarioChamado".idusuario
     JOIN "Cliente" ON "Cliente".idcliente = "Chamado".idcliente
     JOIN "TipoChamado" ON "Chamado".idtipo = "TipoChamado".idtipochamado;

ALTER TABLE public.cabecalho_chamado
  OWNER TO postgres;

-- View: public.atualiza_chamado

-- DROP VIEW public.atualiza_chamado;

CREATE OR REPLACE VIEW public.atualiza_chamado AS 
 SELECT "AtualizacaoChamado".idchamado AS a_id,
    "AtualizacaoChamado".descricao AS a_descricao,
    "AtualizacaoChamado".data AS a_data,
    "Usuario".nome AS a_usuario
   FROM "AtualizacaoChamado"
     JOIN "Usuario" ON "AtualizacaoChamado".idusuario = "Usuario".idusuario;

ALTER TABLE public.atualiza_chamado
  OWNER TO postgres;
