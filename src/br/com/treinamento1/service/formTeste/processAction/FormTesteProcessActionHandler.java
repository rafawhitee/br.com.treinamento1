package br.com.treinamento1.service.formTeste.processAction;

import javax.servlet.http.HttpServletRequest;

import lumis.doui.processaction.ProcessActionHandler;
import lumis.doui.source.Source;
import lumis.portal.PortalException;

public class FormTesteProcessActionHandler extends ProcessActionHandler<Source<?>> {

	@Override
	public void processAction() throws PortalException {
		HttpServletRequest request = (HttpServletRequest) douiContext.getRequest();
		String nome = request.getParameter("nome");
		douiContext.getActionResponse().setRenderParameter("nome", nome);
	}

}