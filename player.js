
const params = new URLSearchParams(location.search);
const name = params.get('name') || 'Jugador';
const role = params.get('role') || 'Tripulante';
const topic = params.get('topic') || '';

document.getElementById('nombre').textContent = name;
const rolEl = document.getElementById('rol');
rolEl.textContent = role;
rolEl.classList.add(role === 'Impostor' ? 'danger' : 'success');

const temaEl = document.getElementById('tema');
temaEl.textContent = (topic && topic.trim() !== '') ? topic : '(Sin tema asignado)';
