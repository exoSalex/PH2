function personalizarValidacion(){
 	var errMsg="", vCampos = document.querySelectorAll("input:not([type=submit])");
	 for(var i=0;i<vCampos.length;i++){
 		errMsg = "Valor de campo no válido"; // texto del mensaje por defecto
 		vCampos[i].addEventListener("invalid",function(e){ // manejador del evento
 		if(e.target.validity.valueMissing)
			errMsg = "El campo no puede quedar vacío";
 		else if(e.target.validity.typeMismatch)
 			errMsg = "El valor no es correcto";
 // else if()...
 	e.target.setCustomValidity(errMsg); // se asigna el nuevo mensaje de error
 		});
 	vCampos[i].onchange = function(e){e.target.setCustomValidity("");};
 	}
}
