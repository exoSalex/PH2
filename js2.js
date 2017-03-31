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
					html += '<article>';
					html += '<h3>'+e.nombre+'</h3>';
					html += '<div>';
					html += '<img src="' + foto +'" alt="'+ e.descripcion_foto+'">';
					html += '<p>'+ e.descripcion+'</p>';
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

function mostrarEntradas2(frm){

	let xhr = XMLHttpRequest(),
		url = 'http://localhost/PH2/rest/entrada/',
		section = frm.parentNode.parentNode;
		
		url += '?pag=' + frm.pag.value + '&lpag=' + frm.lpag.value;

		//frm.pag.value para acceder a los campos del formulario

		xhr.open('GET', url, true); //Porque no vamos a pedir informacion de la bbdd, sino de las entradas
		xhr.onload= function(){
			console.log(xhr.responseText);
			let v = JSON.parse(xhr.responseText); //Lo convierte a objeto formato json
			console.log(v);

			if(v.RESULTADO == 'ok'){
				while(a = section.querySelector('div>article')) 
					a.remove() //Para eliminar el nodo

				for(let i=0; i< v.FILAS.lenght;i++){
					let e= v.FILAS[i];
					foto= 'http://localhost/pH2/fotos/' + e.fichero;

					//Creamos los nodos del arbol
					let article = document.createElement('article'),
					h3 = document.createElement('h3'),
					div = document.createElement('div'),
					img = document.createElement('img'),
					p = document.createElement('p'),
					footer = document.createElement('footer'),
					p2 = document.createElement('p'),
					time = document.createElement('time'),
					p3 = document.createElement('p'),
					p4 = document.createElement('p');

					//Anidamos los elementos del arbol
					//h3 dentro del article (h3 hijo del article) appendChild pone el ultimo hijo
					article.appendChild(h3); //Primer hijo es el h3
					article.appendChild(div);
					article.appendChild(footer); //segundo hijo es el footer
					//article.insertBefore(div, footer); //Inserto el div delante del footer pero ahora no hace falta porque lo estamos creando de 0
					//un contenedor con un pie y tenemos que insertar las cosas despues del contenedor
					div.appendChild(img);
					div.appendChild(p);

					footer.appendChild(p2);
					footer.appendChild(time);
					footer.appendChild(p3);
					footer.appendChild(p4);

					//Ahora relleno los huecos //Test conentent lo que le pognamos lo pone como texto , inner html si que las renderizaria pej. negrita o cursiva
					h3.innerHTML = e.nombre;
					img.setAttribute('src', foto);
					//img.src = foto; //Puede serque no funcione en algunos casos pero se puede usar
					img.setAttribute('alt', e.descripcion_foto);
					p.innerHTML = e.descripcion;
					p2.innerHTML= e.login;
					time.innerHTML = e.fecha;
					time.setAttribute('datetime', e.fecha);
					p3.innerHTML = e.nfotos + "fotos";
					p4.innerHTML = e.ncomentarios + "comentarios";

					section.querySelector('h2+div').appendCHild(article);
					}// del for
			}
		}
		
		xhr.send();

		return false;  //Para que no se recargue la pag y asi poder ver el error
}

function mostrarEntradas3(frm){

	let xhr = XMLHttpRequest(),
		url = 'http://localhost/PH2/rest/entrada/',
		section = frm.parentNode.parentNode;
		
		url += '?pag=' + frm.pag.value + '&lpag=' + frm.lpag.value;

		//frm.pag.value para acceder a los campos del formulario

		xhr.open('GET', url, true); //Porque no vamos a pedir informacion de la bbdd, sino de las entradas
		xhr.onload= function(){
			console.log(xhr.responseText);
			let v = JSON.parse(xhr.responseText); //Lo convierte a objeto formato json
			console.log(v);

			if(v.RESULTADO == 'ok'){
				while(a = section.querySelector('div>article')) 
					a.remove() //Para eliminar el nodo

				for(let i=0; i< v.FILAS.lenght;i++){
					let e= v.FILAS[i];
					foto= 'http://localhost:/PH2/fotos/' + e.fichero;

					let article = section.querySelector('div>template').content.cloneNode(true); //accedo al template

					//Creamos los nodos del arbol
					
					article.querySelector('h3').innerHTML = e.nombre;
					article.querySelector('div>img').setAttribute('src',foto);
					article.querySelector('div>img').setAttribute('alt',e.descripcion_foto);
					article.querySelector('div>p').innerHTML = e.descripcion;
					article.querySelector('footer>p:first-of-type').innerHTML = e.login;
					article.querySelector('footer>time').innerHTML = e.fecha;
					article.querySelector('footer>time').setAttribute('datetime', e.fecha);
					article.querySelector('footer>p:nth-of-type(2)').innerHTML = e.nfotos + "fotos";
					article.querySelector('footer>p:nth-of-type(3)').innerHTML = e.ncomentarios + "comentarios";

					section.querySelector('h2+div').appendCHild(article);
					}// del for
			}
		}
		
		xhr.send();

		return false;  //Para que no se recargue la pag y asi poder ver el error
}

