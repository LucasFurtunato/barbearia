$(document).ready(function () {
	$.ajax({
	    url: "app/controllers/CtrlEmpresa.php", // Ajuste conforme seu ambiente
	    method: "GET",
	    success: function (response) {
			var data = JSON.parse(response);
			
			data.forEach(contato => {
				$(`#email-text`).text(contato.email);
				$(`#telefone-text-unidade-${contato.Idempresa}`).text(`Unidade ${contato.Idempresa}: ` + contato.telefone);
				$(`#endereco-text-unidade-${contato.Idempresa}`).text(`Unidade ${contato.Idempresa}: ` + contato.endereco);
			});
	    },
	    error: function (error) {
	        alert("Erro ao atualizar os contatos.");
	        console.error(error);
	    },
	});
	
	$.ajax({
	    url: "app/controllers/CtrlTxtServicos.php", // Ajuste conforme seu ambiente
	    method: "GET",
	    success: function (response) {
			console.log(response);
			var data = JSON.parse(response);
			/*
			data.forEach(contato => {
				$(`#email-text`).text(contato.email);
				$(`#telefone-text-unidade-${contato.Idempresa}`).text(`Unidade ${contato.Idempresa}: ` + contato.telefone);
				$(`#endereco-text-unidade-${contato.Idempresa}`).text(`Unidade ${contato.Idempresa}: ` + contato.endereco);
			}); */
	    },
	    error: function (error) {
	        alert("Erro ao atualizar os contatos.");
	        console.error(error);
	    },
	});

	
	$("#saveContactBtn-1").hide();
	$("#saveContactBtn-2").hide();
	
	let suEmail = $("#email-text").text();
	let suTelefone1 = $("#telefone-text-unidade-1").text();
	let suEndereco1 = $("#endereco-text-unidade-1").text();
	let suTelefone2 = $("#telefone-text-unidade-2").text();
	let suEndereco2 = $("#endereco-text-unidade-2").text();
	
    $("#editContactBtn-1").click(function () {
		$("#editContactBtn-2").show();
		$("#saveContactBtn-2").hide();
		
		$("#email-text").text(suEmail);
		$("#telefone-text-unidade-2").text(suTelefone2);
		$("#endereco-text-unidade-2").text(suEndereco2);

        // Capturar os valores atuais dos campos
        let email = $("#email-text").text()
        let telefone1 = $("#telefone-text-unidade-1").text().replace(`Unidade 1: `, '');
        let endereco1 = $("#endereco-text-unidade-1").text().replace(`Unidade 1: `, '');

        // Criar campos editáveis
        $("#email-text").html(`<input type='text' id='edit-email' value='${email}' />`);
        $("#telefone-text-unidade-1").html(`<input type='text' id='edit-telefone1' value='${telefone1}' />`);
        $("#endereco-text-unidade-1").html(`<input type='text' id='edit-endereco1' value='${endereco1}' />`);

        // Alterar botão para salvar
        $("#saveContactBtn-1").show();
		$(this).hide();
    });
	// Evento para salvar as alterações
	$("#saveContactBtn-1").click(function () {
	    // Obter os valores editados
	    suEmail = $("#edit-email").val();
	    suTelefone1 = $("#edit-telefone1").val();
	    suEndereco1 = $("#edit-endereco1").val();

	    // Enviar para o servidor via AJAX
	    $.ajax({
	        url: "app/controllers/CtrlEmpresa.php", // Ajuste conforme seu ambiente
	        method: "PUT",
	        data: {
	            Idempresa: 1, // ID fixo ou dinâmico, dependendo da lógica do seu sistema
	            unidade: "Unidade 1",
	            email: suEmail,
	            telefone: suTelefone1, // Use outros campos para cada unidade, se necessário
	            endereco: suEndereco1,
	        },
	        success: function (response) {
				console.log(response);
	            alert("Contatos atualizados com sucesso!");
	            // Atualizar os textos na página
	            $("#email-text").text(suEmail);
				suTelefone1 = "Unidade 1: " + suTelefone1;
				suEndereco1 = "Unidade 1: " + suEndereco1;
	            $("#telefone-text-unidade-1").text(suTelefone1);
	            $("#endereco-text-unidade-1").text(suEndereco1);

	            // Alterar botão de volta
	            $("#editContactBtn-1").show();
				$("#saveContactBtn-1").hide();
	        },
	        error: function (error) {
	            alert("Erro ao atualizar os contatos.");
	            console.error(error);
	        },
	    });
	});
	
	$("#editContactBtn-2").click(function () {
		$("#editContactBtn-1").show();
		$("#saveContactBtn-1").hide();
		
		$("#email-text").text(suEmail);
		$("#telefone-text-unidade-1").text(suTelefone1);
		$("#endereco-text-unidade-1").text(suEndereco1);
		
	    // Capturar os valores atuais dos campos
	    let email = $("#email-text").text();
	    let telefone2 = $("#telefone-text-unidade-2").text().replace(`Unidade 2: `, '');
	    let endereco2 = $("#endereco-text-unidade-2").text().replace(`Unidade 2: `, '');

	    // Criar campos editáveis
	    $("#email-text").html(`<input type='text' id='edit-email' value='${email}' />`);
	    $("#telefone-text-unidade-2").html(`<input type='text' id='edit-telefone2' value='${telefone2}' />`);
	    $("#endereco-text-unidade-2").html(`<input type='text' id='edit-endereco2' value='${endereco2}' />`);

	    // Alterar botão para salvar
	    $("#saveContactBtn-2").show();
		$(this).hide();
	});
	// Evento para salvar as alterações
	$("#saveContactBtn-2").click(function () {
	    // Obter os valores editados
	    suEmail = $("#edit-email").val();
	    suTelefone2 = $("#edit-telefone2").val();
	    suEndereco2 = $("#edit-endereco2").val();

	    // Enviar para o servidor via AJAX
	    $.ajax({
	        url: "app/controllers/CtrlEmpresa.php", // Ajuste conforme seu ambiente
	        method: "PUT",
	        data: {
	            Idempresa: 2, // ID fixo ou dinâmico, dependendo da lógica do seu sistema
	            unidade: "Unidade 2",
	            email: suEmail,
	            telefone: suTelefone2, // Use outros campos para cada unidade, se necessário
	            endereco: suEndereco2,
	        },
	        success: function (response) {
	            alert("Contatos atualizados com sucesso!");
	            // Atualizar os textos na página
	            $("#email-text").text(suEmail);
				suTelefone2 = "Unidade 2: " + suTelefone2;
				suEndereco2 = "Unidade 2: " + suEndereco2;
	            $("#telefone-text-unidade-2").text(suTelefone2);
	            $("#endereco-text-unidade-2").text(suEndereco2);

	            // Alterar botão de volta
	            $("#editContactBtn-2").show();
				$("#saveContactBtn-2").hide();
	        },
	        error: function (error) {
	            alert("Erro ao atualizar os contatos.");
	            console.error(error);
	        },
	    });
	});
	
	$("#edit-txt-servicos").click(function() {
	    // Capturar os valores atuais dos campos
	    let cabeloTXT1 = $("#cabelo-txt-1").text();
	    let cabeloTXT2 = $("#cabelo-txt-2").text();
	    let barbaTXT1 = $("#barba-txt-1").text();
	    let barbaTXT2 = $("#barba-txt-2").text();
	    let cuidadosTXT1 = $("#cuidados-txt-1").text();
	    let cuidadosTXT2 = $("#cuidados-txt-2").text();

	    // Criar campos editáveis
	    $("#cabelo-txt-1").html(`<textarea id='edit-cabelo-txt-1' class='large-textarea'>${cabeloTXT1}</textarea>`);
	    $("#cabelo-txt-2").html(`<textarea id='edit-cabelo-txt-2' class='large-textarea'>${cabeloTXT2}</textarea>`);
	    $("#barba-txt-1").html(`<textarea id='edit-barba-txt-1' class='large-textarea'>${barbaTXT1}</textarea>`);
	    $("#barba-txt-2").html(`<textarea id='edit-barba-txt-2' class='large-textarea'>${barbaTXT2}</textarea>`);
	    $("#cuidados-txt-1").html(`<textarea id='edit-cuidados-txt-1' class='large-textarea'>${cuidadosTXT1}</textarea>`);
	    $("#cuidados-txt-2").html(`<textarea id='edit-cuidados-txt-2' class='large-textarea'>${cuidadosTXT2}</textarea>`);
	});

});
