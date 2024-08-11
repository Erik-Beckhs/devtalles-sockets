const socketController = socket => {
    console.log('Cliente conectado', socket.id);
    socket.on('disconnect', ()=>{
        console.log('Cliente desconectado', socket.id);
    })
    socket.on('enviar-mensaje', (payload, callback)=>{
        //this.io.emit('send-message', payload)
        //callback opcional pa devolver info
        const id = 123456
        callback(id) //devolverá a si mismo

        //envia a todos
        socket.broadcast.emit('send-message', payload); 
    })
}

module.exports = {
    socketController
}