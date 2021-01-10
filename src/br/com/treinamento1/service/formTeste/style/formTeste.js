<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>

<form id="formTeste" action="<%=lum_xpath.valueOf("//control[@type='lum_form']/data/action-commit", lum_document)%>" method="POST" onsubmit="return false;">
	            <div>
				    <div>
                    <label for="nome">Nome: </label>
                    <input name="nome" id="nome" />
                </div>

	                <div>
						<a onclick="$('#formTeste').submit()">Enviar</a>
	                </div>
	            </div>
</form>

<script>
	$( document ).ready(function() {
		$("#formTeste").on("submit", function(e){
			e.preventDefault();
			$.ajax({			
					url: g_LumisRoot_href + $("#formTeste").attr("action"),
					type: "POST",
					dataType: 'json',
					data: $("#formTeste").serialize(), 
					success: function(data) {	
						console.log(data);
						alert("Sucesso");
					},
					error: function(er) {
						console.error(er.error);
					}
				});
		})
	});
</script>