// validateParam
function validateParam(paramValue, paramDefault, paramType=""){
	// not empty
	if (paramValue==="") paramValue=paramDefault;
	// not undefined
	if (paramValue==null) paramValue=paramDefault;
	// avaible is numeric param
	if (paramType=="numeric") {
	  if (isNaN(paramValue)) paramValue=paramDefault;

	  if (parseInt(paramValue)<0) paramValue=paramDefault;

	  paramValue = parseInt(paramValue);
	}

	return paramValue;
}

// outputPassForce
function outputPassForce(phsaPassForce){
	if (typeof(phsaPassForce.outputInfo)==="object") {
		phsaPassForce.outputInfo.removeClass();
		phsaPassForce.outputInfo.addClass(phsaPassForce.class);
		phsaPassForce.outputInfo.html(phsaPassForce.info);
	}else{
		if (phsaPassForce.outputInfo!='none') {
			if ($("span#phsa-output").length) {
				$("span#phsa-output").removeClass();
				$("span#phsa-output").addClass(phsaPassForce.class);
				$("span#phsa-output").html(phsaPassForce.info);
			}else{
				phsaPassForce.input.after('<span id="phsa-output" class="'+phsaPassForce.class+'">'+phsaPassForce.info+'</span>');
			}
		}
	}

	if (phsaPassForce.consoleLog==true) {
		console.log(phsaPassForce.log);
	}

	if (phsaPassForce.status==true) {
		if (phsaPassForce.btnControl!='') {
			if (phsaPassForce.btnControlType==true) {
				phsaPassForce.btnControl.attr('type', 'submit');
			}

			if (phsaPassForce.btnControlDisabled==true) {
				phsaPassForce.btnControl.attr('disabled', false);
			}
		}
	}else{
		if (phsaPassForce.btnControl!='') {
			if (phsaPassForce.btnControlType==true) {
				phsaPassForce.btnControl.attr('type', 'button');
			}

			if (phsaPassForce.btnControlDisabled==true) {
				phsaPassForce.btnControl.attr('disabled', true);
			}
		}
	}
}

