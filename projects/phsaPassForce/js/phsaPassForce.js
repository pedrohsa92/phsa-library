// validateParam 
function validateParam(paramValue, paramDefault, paramType = "") {
  // not empty
  if (paramValue === "") paramValue = paramDefault;
  // not undefined
  if (paramValue == null) paramValue = paramDefault;
  // avaible is numeric param
  if (paramType == "numeric") {
    if (isNaN(paramValue)) paramValue = paramDefault;

    if (parseInt(paramValue) < 0) paramValue = paramDefault;

    paramValue = parseInt(paramValue);
  }

  return paramValue;
}

// outputPassForce
function outputPassForce(phsaPassForce) {
  if (typeof(phsaPassForce.outputInfo) === "object" && phsaPassForce.outputInfo != null) {
    phsaPassForce.outputInfo.removeClass();
    phsaPassForce.outputInfo.addClass(phsaPassForce.class);
    phsaPassForce.outputInfo.html(phsaPassForce.info);
  } else {
    if (phsaPassForce.outputInfo != 'none') {
      if ($("span#phsa-outputInfo").length) {
        $("span#phsa-outputInfo").removeClass();
        $("span#phsa-outputInfo").addClass(phsaPassForce.class);
        $("span#phsa-outputInfo").html(phsaPassForce.info);
      } else {
        phsaPassForce.input.after('<span id="phsa-outputInfo" class="' + phsaPassForce.class + '">' + phsaPassForce.info + '</span>');
      }
    }
  }

  var titleNecessary = "<strong class='" + phsaPassForce.class + "'>Necessário:</strong><br>";
  phsaPassForce.htmlOutputRule = titleNecessary + phsaPassForce.htmlOutputRule;

  if (typeof(phsaPassForce.outputRule) === "object" && phsaPassForce.outputRule != null) {
    phsaPassForce.outputRule.html(phsaPassForce.htmlOutputRule);
  } else {
    if (phsaPassForce.outputRule != 'none') {
      if ($("span#phsa-outputRule").length) {
        $("span#phsa-outputRule").html(phsaPassForce.htmlOutputRule);
      } else {
        phsaPassForce.input.after('<span id="phsa-outputRule">' + phsaPassForce.htmlOutputRule + '</span>');
      }
    }
  }

  if (phsaPassForce.status == true) {
    if (phsaPassForce.btnControl != '') {
      if (phsaPassForce.btnControlType == true) {
        phsaPassForce.btnControl.attr('type', 'submit');
      }

      if (phsaPassForce.btnControlDisabled == true) {
        phsaPassForce.btnControl.attr('disabled', false);
      }
    }
  } else {
    if (phsaPassForce.btnControl != '') {
      if (phsaPassForce.btnControlType == true) {
        phsaPassForce.btnControl.attr('type', 'button');
      }

      if (phsaPassForce.btnControlDisabled == true) {
        phsaPassForce.btnControl.attr('disabled', true);
      }
    }
  }

  if (phsaPassForce.consoleLog == true) {
    console.log(phsaPassForce.log);
  }

  if (phsaPassForce.debugLog == true) {
    console.log(phsaPassForce);
  }
}

