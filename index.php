<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHSA - LIBRARY</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
	<div class="container mt-5 mb-5 pb-5">
		<h1 class="mb-3 text-center">PHSA LIBRARY</h1>

		<p class="text-primary h3 mb-3 text-center">
			Bem vindo ao phsa-library
			<br>Livres para fazer o melhor do css e js!
		</p>

		<section class="p-2 mb-3">
			<h3 class="mt-3">PHSA IMAGE <i>TOOL</i></h3>
			<p class="mb-3 text-justify" align="justify">
				Consiste em um css que regulariza o tamanho de suas imagens conforme o seguinte padrão. Cria um limitador em width e height através da <i>class imgtool-*</i> (* = 50, 100, 150...500). Este limitador possui as mesmas medidas, ou seja é um quadrado. Em seguida a <i>class imgtool_mold</i> é o molde que o atributo <b>img</b> possui como campo de utilização. A mesma possui width e height em 100%. Em seguida as imagens vão sendo escalonadas por um calculo de incremento e decremento de 10% a cada 50 pixel. Começando em 50px até 500px. Recomendo o uso do bootstrap para melhores resultados. Caso faça uso, deixe seu comentário e/ou avaliação à respeito.
			</p>
			<a href="projects/phsaImageTool/index.php" class="btn btn-success float-right">PHSA IMAGE <i>TOOL</i></a>
		</section>

		<div class="clearfix m-3 d-block"></div><hr>

		<section class="p-2 mb-3">
			<h3 class="mt-3">PHSA PASS <b>FORCE</b></h3>
			<p class="mb-3 text-justify" align="justify">
				Consiste em um js que valida a senha inserida em um input. Este javascript reque uso do <b>jquery</b>, recomendo uso do <i>bootstrap ^4.0+</i>. Adicione ao evento jqury a chamada da função <i>phsaPassForce(input)</i>, passando o input ou id do input no parametro 1 que é obrigatório. A função tem potencial de validar o uso de caracteres alphanumeric, numeric, symbols e alphabet no value do input. A função possui atributo que personalizam a segurança da senha informada, tendo opções de degub, log e output para o usuário. Teste agora mesmo!
			</p>
			<a href="projects/phsaPassForce/index.php" class="btn btn-success float-right">PHSA PASS <b>FORCE</b></a>
		</section>

		<div class="clearfix mb-3 pb-3 d-block"></div>
		<!-- <hr> -->
	</div>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>