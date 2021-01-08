<article class="news-detail desktop-8 desktop-push-2 tablet-full mobile-full"> 
    <h1>Fique por dentro das últimas notícias:</h1> 
    <%
				var rows = lum_xpath.getMaps("//data/row");
				for(var i in rows)
				{
					var row = rows[i];
				%>
					<a href="<%=row.$href%>" class="news-list-item row"> 
	        <div class="news-image desktop-6 tablet-3 mobile-full"> 
	            <div class="news-fader"> 
	                <div class="read-more">
	                    Leia a notícia
	                </div> 
	            </div> 
	            <img src="<%=row.introductionImage.href%>" /> 
	        </div> 
	        <div class="desktop-6 tablet-3 mobile-full"> 
	            <h1><%=row.title%></h1> 
	            <p><%=row.introduction%></p> 
	            <p class="credits"><%=row.publishStartDate.value%></p> 
	        </div> </a> 
				<%
				}
				%>
    <div class="lum-pagination"> 
        <div class="lum-pagination-range"> 
            <span class="lum-pagination-range-current">1 - 25</span> de 
            <span class="lum-pagination-total-count">25</span> 
        </div> 
        <div class="lum-pagination-navigation"> 
            <div class="lum-pagination-navigation-page">
                Página 
                <input name="list.pagination" type="hidden" value="1" />
                <input class="lum_FF80808149AAFCD90149ADEB9B751B21_list_paginationVisible" type="text" value="1" /> de 1
            </div> 
            <div class="lum-pagination-navigation-buttons"> 
                <div class="lum-button lum-prev lum-disabled"></div> 
                <div class="lum-button lum-next lum-disabled"></div> 
            </div> 
        </div> 
    </div> 
</article>