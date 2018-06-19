package br.univel.pe.auth;

import java.io.IOException;
import java.util.logging.Logger;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

@Provider
@PreMatching
public class AuthFilter implements ContainerRequestFilter {

	private final static Logger LOG = Logger.getLogger(AuthFilter.class.getName());

	@Override
	public void filter(ContainerRequestContext requestCtx) throws IOException {

		String path = requestCtx.getUriInfo().getPath();
		LOG.info("Filtering request path:" + path);

		// IMPORTANT!!! First, OPTIONS
		if (requestCtx.getRequest().getMethod().equals("OPTIONS")) {
			requestCtx.abortWith(Response.status(Response.Status.OK).build());
			return;
		}

		Autenticator autenticator = Autenticator.getInstance();


		if (!path.startsWith("usuarios/login")) {
			String authToken = requestCtx.getHeaderString(Autenticator.TOKEN);

			if (!autenticator.isTokenValid(authToken)) {
				requestCtx.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
			}
		}
	}
}