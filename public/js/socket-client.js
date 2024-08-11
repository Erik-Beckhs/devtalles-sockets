const lblOnline = document.querySelector('.lblOnline');
const lblOffline = document.querySelector('.lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnMessage = document.querySelector('#btnMessage');

const socket = io();

socket.on('connect', ()=>{
    console.log('Conectado')
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
})

socket.on('disconnect', ()=>{
    console.log('Desconectado del servidor');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
})

socket.on('send-message', (value)=>{
    console.log(value); //devuelve a todos
})

btnMessage.addEventListener('click', ()=>{
    socket.emit('enviar-mensaje', {
        subject:'Message sending from client',
        message: txtMessage.value,
        date:new Date().toDateString()
    }, (value)=>{
        //este tercer argumento es el callback, respuesta que devuelve el server, es opcional el 3er argumento, solo devuelve al usuario q envio el mensaje
        console.log('respuesta desde el server', value);
    })
    //console.log('se hizo click')
})
