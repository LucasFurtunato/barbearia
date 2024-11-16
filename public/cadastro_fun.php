<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    <title>Cadastrar Funcionário</title>
    <link rel="stylesheet" href="assets/css/cadastro_fun.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>

<body>
    
    <header>
        <nav>
            <img src="assets/img/logo.png" alt="Don' Vini logo" class="logo">
            <div class="mobile-menu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <ul class="nav-list">
                <li><a href="#">Início</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#gallery">Galeria</a></li>
                <li><a href="#contact">Contato</a></li>
                <li><a href="#" class="login-button">Entrar</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="cadastrar_fun">
            <div class="container" id="first-container"> 
                <div class="content first-content"> 
                    <div class="second-column">
                        <h2 class="title title-second">Adicionar Funcionário</h2>
                        <p class="description description-second">insira as informações para cadastrar um funcionário</p>
                        <form class="form">

                            <label class="label-input" for="">
                                <div class="space_icon">
                                    <i class="fas fa-lock icon-modify"></i> <!-- imagem senha -->
                                </div>
                                <input type="password" placeholder="Senha atual" maxlength="50" id="password-1">
                                <div class="btn-fig">
                                    <i class="bi bi-eye" id="btn-password-1" onclick="mostrarSenha1()"></i>
                                </div>
                            </label>

                            <label class="label-input" for="">
                                <div class="space_icon">
                                    <i class="far fa-user icon-modify"></i> <!-- imagem usuario -->
                                </div>
                                <input type="text" placeholder="Código" maxlength="50" id="codigo">
                            </label>
                            
                            <label class="label-input" for="">
                                <div class="space_icon">
                                    <i class="far fa-user icon-modify"></i> <!-- imagem usuario -->
                                </div>
                                <input type="text" placeholder="Nome" maxlength="50">
                            </label>

                            <label class="label-input" for="">
                                <div class="space_icon">
                                    <i class="far fa-envelope icon-modify"></i> <!-- imagem email -->  
                                </div>
                                <input type="email" placeholder="Email" maxlength="50" id="email">
                            </label>
                            
                            <label class="label-input" for="">
                                <div class="space_icon">
                                    <i class="bi bi-geo-alt-fill"></i> <!--imagem localização-->
                                </div>
                                <select id="unidade" name="unidade">
                                    <option value="">Escolha a unidade</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </label>                            

                            <label class="label-input" for="">
                                <div class="space_icon">
                                    <i class="fas fa-lock icon-modify"></i> <!-- imagem senha -->   
                                </div>
                                <input type="password" placeholder="Senha" maxlength="50" id="password-2">
                                <div class="btn-fig">
                                    <i class="bi bi-eye" id="btn-password-2" onclick="mostrarSenha2()"></i>
                                </div>
                            </label>
        
                            <label class="label-input" for="">
                                <div class="space_icon">
                                    <i class="fas fa-lock icon-modify"></i> <!-- imagem senha -->   
                                </div>
                                <input type="password" placeholder="Confirmar senha" maxlength="50" id="password-3">
                                <div class="btn-fig">
                                    <i class="bi bi-eye" id="btn-password-3" onclick="mostrarSenha3()"></i>
                                </div> 
                            </label>      
                            <button class="btn btn-second" id="edit-profile-button">Adicionar</button>        
                        </form>
                    </div><!-- second column -->
                </div><!-- first content -->
            </div>
        </section>
        <div class="container" id="second-container" style="display: none">
            <div class="content first-content">
                <div class="second-column">
                    <h2 class="title title-second">Confirmar Cadastro</h2>
                    <p class="description description-second">Tem certeza de que deseja adicionar esse funcionário?</p>
                    <form class="form-confirmation">
                        <!-- Botões de confirmação e cancelamento -->
                        <div class="btn-group">
                            <button type="submit" class="btn btn-second">Adicionar</button>
                            <button type="button" class="btn btn-second cancel-btn">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
    </main>
    
    <footer>
        <div class="footer-content">
            <p>&copy; 2024 Barbearias Don' Vini. Todos os direitos reservados.</p>
            <p>Por: RootingTI</p>
        </div>
    </footer>

    <script src="assets/js/mobile-navbar.js"></script>
    <script src="assets/js/cadastro_fun.js"></script>

</body> 


</html>