package br.com.treinamento1.service.helloworld;

import lumis.portal.PortalException;
import lumis.portal.serviceinterface.GenericServiceInterface;
import lumis.portal.serviceinterface.IServiceInterfaceRenderRequest;
import lumis.portal.serviceinterface.IServiceInterfaceRenderResponse;
import lumis.portal.serviceinterface.ServiceInterfaceException;

public class HelloWorld extends GenericServiceInterface {

	@Override
	public void render(IServiceInterfaceRenderRequest request, IServiceInterfaceRenderResponse response)
			throws ServiceInterfaceException, PortalException {
		try {
			StringBuilder sb = new StringBuilder();
			sb.append("<div>");
			for (int i = 0; i < 10; i++)
				sb.append("<span> Parágrafo " + i + " </span>");

			sb.append("</div>");
			response.getWriter().write(sb.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}