package br.univel.pe.util;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Properties;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import br.univel.pe.entity.Cliente;
import br.univel.pe.entity.Usuario;

public class HibernateUtil {
	private static SessionFactory sessionFactory;

	public static SessionFactory getSessionFactory() {
		if (sessionFactory == null) {
			// loads configuration and mappings
			Configuration configuration = new Configuration().configure();
			Properties properties = configuration.getProperties();
			if (System.getenv("HEROKU_POSTGRESQL_COPPER_URL") != null) {
				URI dbUri;
				try {
					dbUri = new URI(System.getenv("HEROKU_POSTGRESQL_COPPER_URL"));

					String username = dbUri.getUserInfo().split(":")[0];
					String password = dbUri.getUserInfo().split(":")[1];
					String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath();

					properties.setProperty("hibernate.connection.url", dbUrl);
					properties.setProperty("hibernate.connection.username", username);
					properties.setProperty("hibernate.connection.password", password);
				} catch (URISyntaxException e) {
					e.printStackTrace();
				}

			}
			ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(properties).build();

			// builds a session factory from the service registry
			sessionFactory = configuration.buildSessionFactory(serviceRegistry);
		}
		return sessionFactory;

	}

	public static Session getSession() {
		return getSessionFactory().openSession();
	}

}