// phsaPassForce
function phsaPassForce(input, params = "") {
  // params
  if (params == "") {
    var params = {
      outputInfo: null,
      btnControl: null,
      btnControlType: false,
      btnControlDisabled: false,
      classSuccess: null,
      classWarning: null,
      classDanger: null,
      consoleLog: null,
      debugLog: null,
      passTrim: null,
      minLenght: null,
      maxLenght: null,
      typePass: null,
      notSymbolKey: null,
      notUnknownKey: null,
      bannedChar: null,
      rule: null
    };
  }

  // Classes
  params.classSuccess = validateParam(params.classSuccess, 'small text-success');
  params.classWarning = validateParam(params.classWarning, 'small text-warning');
  params.classDanger = validateParam(params.classDanger, 'small text-danger');
  params.consoleLog = validateParam(params.consoleLog, false);
  params.debugLog = validateParam(params.debugLog, false);

  // btnControl
  params.btnControl = validateParam(params.btnControl, '');
  params.btnControlType = validateParam(params.btnControlType, false);
  params.btnControlDisabled = validateParam(params.btnControlDisabled, false);

  // outputInfo - outputRule
  params.outputInfo = validateParam(params.outputInfo, 'none');
  params.outputRule = validateParam(params.outputRule, 'none');

  var phsaPassForce = {
    status: false,
    info: null,
    class: params.classDanger,
    classSuccess: params.classSuccess,
    classDanger: params.classDanger,
    input: input,
    outputInfo: null,
    outputRule: null,
    htmlOutputRule: "",
    consoleLog: params.consoleLog,
    log: "Iniciando phsaPassForce...",
    debugLog: params.debugLog,
    debug: {
      password: password,
      params: params
    }
  };

  // validar input
  if (typeof(input) === "object") {
    var password = input.val();
  } else {
    if ($("input#" + input).length) {
      input = $("#" + input);
      phsaPassForce.input = input;
      var password = input.val();
    } else {
      phsaPassForce.info = 'O parametro `input` informado não possui o formato correto! Atualize e tente novamente!';
      phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
      return outputPassForce(phsaPassForce);
    }
  }

  // params is object
  if (params != "" && !typeof(params) === "object") {
    phsaPassForce.info = 'O parametro `params` informado não possui o formato correto! Atualize e tente novamente!';
    phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
    return outputPassForce(phsaPassForce);
  }

  // validar params.btnControl
  if (params.btnControl != "") {
    if (typeof(params.btnControl) === "object") {
      // phsaPassForce.btnControl = params.btnControl;
    } else {
      if ($("#" + params.btnControl).length) {
        params.btnControl = $("#" + params.btnControl);
        // phsaPassForce.btnControl = params.btnControl;
      } else {
        phsaPassForce.info = 'O parametro `btnControl` informado não possui o formato correto! Atualize e tente novamente!';
        phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
        return outputPassForce(phsaPassForce);
      }
    }
  }
  phsaPassForce.btnControl = params.btnControl;
  phsaPassForce.btnControlType = params.btnControlType;
  phsaPassForce.btnControlDisabled = params.btnControlDisabled;

  // validar params.outputInfo
  if (params.outputInfo != "") {
    if (typeof(params.outputInfo) === "object") {
      // phsaPassForce.outputInfo = params.outputInfo;
    } else {
      if (params.outputInfo != "none") {
        if ($("#" + params.outputInfo).length) {
          params.outputInfo = $("#" + params.outputInfo);
          // phsaPassForce.outputInfo = params.outputInfo;
        } else {
          phsaPassForce.info = 'O parametro `outputInfo` informado não possui o formato correto! Atualize e tente novamente!';
          phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
          return outputPassForce(phsaPassForce);
        }
      }
    }
  }
  phsaPassForce.outputInfo = params.outputInfo;

  // validar params.outputRule
  if (params.outputRule != "") {
    if (typeof(params.outputRule) === "object") {
      // phsaPassForce.outputRule = params.outputRule;
    } else {
      if (params.outputRule != "none") {
        if ($("#" + params.outputRule).length) {
          params.outputRule = $("#" + params.outputRule);
          // phsaPassForce.outputRule = params.outputRule;
        } else {
          phsaPassForce.info = 'O parametro `outputRule` informado não possui o formato correto! Atualize e tente novamente!';
          phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
          return outputPassForce(phsaPassForce);
        }
      }
    }
  }
  phsaPassForce.outputRule = params.outputRule;

  // Remove space white
  password = params.passTrim == true ? password.trim() : password;
  phsaPassForce.debug.password = password;

  // validateParam (value, default, type)
  params.minLenght = validateParam(params.minLenght, 0, 'numeric');
  params.minLenght = params.minLenght < 3 ? 4 : params.minLenght; // default min value

  params.maxLenght = validateParam(params.maxLenght, 20, 'numeric');

  // numeric alphanumeric alphabet
  params.typePass = validateParam(params.typePass, 'alphanumeric');
  params.notSymbolKey = params.notSymbolKey == true ? true : false;
  params.notUnknownKey = params.notUnknownKey == true ? true : false;

  // Exceções
  params.bannedChar = validateParam(params.bannedChar, '');

  // Rules
  if (params.rule == "" || params.rule == null) {
    params.rule = {
      minLowKey: 1,
      minUpperKey: 1,
      minNumberKey: 1,
      minSymbolKey: 1
    }
  } else {
    params.rule = {
      minLowKey: validateParam(params.rule.minLowKey, 1, 'numeric'),
      minUpperKey: validateParam(params.rule.minUpperKey, 1, 'numeric'),
      minNumberKey: validateParam(params.rule.minNumberKey, 1, 'numeric'),
      minSymbolKey: validateParam(params.rule.minSymbolKey, 1, 'numeric')
    }
  }

  // Validation lenght
  if (password.length < params.minLenght) {
    phsaPassForce.htmlOutputRule += "<span class='" + phsaPassForce.classDanger + "'>" +
      params.minLenght +
      " caracteres</span>";
  } else {
    phsaPassForce.htmlOutputRule += "<span class='" + phsaPassForce.classSuccess + "'>" +
      params.minLenght +
      " caracteres</span>";
  }

  phsaPassForce.totalLowKey = 0;
  phsaPassForce.totalUpperKey = 0;
  phsaPassForce.totalNumberKey = 0;
  phsaPassForce.totalSymbolKey = 0;
  phsaPassForce.totalUnknownKey = 0;

  for (i = 0; i < password.length; i++) {
    var char = password.charAt(i);

    if (params.bannedChar != '') {
      if (params.bannedChar.indexOf(char) != -1) {
        phsaPassForce.info = 'Caractere [' + char + '] inválido!';
        phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
        return outputPassForce(phsaPassForce);
      }
    }

    if (char.match(/[a-z]/)) {
      if (params.typePass == 'numeric') {
        phsaPassForce.info = 'Não é permitido o uso de letras!';
        phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
        return outputPassForce(phsaPassForce);
      }
      phsaPassForce.totalLowKey++;
      phsaPassForce.log = phsaPassForce.log + "\n" + 'Encontrei a letra minúscula [' + char + ']';
    } else if (char.match(/[A-Z]/)) {
      if (params.typePass == 'numeric') {
        phsaPassForce.info = 'Não é permitido o uso de letras!';
        phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
        return outputPassForce(phsaPassForce);
      }
      phsaPassForce.totalUpperKey++;
      phsaPassForce.log = phsaPassForce.log + "\n" + 'Encontrei a letra maiúscula [' + char + ']';
    } else if (Number.isInteger(+char)) {
      if (params.typePass == 'alphabet') {
        phsaPassForce.info = 'Não é permitido o uso de números!';
        phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
        return outputPassForce(phsaPassForce);
      }
      phsaPassForce.totalNumberKey++;
      phsaPassForce.log = phsaPassForce.log + "\n" + 'Encontrei o numero [' + char + ']';
    } else if (char.match(/[!@#$%^&*?,_~\-()]/)) {
      if (params.notSymbolKey == true) {
        phsaPassForce.info = 'Não é permitido o uso de caracteres especiais!';
        phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
        return outputPassForce(phsaPassForce);
      }
      phsaPassForce.totalSymbolKey++;
      phsaPassForce.log = phsaPassForce.log + "\n" + 'Encontrei o simbolo [' + char + ']';
    } else {
      if (params.notUnknownKey == true) {
        phsaPassForce.info = 'Não é permitido o uso de caracteres especiais!';
        phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
        return outputPassForce(phsaPassForce);
      }
      phsaPassForce.totalUnknownKey++;
      phsaPassForce.log = phsaPassForce.log + "\n" + 'Caractere não identificado [' + char + ']';
    }
  }

  // outputRule
  for (var property in params.rule) {
    if (property == 'minLowKey') {
      if (params.rule[property] > 0 && params.typePass != 'numeric') {
        if (phsaPassForce.totalLowKey < params.rule.minLowKey) {
          phsaPassForce.htmlOutputRule += "<br><span class='" + phsaPassForce.classDanger + "'>" +
            params.rule[property] +
            " letra(s) minúscula (abc...)</span>";
        } else {
          phsaPassForce.htmlOutputRule += "<br><span class='" + phsaPassForce.classSuccess + "'>" +
            params.rule[property] +
            " letra(s) minúscula (abc...)</span>";
        }
      }
    }
    if (property == 'minUpperKey') {
      if (params.rule[property] > 0 && params.typePass != 'numeric') {
        if (phsaPassForce.totalUpperKey < params.rule.minUpperKey) {
          phsaPassForce.htmlOutputRule += "<br><span class='" + phsaPassForce.classDanger + "'>" +
            params.rule[property] +
            " letra(s) maiúscula (ABC...)</span>";
        } else {
          phsaPassForce.htmlOutputRule += "<br><span class='" + phsaPassForce.classSuccess + "'>" +
            params.rule[property] +
            " letra(s) maiúscula (ABC...)</span>";
        }
      }
    }
    if (property == 'minNumberKey') {
      if (params.rule[property] > 0 && params.typePass != 'alphabet') {
        if (phsaPassForce.totalNumberKey < params.rule.minNumberKey) {
          phsaPassForce.htmlOutputRule += "<br><span class='" + phsaPassForce.classDanger + "'>" +
            params.rule[property] +
            " número(s) (123...)</span>";
        } else {
          phsaPassForce.htmlOutputRule += "<br><span class='" + phsaPassForce.classSuccess + "'>" +
            params.rule[property] +
            " número(s) (123...)</span>";
        }
      }
    }
    if (property == 'minSymbolKey') {
      if (params.rule[property] > 0 && params.notSymbolKey == false) {
        if (phsaPassForce.totalSymbolKey < params.rule.minSymbolKey) {
          phsaPassForce.htmlOutputRule += "<br><span class='" + phsaPassForce.classDanger + "'>" +
            params.rule[property] +
            " caractere(s) especial' (!@#...)</span>";
        } else {
          phsaPassForce.htmlOutputRule += "<br><span class='" + phsaPassForce.classSuccess + "'>" +
            params.rule[property] +
            " caractere(s) especial' (!@#...)</span>";
        }
      }
    }
  }

  if (password.length > params.maxLenght) {
    phsaPassForce.htmlOutputRule += "<br><span class='" + phsaPassForce.classDanger + "'>" +
      params.maxLenght +
      " caractere(s) no máximo!</span>";
  } else {
    if (password.length > params.minLenght) {
      phsaPassForce.htmlOutputRule += "<br><span class='" + phsaPassForce.classSuccess + "'>" +
        params.maxLenght +
        " caractere(s) no máximo!</span>";
    }
  }

  // Validation lenght
  if (params.minLenght >= params.maxLenght - 4) {
    phsaPassForce.info = 'O parametro tamanho minimo [' + params.minLenght + '] deve ser maior que o máximo [' + params.maxLenght + '] - 4 =[' + (parseInt(params.maxLenght) - 4) + ']!';
    phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
    return outputPassForce(phsaPassForce);
  }

  if (password.length < params.minLenght) {
    phsaPassForce.info = 'Tamanho mínimo exigido é de ' + params.minLenght + ' caracteres!';
    phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
    return outputPassForce(phsaPassForce);
  }

  if (password.length > params.maxLenght) {
    phsaPassForce.info = 'Tamanho máximo exigido é de ' + params.maxLenght + ' caracteres!';
    phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
    return outputPassForce(phsaPassForce);
  }

  // Validation rules
  if (params.typePass != 'numeric') {
    if (phsaPassForce.totalLowKey < params.rule.minLowKey) {
      phsaPassForce.info = 'É necessário ' + params.rule.minLowKey + ' caractere(s) minúsculo!';
      phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
      return outputPassForce(phsaPassForce);
    }

    if (phsaPassForce.totalUpperKey < params.rule.minUpperKey) {
      phsaPassForce.info = 'É necessário ' + params.rule.minUpperKey + ' caractere(s) maiúsculo!';
      phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
      return outputPassForce(phsaPassForce);
    }
  }

  if (params.typePass != 'alphabet') {
    if (phsaPassForce.totalNumberKey < params.rule.minNumberKey) {
      phsaPassForce.info = 'É necessário ' + params.rule.minNumberKey + ' caractere(s) numéricos!';
      phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
      return outputPassForce(phsaPassForce);
    }
  }

  if (params.notSymbolKey == false) {
    if (phsaPassForce.totalSymbolKey < params.rule.minSymbolKey) {
      phsaPassForce.info = 'É necessário ' + params.rule.minSymbolKey + ' caractere(s) especiais!';
      phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
      return outputPassForce(phsaPassForce);
    }
  }

  phsaPassForce.info = 'Senha validada com sucesso!';
  phsaPassForce.status = true;
  phsaPassForce.class = params.classSuccess;
  phsaPassForce.log = phsaPassForce.log + "\n" + phsaPassForce.info;
  return outputPassForce(phsaPassForce);
}