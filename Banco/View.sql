CREATE VIEW cabecalho_chamado AS
  SELECT "Chamado".data AS c_data,
    "Chamado".prioridade AS c_prioridade,
    "Chamado".situacao AS c_situacao,
    "Usuario".nome AS c_usuario,
    "Cliente".nome AS c_cliente,
    "TipoChamado".descricao AS c_tipo
   FROM (((("Chamado"
     JOIN "UsuarioChamado" ON (("UsuarioChamado".idusuario = "Chamado".idusuario)))
     JOIN "Usuario" ON (("Usuario".idusuario = "UsuarioChamado".idusuario)))
     JOIN "Cliente" ON (("Cliente".idcliente = "Chamado".idcliente)))
     JOIN "TipoChamado" ON (("Chamado".idtipo = "TipoChamado".idtipochamado)));

    CREATE VIEW atualiza_chamado AS
  SELECT "AtualizacaoChamado".idchamado AS a_id,
    "AtualizacaoChamado".descricao AS a_descricao,
    "AtualizacaoChamado".data AS a_data,
    "Usuario".nome AS a_usuario
   FROM ("AtualizacaoChamado"
     JOIN "Usuario" ON (("AtualizacaoChamado".idusuario = "Usuario".idusuario)));

CREATE VIEW descricao_chamado AS
  SELECT "Chamado".idchamado AS d_id,
    "Chamado".descricao AS d_descricao
   FROM "Chamado";

