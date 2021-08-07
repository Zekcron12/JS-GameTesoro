/*------------------------------ LOGICA DE FUNCIONES ------------------------------ */
const getRandomNumber = size => {
	//nos devuelve un numero entero aleatorio 
	return Math.floor(Math.random() * size);
}
//funcion que nos va calcular la distancia del tesoro con respecto a la distancia de
//donde se halla echo click. El funcionamiento es basico, aplicando el teorema de
//pitagoras, es decir, el tesoro va tener una coordenada random en el eje x e y. 
//El usuario al dar click en cualquier parte del mapa se va generar un punto que tenga 
//valores del eje x e y. Al restar esta distancia tanto del x e y con la del tesoro 
//se obtienen dos valores del eje x e y, luego se aplica pitagora y se obtiene la distancia.


//parametros e = click random : parametro target = tesoro
const getDistance = (e, treasureBox) => {

	//calculo de la coordenada eje x
	let diffX = e.offsetX - treasureBox.x;

	//calculo de la coordenada eje y
	let diffY = e.offsetY - treasureBox.y;

	//una vez obtenido los valores de los ejes, ahora necesito que me retornes la raiz 'sqrt'
	return Math.sqrt((diffX * diffX) + (diffY + diffY));
}

//funcion que nos permite darle al usuario pista sobre que tan cerca esta
const getDistanceHint = distance => {
	if (distance < 30) {
		return "Súper Caliente!";
	} else if (distance < 40) {
		return "Muy Caliente";
	} else if (distance < 60) {
		return "Caliente";
	} else if (distance < 100) {
		return "Frío";
	} else if (distance < 210) {
		return "Muy Frío";
	} else if (distance < 310) {
		return "Súper Frío";
	} else if (distance < 410) {
		return "Congelado";
	} else {
		return "Súper Congelado";
	}
};
/*------------------------------ LOGICA DEL GAME ------------------------------ */
//constantes de nuestro mapa o fondo 
const WIDTH = 700;
const HEIGH = 500;

//esto toma a la funcion getRandomNumber y le dice que dentro de estas medidas 
//tanto de width como de heigh generame aleatoriamente una coordenada del tesoro.
let treasureBox = {
	x: getRandomNumber(WIDTH),
	y: getRandomNumber(HEIGH)
};

//esta constante llama al ID del mapa
const MAPS = document.getElementById('map');
//esta constante llama al ID de la pista
const HINT = document.getElementById('hint');

//variable que almacena la cantidad de clicks sobre el mapa
let totalClick = 0;

//al ID ponele un evento click y cuando se ejecute llamame a la funcion
map.addEventListener('click', function (e) {

	//por cada click se va sumando uno y se va guardando en la variable
	totalClick++;

	//en la variable guardamos la distancia que hay del tesoro con el click 
	let distance = getDistance(e, treasureBox);

	//en esta variable guardame la pista de que tan cerca del tesoro esta.
	let distanceHint = getDistanceHint(distance);

	//al ID ponele en el html el string que nos devuelve la variable
	hint.innerHTML = distanceHint;

	//si la distancia es menor a 20, encuentra el tesoro.
	if (distance < 20) {
		alert(`Encontraste al Tesoro en ${totalClick} Clicks!`);
		location.reload();
	//si supera la cantidad de 20 click se dispara el evento de perdiste.	
	} else if (totalClick >= 20) {
		alert('Perdiste, agotaste tus 20 intentos');
		location.reload();
	}
});


//-------------------- BITÁCORA --------------------//
const open = document.getElementById('open');
const modalBitacora = document.getElementById('modal-bitacora');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modalBitacora.classList.add('show');  
});

close.addEventListener('click', () => {
  modalBitacora.classList.remove('show');
});
