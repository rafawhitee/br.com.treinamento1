<article class="news-detail desktop-8 desktop-push-2 tablet-full mobile-full"> 
	
	<%
	   var formData = lum_xpath.getMap("//control[@id='lum_form']/data");
	   var queryData = lum_xpath.getMap("//control[@id='query']/data");
	
		var paginationData = lum_xpath.getMap("//control[@id='resultListPagination']/data");
	   
	   var queryPalavra = "";
	   var resultado = "";
	
	   var resultadoSingular = "resultado encontrado";
	   var resultadosPlural = "resultados encontrados";
	   
	   if(queryData)
		   queryPalavra = queryData.value;
	
	if(paginationData.totalRows == 1)
		resultado = resultadoSingular;
	else 
		resultado = resultadosPlural;
	%>
	
    <form name="<%=formData.name%>" method="<%=formData.method%>" action="<%=formData["action-doSearch"]%>"> 
        <h1>Resultado de busca por: <span class="keyword"><%=queryPalavra%></span></h1> 
        <p class="intro"><%=paginationData.totalRows%> <%=resultado%></p> 	
       <%
		var rows = lum_xpath.getMaps("//data/row");
		for(var i in rows)
		{
			var row = rows[i];
		%>
		<%
			if(row.introductionImage.length)
			{
		%>
			<a href="<%=row.url%>" class="news-list-item row"> 
				<div class="news-image desktop-6 tablet-3 mobile-full"> 
					<div class="news-fader"> 
						<div class="read-more">
							Leia a notícia
						</div> 
					</div> 
					<img src="<%=row.introductionImage%>" /> 
				</div> 
				<div class="desktop-6 tablet-3 mobile-full"> 
					<h1><%=row.title%></h1> 
					<p><%=row.subtitle%></p> 
				</div> 
			</a> 
			<%
			}
			else
			{
			%>
	        <a href="<%=row.url%>" class="news-list-item row"> 
	            <div class="all-full no-image"> 
	               <h1><%=row.title%></h1> 
					<p><%=row.subtitle%></p>
	            </div> 
			</a>
			<%
			}					
				}
			%>  
        <div class="lum-pagination"> 
            <div class="lum-pagination-range"> 
                <span class="lum-pagination-range-current"><%=paginationData.startRow%> - <%=paginationData.endRow%></span> de 
                <span class="lum-pagination-total-count"><%=paginationData.totalRows%></span> 
            </div> 
            <div class="lum-pagination-navigation"> 
                <div class="lum-pagination-navigation-page">
                    Página 
                    <input name="resultListPagination" type="hidden" value="<%=paginationData.currentPage%>" />
                    <input type="text" value="<%=paginationData.currentPage%>" /> de <%=paginationData.totalPages%>
                </div> 
                <div class="lum-pagination-navigation-buttons"> 
					<% 
					  if(paginationData.previousPage){	  
					%>
                    <a href="<%=paginationData.previousPage.$href%>">
                        <div class="lum-button lum-prev">
						</div>
					</a> 
					<%
					}
					else {
					%>
                    <a href="#">
                        <div class="lum-button lum-prev lum-disabled">
						</div>
					</a> 
					<%
					}
					%>
					
					<% 
					  if(paginationData.nextPage){	  
					%>
                    <a href="<%=paginationData.nextPage.$href%>">
                        <div class="lum-button lum-next">
						</div>
					</a> 
					<%
					}
					else {
					%>
                    <a href="#">
                        <div class="lum-button lum-next lum-disabled">
						</div>
					</a> 
					<%
					}
					%>
                </div> 
            </div> 
        </div> 
    </form> 
</article>