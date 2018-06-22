package br.univel.pe.service;

import java.security.GeneralSecurityException;
import java.security.NoSuchAlgorithmException;

import javax.security.auth.login.LoginException;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

import br.univel.pe.auth.Autenticator;
import br.univel.pe.entity.Usuario;
import br.univel.pe.repository.GenericRepository;
import br.univel.pe.repository.UsuarioRepository;

@Path("/usuarios")
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioService extends GenericService<Usuario, Long> {

	@Override
	public Class getClazz() {
		return Usuario.class;
	}

	@Override
	protected String getPropertyDescricao() {
		return "nome";
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("login")
	public Response login(@Context HttpHeaders httpHeaders, Usuario usuario) throws NoSuchAlgorithmException {

		Autenticator autenticator = Autenticator.getInstance();
//		String serviceKey = httpHeaders.getHeaderString(Autenticator.KEY);
		try {
			String authToken = autenticator.login(usuario.getEmail(), usuario.getSenha());
			JsonObject jsonObjBuilder = new JsonObject();
			jsonObjBuilder.addProperty("token", authToken);
			return Response.ok(jsonObjBuilder.toString()).build();

		} catch (final LoginException ex) {
			JsonObject jsonObjBuilder = new JsonObject();
			jsonObjBuilder.addProperty("message", "Usuario ou senha incorretos");

			return Response.status(Status.UNAUTHORIZED).entity(jsonObjBuilder.toString()).build();
		}
	}

	@GET
	@Path("get")
	public Response get() {
		JsonObject jsonObjBuilder = new JsonObject();
		jsonObjBuilder.addProperty("message", "Get executed!");

		return Response.ok(jsonObjBuilder.toString()).build();
	}

	@POST
	@Path("logout")
	public Response logout(@Context HttpHeaders httpHeaders) throws Exception {
		try {
			Autenticator demoAuthenticator = Autenticator.getInstance();
			String authToken = httpHeaders.getHeaderString(Autenticator.TOKEN);
			demoAuthenticator.logout( authToken);
			return Response.ok().build();
		} catch (GeneralSecurityException ex) {
			return Response.status(Status.INTERNAL_SERVER_ERROR).build();
		}
	}
	@Override
	protected GenericRepository getRepository() {
		// TODO Auto-generated method stub
		return new UsuarioRepository();
	}
}
