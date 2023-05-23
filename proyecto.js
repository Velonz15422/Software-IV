const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-enter');
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';
let LIST = [];
let id = 0;

// Creación de fecha actualizada
const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString('es-MX', {
  weekday: 'long',
  month: 'short',
  day: 'numeric'
});

// Función para agregar una tarea
function agregarTarea(tarea, importancia, realizado, eliminado, votes) {
  if (eliminado) {
    return;
  }

  const REALIZADO = realizado ? check : uncheck;
  const LINE = realizado ? lineThrough : '';

  const importanciaOption = document.querySelector(`option[value="${importancia}"]`);
  const importanciaText = importanciaOption ? importanciaOption.innerText : '';

  const elemento = `
    <li>
      <i class="far ${REALIZADO} co" data-action="realizado" data-id="${id}"></i>
      <p class="text ${LINE}">${importanciaText} - ${tarea}</p>
      <span class="votes">${votes || 0}</span>
      <button class="vote-button" data-action="votar" data-id="${id}">Votar</button>
      <i class="fas fa-trash de" data-action="eliminar" data-id="${id}"></i>
    </li>
  `;

  lista.insertAdjacentHTML('beforeend', elemento);
}

// Función para marcar una tarea como realizada o no realizada
function tareaRealizada(element) {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector('.text').classList.toggle(lineThrough);
  LIST[element.dataset.id].realizado = !LIST[element.dataset.id].realizado;
  guardarListaTareas();
}

// Función para eliminar una tarea
function tareaEliminada(element) {
  const confirmacion = confirm('¿Estás seguro de que deseas eliminar este riesgo?');
  if (confirmacion) {
    const taskId = element.dataset.id;
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST.splice(taskId, 1);
    id--;
    guardarListaTareas();
  }
}

// Evento al hacer clic en el botón "Enter"
botonEnter.addEventListener('click', () => {
  const tarea = input.value;
  const importancia = document.querySelector('#opciones').value;

  if (tarea && importancia) {
    agregarTarea(tarea, importancia, false, false, 0);
    LIST.push({
      nombre: tarea,
      importancia: importancia,
      realizado: false,
      eliminado: false,
      votes: 0
    });
    guardarListaTareas();
    id++;
    input.value = '';
  }
});

// Evento al presionar la tecla "Enter" en el campo de entrada
input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const tarea = input.value;
    const importancia = document.querySelector('#opciones').value;

    if (tarea && importancia) {
      agregarTarea(tarea, importancia, false, false, 0);
      LIST.push({
        nombre: tarea,
        importancia: importancia,
        realizado: false,
        eliminado: false,
        votes: 0
      });
      guardarListaTareas();
      id++;
      input.value = '';
    }
  }
});

// Evento al hacer clic en la lista de tareas
lista.addEventListener('click', (event) => {
  const element = event.target;
  const elementAction = element.dataset.action;

  if (elementAction === 'realizado') {
    tareaRealizada(element);
  } else if (elementAction === 'votar') {
    const taskId = element.dataset.id;
    const votesElement = element.parentNode.querySelector('.votes');
    const currentVotes = parseInt(votesElement.textContent);
    votesElement.textContent = currentVotes + 1;
    LIST[taskId].votes = currentVotes + 1;
    guardarListaTareas();
    ordenarPorVotacion();
  } else if (elementAction === 'eliminar') {
    tareaEliminada(element);
  }
});

// Función para cargar las tareas almacenadas en el local storage
function cargarTareas() {
  if (localStorage.getItem('TODO')) {
    LIST = JSON.parse(localStorage.getItem('TODO'));
    id = LIST.length;

    for (let i = 0; i < LIST.length; i++) {
      const task = LIST[i];
      agregarTarea(task.nombre, task.importancia, task.realizado, task.eliminado, task.votes);
    }
  }
}

// Función para ordenar los riesgos por votación
function ordenarPorVotacion() {
  LIST.sort((a, b) => b.votes - a.votes);
  guardarListaTareas();
}

// Función para guardar la lista de tareas en el almacenamiento local
function guardarListaTareas() {
  localStorage.setItem('TODO', JSON.stringify(LIST));
}

cargarTareas();