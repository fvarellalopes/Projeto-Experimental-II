CREATE TABLE UsuarioChamado (
	idusuario int NOT NULL,
	idchamado int NOT NULL,
	idnresponsavel BOOLEAN NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Chamado" (
	"idchamado" serial NOT NULL,
	"idusuario" int NOT NULL,
	"descricao" varchar(1000) NOT NULL,
	"prioridade" int(1) NOT NULL,
	"titulo" varchar(25) NOT NULL,
	"data" DATE NOT NULL,
	"situacao" int NOT NULL,
	"idtipo" int NOT NULL,
	"idcliente" int NOT NULL,
	CONSTRAINT Chamado_pk PRIMARY KEY ("idchamado")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Usuario" (
	"idusuario" serial NOT NULL,
	"nome" varchar(100) NOT NULL,
	"telefone" varchar(15) NOT NULL,
	"email" varchar(20) NOT NULL,
	"senha" varchar(10) NOT NULL,
	"idperfil" int NOT NULL,
	"idcliente" int NOT NULL,
	CONSTRAINT Usuario_pk PRIMARY KEY ("idusuario")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "PerfilUsuario" (
	"idperfilusuario" serial NOT NULL,
	"tipo" int NOT NULL,
	"descricao" varchar(100) NOT NULL,
	CONSTRAINT PerfilUsuario_pk PRIMARY KEY ("idperfilusuario")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "AtualizacaoChamado" (
	"idatualizacaochamado" serial NOT NULL,
	"descricao" varchar(1000) NOT NULL,
	"data" DATE NOT NULL,
	"idchamado" int NOT NULL,
	"idusuario" int NOT NULL,
	CONSTRAINT AtualizacaoChamado_pk PRIMARY KEY ("idatualizacaochamado")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "TipoChamado" (
	"idtipochamado" serial NOT NULL,
	"descricao" varchar(50) NOT NULL,
	CONSTRAINT TipoChamado_pk PRIMARY KEY ("idtipochamado")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Cliente" (
	"idcliente" serial NOT NULL,
	"nome" varchar(100) NOT NULL,
	"telefone" varchar(25) NOT NULL,
	CONSTRAINT Cliente_pk PRIMARY KEY ("idcliente")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "UsuarioChamado" ADD CONSTRAINT "UsuarioChamado_fk0" FOREIGN KEY ("idusuario") REFERENCES "Usuario"("idusuario");
ALTER TABLE "UsuarioChamado" ADD CONSTRAINT "UsuarioChamado_fk1" FOREIGN KEY ("idchamado") REFERENCES "Chamado"("idchamado");

ALTER TABLE "Chamado" ADD CONSTRAINT "Chamado_fk0" FOREIGN KEY ("idtipo") REFERENCES "TipoChamado"("idtipochamado");
ALTER TABLE "Chamado" ADD CONSTRAINT "Chamado_fk1" FOREIGN KEY ("idcliente") REFERENCES "Cliente"("idcliente");

ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_fk0" FOREIGN KEY ("idperfil") REFERENCES "PerfilUsuario"("idperfilusuario");
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_fk1" FOREIGN KEY ("idcliente") REFERENCES "Cliente"("idcliente");


ALTER TABLE "AtualizacaoChamado" ADD CONSTRAINT "AtualizacaoChamado_fk0" FOREIGN KEY ("idchamado") REFERENCES "Chamado"("idchamado");
ALTER TABLE "AtualizacaoChamado" ADD CONSTRAINT "AtualizacaoChamado_fk1" FOREIGN KEY ("idusuario") REFERENCES "Usuario"("idusuario");


