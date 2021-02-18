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
	<div class="container pt-5 mt-5">
		<h1 class="text-center">PHSA PASS <strong>FORCE</strong></h1>

		<p class="text-primary mb-5 h5 text-center">
			Uma biblioteca completa para deixar sua senha <strong>segura e confiável!</strong>
		</p>

		<form id="form_phsa" disabled autocomplete="off">
			<div class="form-group">
				<label for="input-password">Validador de senha</label>
				<input id="input-password" name="input-password" type="text" required class="form-control" placeholder="Digite sua senha">
			</div>
			<button id="btn-submit" type="submit" class="btn btn-success float-right">Submit?</button>
		</form>

		<p class="text-secondary h3 text-justify">
			<span id="span-info"></span>
		</p>
	</div>

	<!-- Jquery and Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

	<!-- phsaPassForce -->
	<script src="js/phsaPassForce.js"></script>

	<script type="text/javascript">
		$(document).ready(function(){
			$('#input-password').bind("keyup blur focus", function(){
				phsaPassForce(
					'input-password',
					{
						outputInfo: 		'span-info',
						btnControl: 		'btn-submit',
						btnControlDisabled: true,
						btnControlType: 	true,
						consoleLog: 		true,
						passTrim: 			true,
						minLenght: 			6,
						maxLenght: 			20
					}
				);
			});
		}); // fim do ready
	</script>
</body>
</html>