// phsaPassForce
function phsaPassForce( input, params="") {
	// params
	if (params=="") {
		var params = {
			outputInfo: 		null,
			btnControl: 		null,
			btnControlType: 	false,
			btnControlDisabled: false,
			classSuccess: 		null,
			classWarning: 		null,
			classDanger: 		null,
			consoleLog: 		null,
			passTrim: 			null,
			minLenght: 			null,
			maxLenght: 			null,
			typePass: 			null,
			notSymbolKey: 		null,
			notUnknownKey: 		null,
			bannedChar:     	null,
			rule: 				null
		};
	}

	// Classes
	params.classSuccess = validateParam(params.classSuccess, 'small text-success');
	params.classWarning = validateParam(params.classWarning, 'small text-warning');
	params.classDanger 	= validateParam(params.classDanger, 'small text-danger');
	params.consoleLog 	= validateParam(params.consoleLog, false);

	// btnControl
	params.btnControl 			= validateParam(params.btnControl, '');
	params.btnControlType 		= validateParam(params.btnControlType, false);
	params.btnControlDisabled 	= validateParam(params.btnControlDisabled, false);

	// outputInfo
	params.outputInfo 			= validateParam(params.outputInfo, 'none');

	var phsaPassForce = {
		status: 	false,
		info: 		null,
		class: 		params.classDanger,
		input: 		input,
		outputInfo: null,
		consoleLog: params.consoleLog,
		log: 		"Iniciando phsaPassForce...",
		debug: 	{
			password: 	password,
			params: 	params
		}
	};

	// validar input
	if (typeof(input)==="object") {
		var password = input.val();
	}else{
		if ($("input#"+input).length) {
			input = $("#"+input);
			phsaPassForce.input = input;
			var password = input.val();
		}else{
			phsaPassForce.info = 'O parametro `input` informado não possui o formato correto! Atualize e tente novamente!';
			phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
			return outputPassForce(phsaPassForce);
		}
	}

	// params is object
	if (params!="" && !typeof(params)==="object") {
		phsaPassForce.info = 'O parametro `params` informado não possui o formato correto! Atualize e tente novamente!';
		phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
		return outputPassForce(phsaPassForce);
	}

	// validar params.btnControl
	if (params.btnControl!="") {
		if (typeof(params.btnControl)==="object") {
			// phsaPassForce.btnControl = params.btnControl;
		}else{
			if ($("#"+params.btnControl).length) {
				params.btnControl = $("#"+params.btnControl);
				// phsaPassForce.btnControl = params.btnControl;
			}else{
				phsaPassForce.info = 'O parametro `btnControl` informado não possui o formato correto! Atualize e tente novamente!';
				phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
				return outputPassForce(phsaPassForce);
			}
		}
	}
	phsaPassForce.btnControl 			= params.btnControl;
	phsaPassForce.btnControlType 		= params.btnControlType;
	phsaPassForce.btnControlDisabled 	= params.btnControlDisabled;

	// validar params.outputInfo
	if (params.outputInfo!="") {
		if (typeof(params.outputInfo)==="object") {
			// phsaPassForce.outputInfo = params.outputInfo;
		}else{
			if (params.outputInfo!="none") {
			  if ($("#"+params.outputInfo).length) {
					params.outputInfo = $("#"+params.outputInfo);
					// phsaPassForce.outputInfo = params.outputInfo;
				}else{
					phsaPassForce.info = 'O parametro `outputInfo` informado não possui o formato correto! Atualize e tente novamente!';
					phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
					return outputPassForce(phsaPassForce);
				}
			}
		}
	}
	phsaPassForce.outputInfo 			= params.outputInfo;

	// Remove space white
	password = params.passTrim==true?password.trim():password;

	// validateParam (value, default, type)
	params.minLenght = validateParam(params.minLenght, 0, 'numeric');
	params.minLenght = params.minLenght<3?4:params.minLenght; // default min value

	params.maxLenght = validateParam(params.maxLenght, 20, 'numeric');

	// numeric alphanumeric alphabet
	params.typePass = validateParam(params.typePass, 'alphanumeric');
	params.notSymbolKey = params.notSymbolKey==true?true:false;
	params.notUnknownKey = params.notUnknownKey==true?true:false;

	// Exceções
	params.bannedChar 	= validateParam(params.bannedChar, '');

	// Rules
	if (params.rule==""||params.rule==null) {
		params.rule = {
			minLowKey 		: 1,
			minUpperKey 	: 1,
			minNumberKey 	: 1,
			minSymbolKey 	: 1
		}
	} else {
		params.rule = {
			minLowKey 		: validateParam(params.rule.minLowKey, 1, 'numeric'),
			minUpperKey 	: validateParam(params.rule.minUpperKey, 1, 'numeric'),
			minNumberKey 	: validateParam(params.rule.minNumberKey, 1, 'numeric'),
			minSymbolKey 	: validateParam(params.rule.minSymbolKey, 1, 'numeric')
		}
	}

	// Validation lenght
	if (params.minLenght>=params.maxLenght-4) {
		phsaPassForce.info = 'O parametro tamanho minimo ['+params.minLenght+'] deve ser maior que o máximo ['+params.maxLenght+'] - 4 =['+(parseInt(params.maxLenght)-4)+']!';
		phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
		return outputPassForce(phsaPassForce);
	}

	if (password.length<params.minLenght) {
		phsaPassForce.info = 'Tamanho mínimo exigido é de '+params.minLenght+' caracteres!';
		phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
		return outputPassForce(phsaPassForce);
	}

	if (password.length>params.maxLenght) {
		phsaPassForce.info = 'Tamanho máximo exigido é de '+params.maxLenght+' caracteres!';
		phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
		return outputPassForce(phsaPassForce);
	}

	phsaPassForce.totalLowKey 			= 0;
	phsaPassForce.totalUpperKey 		= 0;
	phsaPassForce.totalNumberKey		= 0;
	phsaPassForce.totalSymbolKey		= 0;
	phsaPassForce.totalUnknownKey		= 0;

	for (i=0; i<password.length; i++) {
		var char = password.charAt(i);

		if (params.bannedChar!='') {
			if (params.bannedChar.indexOf(char) != -1) {
				phsaPassForce.info = 'Caractere ['+char+'] inválido!';
				phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
				return outputPassForce(phsaPassForce);
			}
		}

		if(char.match(/[a-z]/)){
			if (params.typePass=='numeric') {
				phsaPassForce.info = 'Não é permitido o uso de letras!';
				phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
				return outputPassForce(phsaPassForce);
			}
			phsaPassForce.totalLowKey++;
			phsaPassForce.log = phsaPassForce.log + "\n" + 'Encontrei a letra minuscula ['+char+']';
		}else if(char.match(/[A-Z]/)){
			if (params.typePass=='numeric') {
				phsaPassForce.info = 'Não é permitido o uso de letras!';
				phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
				return outputPassForce(phsaPassForce);
			}
			phsaPassForce.totalUpperKey++;
			phsaPassForce.log = phsaPassForce.log + "\n" + 'Encontrei a letra maiuscula ['+char+']';
		}else if(Number.isInteger(+char)){
			if (params.typePass=='alphabet') {
				phsaPassForce.info = 'Não é permitido o uso de números!';
				phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
				return outputPassForce(phsaPassForce);
			}
			phsaPassForce.totalNumberKey++;
			phsaPassForce.log = phsaPassForce.log + "\n" + 'Encontrei o numero ['+char+']';
		}else if(password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)){
			if (params.notSymbolKey==true) {
				phsaPassForce.info = 'Não é permitido o uso de caracteres especiais!';
				phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
				return outputPassForce(phsaPassForce);
			}
			phsaPassForce.totalSymbolKey++;
			phsaPassForce.log = phsaPassForce.log + "\n" + 'Encontrei o simbolo ['+char+']';
		}else{
			if (params.notUnknownKey==true) {
				phsaPassForce.info = 'Não é permitido o uso de caracteres especiais!';
				phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
				return outputPassForce(phsaPassForce);
			}
			phsaPassForce.totalUnknownKey++;
			phsaPassForce.log = phsaPassForce.log + "\n" + 'Caractere não identificado ['+char+']';
		}
	}

	// Validation rules
	if (phsaPassForce.totalLowKey<params.rule.minLowKey){
		phsaPassForce.info = 'É necessário '+params.rule.minLowKey+' caractere(s) minusculo!';
		phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
		return outputPassForce(phsaPassForce);
	}

	if (phsaPassForce.totalUpperKey<params.rule.minUpperKey){
		phsaPassForce.info = 'É necessário '+params.rule.minUpperKey+' caractere(s) maiusculo!';
		phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
		return outputPassForce(phsaPassForce);
	}

	if (phsaPassForce.totalNumberKey<params.rule.minNumberKey){
		phsaPassForce.info = 'É necessário '+params.rule.minNumberKey+' caractere(s) numéricos!';
		phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
		return outputPassForce(phsaPassForce);
	}

	if (phsaPassForce.totalSymbolKey<params.rule.minSymbolKey){
		phsaPassForce.info = 'É necessário '+params.rule.minSymbolKey+' caractere(s) especiais!';
		phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
		return outputPassForce(phsaPassForce);
	}

	phsaPassForce.info 		= 'Senha válidada com sucesso!';
	phsaPassForce.status 	= true;
	phsaPassForce.class 	= params.classSuccess;
	phsaPassForce.log 		= phsaPassForce.log + "\n" + phsaPassForce.info;
	return outputPassForce(phsaPassForce);
}