<article class="all-full"> 
    <ul class="breadcrumb"> 
        <li><a href="main.jsp?lumPageId=402880ED76DF48590176DF81180F16E9">Home</a></li> 
        <%
								var rows = lum_xpath.getMaps("//data/row");
								for(var i in rows)
								{
									var row = rows[i];
								%>
									<li>
										<a class="nolink" href="<%=row.$href%>"><%=row.title%></a>
									</li> 
								<%
								}
								%>
    </ul> 
</article> 