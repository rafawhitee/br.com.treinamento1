package br.com.treinamento1.service.helloworld;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.treinamento1.service.dto.GitRepositoryDTO;
import kong.unirest.HttpResponse;
import kong.unirest.JsonNode;
import kong.unirest.JsonObjectMapper;
import kong.unirest.ObjectMapper;
import kong.unirest.Unirest;
import kong.unirest.json.JSONArray;
import kong.unirest.json.JSONObject;
import lumis.portal.PortalException;
import lumis.portal.serviceinterface.GenericServiceInterface;
import lumis.portal.serviceinterface.IServiceInterfaceRenderRequest;
import lumis.portal.serviceinterface.IServiceInterfaceRenderResponse;
import lumis.portal.serviceinterface.ServiceInterfaceException;

public class RepositoriesGithub extends GenericServiceInterface {

	private final static Logger logger = LoggerFactory.getLogger(RepositoriesGithub.class);
	private final String URL_GITHUB = "https://api.github.com";

	@Override
	public void render(IServiceInterfaceRenderRequest request, IServiceInterfaceRenderResponse response)
			throws ServiceInterfaceException, PortalException {
		try {
			JSONArray retorno = getJsonObjectRepositoriesByUsername("rafawhitee");
			if (retorno != null && retorno.length() > 0) {
				response.getWriter().write("<div style=\"display:flex; flex-direction:column;\"");
				for (int i = 0; i < retorno.length(); i++) {
					JSONObject currentObj = (JSONObject) retorno.get(i);
					ObjectMapper mapper = new JsonObjectMapper();
					GitRepositoryDTO gitRepositoryDTO = mapper.readValue(currentObj.toString(), GitRepositoryDTO.class);
					if (gitRepositoryDTO != null) 
						response.getWriter().write("<h3 style=\"color: green;\">" + gitRepositoryDTO.getName() + " </h3>");
					
				}
				response.getWriter().write("</div>");
			} else
				super.render(request, response);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private JSONArray getJsonObjectRepositoriesByUsername(String username) {
		try {
			HttpResponse<JsonNode> response = Unirest.get(URL_GITHUB + "/users/" + username + "/repos").asJson();
			JSONArray array = (response != null && response.getBody() != null) ? response.getBody().getArray() : null;
			if (array != null)
				return array;

			return null;
		} catch (Exception e) {
			logger.error("Error: " + e.getMessage());
			return null;
		}
	}

}