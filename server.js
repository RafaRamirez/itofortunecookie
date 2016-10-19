//cargando el modulo http
var http = require('http');
//cargando la libreria de colors
var colors = require('colors');
//Generando tema
colors.setTheme({
    silly: 'Rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey'
});
//obteniendo configuraciones
var config = require('./config/config');

var IP = config.IP;
var PORT = CONFIG.PORT;
//creando el server
var server = http.createServer(function(req, res){
    res.writeHead(
        200, 
        {
            'Content-Type':'text/plain',
            'Server':'buho@0.0.0'
        }
    );
    res.write('hola desde el server...');
    res.end();
});
//Poniendo a escuchar al server
server.listen(PORT, IP, function(){
    console.log("> server escuchando en ".info + `http//${IP}:${PORT}/...`.info);
});