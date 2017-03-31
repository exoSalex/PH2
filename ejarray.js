function forma01(){

// Se utiliza la instrucción new Object() para crear el nuevo objeto:
var persona = {
// Se utiliza la notación de puntos para añadir propiedades y métodos:
// Se añaden las propiedades ...
nombre = "Juan";
apellidos = "Sin Miedo";
dni = "12345678A";
fNac = "21-04-1992";
// Se añaden los métodos ...
calcularEdad = function(){ // Devuelve los años que tiene
 var vFecha = this.fNac.split("-");
 var f = new Date(parseInt(vFecha[2]), parseInt(vFecha[1])-1, parseInt(vFecha[0]));
 return ((new Date()).getTime()-f.getTime()) / (365*24*60*60*1000);
}
 return persona;
}
