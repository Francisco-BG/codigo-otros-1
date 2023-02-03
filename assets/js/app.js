const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //cambiar por punto
const $b = document.querySelector('.blog');//cambiar por punto.
const $l = document.querySelector('.location');

async function displayUser(username) { //Falta la palabra reservada async
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data= await response.json(); //Faltaba obtener los datos de la respuesta.
  console.log(data);
  $n.textContent = `${data.name}`; // cambiar comillas simples por acentos graves. líneas 12,13 y 14
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);