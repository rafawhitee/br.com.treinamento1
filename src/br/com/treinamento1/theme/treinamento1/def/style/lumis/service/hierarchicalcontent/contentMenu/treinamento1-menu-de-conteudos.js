<%
var rows = lum_xpath.getMaps("//data/row");
for(var i in rows)
{
	var row = rows[i];
%>
	<li class="desktop-2 tablet-1 mobile-full">
		<%
		if(row.inCurrentPath == "true")
		{
		%>
			<a class="navigation-link active" href="<%=row.$href%>"><%=row.title%></a>
		<%
		}
		else
		{
		%>
			<a class="navigation-link" href="<%=row.$href%>"><%=row.title%></a>
		<%
		}
		%>
	</li> 
<%
}
%>