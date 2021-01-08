<%
var rows = lum_xpath.getMaps("//data/row");
for(var i in rows)
{
	var row = rows[i];
%>
	<article class="desktop-4 tablet-2 mobile-full"> 
	    <a href="<%=row.$href%>" class="news-list-item"> 
	        <div class="news-image"> 
	            <div class="news-fader"> 
	                <div class="read-more">
	                     Leia a notícia 
	                </div> 
	            </div> 
	            <img src="<%=row.introductionImage.href%>" /> 
	        </div> <h1><%=row.title%></h1> <p><%=row.introduction%></p> </a> 
	</article> 
<%
}
%>