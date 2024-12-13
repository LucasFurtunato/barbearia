$(document).ready(function() {
	var type = null;
 	
	$.get( '../controllers/VfyLogin.php', function(dados) {
	    var objRetorno = JSON.parse(dados)

	    if (objRetorno.usrType == "funcionario" ){
	        $("#login-button").text(objRetorno.name);
			$("#btnadm").attr("href", "../../index.html")
			$("#link-img").attr("href", "../../index.html")
			type = objRetorno.usrType;
	    } else if(objRetorno.usrType == "gerente"){
			$("#login-button").text(objRetorno.name);
			type = objRetorno.usrType;
			$("#btnadm").attr("href", "../../index_main_admin.html")
			$("#link-img").attr("href", "../../index_main_admin.html")
		}else {
			window.location.href = '../../index.html';
		}
	});
	
	const today = new Date().toISOString().split('T')[0];

    // Carrega os agendamentos e preenche a tabela
    $.ajax({
        url: "../controllers/CtrlAgendamentos.php",
        method: "GET",
        success: function(response) {
            let data = JSON.parse(response);
            $('#table-body').empty(); // Limpa a tabela antes de adicionar novos dados

            data.forEach(item => {
				if (item.dia === today && type == "funcionario") {
					$('#table-body').append(`
					    <tr>
					        <td data-label="Nome Fun."><p>${item.funNome}</p></td>
					        <td data-label="Dia">${item.dia}</td>
					        <td data-label="Horário">${item.horario}</td>
					        <td data-label="Serviços">${
					            [item.corteNome, item.barbaNome, item.cuidadosNome]
					                .filter(nome => nome && nome.trim() !== "")
					                .join(", ")
					        }</td>                    
					        <td data-label="Nome Cliente">${item.clienteNome}</td>      
					        <td data-label="Situação">
					            <a href="#" class="btn a-fazer">A Fazer</a>
					        </td>              
					    </tr>
					`);
				} else if (type == "gerente") {
					$('#table-body').append(`
					    <tr>
					        <td data-label="Nome Fun."><p>${item.funNome}</p></td>
					        <td data-label="Dia">${item.dia}</td>
					        <td data-label="Horário">${item.horario}</td>
					        <td data-label="Serviços">${
					            [item.corteNome, item.barbaNome, item.cuidadosNome]
					                .filter(nome => nome && nome.trim() !== "")
					                .join(", ")
					        }</td>                    
					        <td data-label="Nome Cliente">${item.clienteNome}</td>      
					        <td data-label="Situação">
					            <a href="#" class="btn a-fazer">A Fazer</a>
					        </td>              
					    </tr>
					`);
				}
            });

            // Adiciona o evento de clique aos botões após o carregamento
            $('.btn').on('click', function() {
                const $btn = $(this);

                if ($btn.hasClass('a-fazer')) {
                    $btn.removeClass('a-fazer').addClass('feito').text('Feito');
                } else if ($btn.hasClass('feito')) {
                    $btn.removeClass('feito').addClass('nao-realizado').text('Não foi realizado');
                } else if ($btn.hasClass('nao-realizado')) {
                    $btn.removeClass('nao-realizado').addClass('a-fazer').text('A Fazer');
                }
            });
        },
        error: function(xhr, status, error) {
            alert("Erro na requisição: " + error);
        }
    });
});