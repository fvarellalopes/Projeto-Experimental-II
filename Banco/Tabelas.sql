-- Table: public."AtualizacaoChamado"

-- DROP TABLE public."AtualizacaoChamado";

CREATE TABLE public."AtualizacaoChamado"
(
  idatualizacaochamado integer NOT NULL DEFAULT nextval('"AtualizacaoChamado_idatualizacaochamado_seq"'::regclass),
  descricao character varying(1000) NOT NULL,
  data date NOT NULL,
  idchamado integer NOT NULL,
  idusuario integer NOT NULL,
  CONSTRAINT atualizacaochamado_pk PRIMARY KEY (idatualizacaochamado),
  CONSTRAINT "AtualizacaoChamado_fk0" FOREIGN KEY (idchamado)
      REFERENCES public."Chamado" (idchamado) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT "AtualizacaoChamado_fk1" FOREIGN KEY (idusuario)
      REFERENCES public."Usuario" (idusuario) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."AtualizacaoChamado"
  OWNER TO postgres;


-- Table: public."Chamado"

-- DROP TABLE public."Chamado";

CREATE TABLE public."Chamado"
(
  idchamado integer NOT NULL DEFAULT nextval('"Chamado_idchamado_seq"'::regclass),
  idusuario integer NOT NULL,
  descricao character varying(1000) NOT NULL,
  prioridade integer NOT NULL,
  titulo character varying(25) NOT NULL,
  data date NOT NULL,
  situacao integer NOT NULL,
  idtipo integer NOT NULL,
  idcliente integer NOT NULL,
  CONSTRAINT chamado_pk PRIMARY KEY (idchamado),
  CONSTRAINT "Chamado_fk0" FOREIGN KEY (idtipo)
      REFERENCES public."TipoChamado" (idtipochamado) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT "Chamado_fk1" FOREIGN KEY (idcliente)
      REFERENCES public."Cliente" (idcliente) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."Chamado"
  OWNER TO postgres;


-- Table: public."Cliente"

-- DROP TABLE public."Cliente";

CREATE TABLE public."Cliente"
(
  idcliente integer NOT NULL DEFAULT nextval('"Cliente_idcliente_seq"'::regclass),
  nome character varying(100) NOT NULL,
  telefone character varying(25) NOT NULL,
  CONSTRAINT cliente_pk PRIMARY KEY (idcliente)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."Cliente"
  OWNER TO postgres;


-- Table: public."PerfilUsuario"

-- DROP TABLE public."PerfilUsuario";

CREATE TABLE public."PerfilUsuario"
(
  idperfilusuario integer NOT NULL DEFAULT nextval('"PerfilUsuario_idperfilusuario_seq"'::regclass),
  tipo integer NOT NULL,
  descricao character varying(100) NOT NULL,
  CONSTRAINT perfilusuario_pk PRIMARY KEY (idperfilusuario)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."PerfilUsuario"
  OWNER TO postgres;


-- Table: public."TipoChamado"

-- DROP TABLE public."TipoChamado";

CREATE TABLE public."TipoChamado"
(
  idtipochamado integer NOT NULL DEFAULT nextval('"TipoChamado_idtipochamado_seq"'::regclass),
  descricao character varying(50) NOT NULL,
  CONSTRAINT tipochamado_pk PRIMARY KEY (idtipochamado)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."TipoChamado"
  OWNER TO postgres;


-- Table: public."Usuario"

-- DROP TABLE public."Usuario";

CREATE TABLE public."Usuario"
(
  idusuario integer NOT NULL DEFAULT nextval('"Usuario_idusuario_seq"'::regclass),
  nome character varying(100) NOT NULL,
  telefone character varying(15) NOT NULL,
  email character varying(20) NOT NULL,
  senha character varying(10) NOT NULL,
  idperfil integer NOT NULL,
  idcliente integer NOT NULL,
  CONSTRAINT usuario_pk PRIMARY KEY (idusuario),
  CONSTRAINT "Usuario_fk0" FOREIGN KEY (idperfil)
      REFERENCES public."PerfilUsuario" (idperfilusuario) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT "Usuario_fk1" FOREIGN KEY (idcliente)
      REFERENCES public."Cliente" (idcliente) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."Usuario"
  OWNER TO postgres;


-- Table: public."UsuarioChamado"

-- DROP TABLE public."UsuarioChamado";

CREATE TABLE public."UsuarioChamado"
(
  idusuario integer NOT NULL,
  idchamado integer NOT NULL,
  idnresponsavel boolean NOT NULL,
  CONSTRAINT "UsuarioChamado_fk0" FOREIGN KEY (idusuario)
      REFERENCES public."Usuario" (idusuario) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT "UsuarioChamado_fk1" FOREIGN KEY (idchamado)
      REFERENCES public."Chamado" (idchamado) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."UsuarioChamado"
  OWNER TO postgres;

