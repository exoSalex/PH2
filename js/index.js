function mostrarEntradas(pagina){

	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/rest/entrada/';
		// section = frm.parentNode.parentNode; 
		// pvalor= document.getElementById("in_active").innerHTML;
		// alert(pvalor+" oh si nena");
		// pval=parseInt(pvalor);
		// alert(pval);
		// url += '?u=' + 6 ;
url += '?pag=' + pagina + '&lpag=' + 6;
		//frm.pag.value para acceder a los campos del formulario

		xhr.open('GET', url, true); //Porque no vamos a pedir informacion de la bbdd, sino de las entradas
		xhr.onload= function(){
			//console.log(xhr.responseText);
			let v = JSON.parse(xhr.responseText); //Lo convierte a objeto formato json
			//console.log(v);

			if(v.RESULTADO == 'ok' && v.FILAS.length!=0){
				alert("entra al if");
				let html= '';				
				for(let i=0; i< v.FILAS.length;i++){
					let e= v.FILAS[i];
					foto= 'http://localhost/PH2/fotos/' + e.fichero;
					html += '<article class="in_ficha">';

					html += '<div class="in_contain">';
					html += '<img class="in_imgs" id="in_f'+i+'" src="' + foto +'" alt="'+ e.descripcion_foto+'">';
					html += '</div>';
					html += '<div class="in_overlay">';
					html += '<p class="in_texto" id="in_t'+i+'">'+ e.descripcion+'</p>';
					html +='<a href="entrada.html" class="in_info2">More Info</a>';
					html += '</div>';
					html += '<div class="in_capt">';
					html += '<hr class="in_line">';
					html += '<div class="in_tituloficha2">';
					html += '<h2 class="in_tituloficha">'+e.fecha+'</h2>';
					html += '</div>';
					//	MEQUEDAOPORAQUI
					html += '<hr class="in_line">';
					html += '<a href="#" class="in_profinfo">'+e.autor+'</a>'
					html += '<a href="entrada.html" ><p class="in_desc">'+e.nombre+'</p></a>'
					html += '<div class="in_extra_info">';
					html += '<a href="#" class="in_info3"><div class="in_numcom">'+e.ncomentarios+'<span>comments</span></div></a>';
					html += '<a href="#" class="in_info3"><div class="in_numfot">'+e.nfotos+'<span>pictures</span></div></a>';
					html += '</div>';
					html += '</div>';
					html += '</article>';
					}// del for

					

					if(pagina==0){
					html += '<div class="in_pagination">';
					html += '<a href="#">F</a>';
					html += '<a href="#">&laquo;</a>';
					}else{
					html += '<div class="in_pagination">';
					html += '<a href="#">F</a>';
					html += '<a href="#" onClick=anterior();>&laquo;</a>';
					}
				
				// a.FILAS.length != 0
					html += '<a href="#" class="in_active" id="in_active">'+pagina+'</a>';
					html += '<a href="#" onClick=siguiente();>&raquo;</a>';
					html += '<a href="#">L</a>';
					html += '</div>';
				

				
					
					document.getElementById("in_engancho").innerHTML = html;
			}
			num=v.FILAS.length;
			for(let c=0; c<num;c++){
				idfo="in_f"+c;
				idte="in_t"+c;
				alert(idfo);
				hfo=document.getElementById(idfo).offsetHeight;
				alert(hfo);
				hfo=hfo-51.2;
		
			document.getElementById(idte).setAttribute("style","height:"+hfo+"px");
				// document.getElementById(idte).style.height=hfo-51.2;
			}
		}
		
		xhr.send();

		return false;  //Para que no se recargue la pag y asi poder ver el error

}

function siguiente(){
	pvalor= document.getElementById("in_active").innerHTML;
		alert(pvalor+" oh si nena");
		pval=parseInt(pvalor)+1;
		alert(pval);
		mostrarEntradas(pval);
	}
function anterior(){
	pvalor= document.getElementById("in_active").innerHTML;
		alert(pvalor+" oh si nena");
		pval=parseInt(pvalor)-1;
		alert(pval);
		mostrarEntradas(pval);
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