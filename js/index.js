function mostrarEntradas(frm){

	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/rest/entrada/',
		section = frm.parentNode.parentNode; 
		
		url += '?pag=' + frm.pag.value + '&lpag=' + frm.lpag.value;

		//frm.pag.value para acceder a los campos del formulario

		xhr.open('GET', url, true); //Porque no vamos a pedir informacion de la bbdd, sino de las entradas
		xhr.onload= function(){
			//console.log(xhr.responseText);
			let v = JSON.parse(xhr.responseText); //Lo convierte a objeto formato json
			//console.log(v);

			if(v.RESULTADO == 'ok'){
				let html= '';				
				for(let i=0; i< v.FILAS.length;i++){
					let e= v.FILAS[i];
					foto= 'http://localhost/PH2/fotos/' + e.fichero;
					html += '<article class="in_ficha">';

					html += '<div class="in_contain">';
					html += '<img class="in_imgs" src="' + foto +'" alt="'+ e.descripcion_foto+'">';
					html += '</div>';
					html += '<div class="in_overlay">';
					html += '<p class="in_texto">'+ e.descripcion+'</p>';
					html +='<a href="entrada.html" class="in_info2">More Info</a>';
					html += '</div>';
					html += '<div class="in_capt">';
					html += '<hr class="in_line">';
					html += '<h2 class="in_tituloficha">'+e.fecha+'</h2>';
					//	MEQUEDAOPORAQUI
					html += '<h3>'+e.nombre+'</h3>';
					html += '<div>';
					html += '<img src="' + foto +'" alt="'+ e.descripcion_foto+'">';
					
					html += '</div>';
					html += '<footer>';
					html += '<p>'+e.autor+'</p>';
					html += '<time datetime="'+ e.fecha+'">'+e.fecha+'</time>';
					html += '<p>'+e.nfotos+'</p>';
					html += '<p>'+e.ncomentarios+'</p>';
					html += '</footer>';

					html += '</article>';
					}// del for
					section.querySelector('h2+div').innerHTML = html;
			}
		}
		
		xhr.send();

		return false;  //Para que no se recargue la pag y asi poder ver el error
}









/*foto= 'http://localhost/PH2/fotos/' + e.fichero;
					html += '<article class="in_ficha">';

					html += '<div class="in_contain">';
					html += '<img class="in_imgs" src="' + foto +'" alt="'+ e.descripcion_foto+'">';
					html += '</div>';
					html += '<div class="in_overlay">';
					html += '<p class="in_texto">'+ e.descripcion+'</p>';
					html +='<a href="entrada.html" class="in_info2">More Info</a>'
					html += '</div>';
					html += '<div class="in_capt">';
					html += '<hr class="in_line">'
					html += '<h3>'+e.nombre+'</h3>';
					html += '<div>';
					html += '<img src="' + foto +'" alt="'+ e.descripcion_foto+'">';
					
					html += '</div>';
					html += '<footer>';
					html += '<p>'+e.autor+'</p>';
					html += '<time datetime="'+ e.fecha+'">'+e.fecha+'</time>';
					html += '<p>'+e.nfotos+'</p>';
					html += '<p>'+e.ncomentarios+'</p>';
					html += '</footer>';

					html += '</article>';*/