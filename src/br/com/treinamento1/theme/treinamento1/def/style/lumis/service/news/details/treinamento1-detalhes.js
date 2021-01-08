<%
var rows = lum_xpath.getMaps("//data/row");
for(var i in rows)
{
	var row = rows[i];
%>
	<article class="news-detail desktop-8 desktop-push-2 tablet-full mobile-full"> 
	    <h1><%=row.title%></h1> 
	    <p class="intro"><%=row.introduction%></p> 
	    <img class="news-img" src="<%=row.contentImage.href%>" /> 
	    <p><%lum_out.print(row.content);%></p> 
	    <p class="credits">Escrito por Fulano da Silva, em 26/11/2014</p> 
	</article>
<%
}
%>