# proyecto inventario 
### inicio del proyectpo 
abre la terminal en la carpeta donde vas a guardar el rpyecto y
pon los sigui9entes comandos:

```
mkdir proyecto-inventario
cd proyecto-inventario
```

```
npm init 
```
``` 
touch .env .gitignore index.js
```
instalamos las dependencias, recuerden npm es el manejador de paquetes de node o node package mange
```
npm install express mongoose dotenv cors
```
```
npm install --save-dev nodemon
```
y en el gitignore copian 
```
node_modules
.env
```
y ahora vamos a subir el codigo a github

## Hola mundo en Node.js
ahora vamos a hacer un hola mundo en node.js para eso vamos a poner el siguiente codigo en ineex.js
```
const express = require("express") => En esta parte definimos express para tomar la libreria express
const app = express() => Decimos que app va usar algo de express
const PORT = 3006 => definimos el puerto lo cual sera la ruta a tomar 
app.set("port",PORT) => condiguramos el puerto
app.get("/",(req,res)=> tenemos un verbo http y una ruta y definimosuna funcion que se ejecuta

 (req,res)=>
    req: La informacion que recibe del cliente
    res: La informacion que se le entrega al cliente

<!-- hay verbos HTTP -->

    res.send("Hola Mundo")  => estoy enviando la respuesta que sale en pantalla
)
app.listen(PORT,()=>{    =>inicia el servidor y lo pone en escucha con PORt tiene un callback que inicia el servidor cuando se inicie correctamente
    console.log(`server runnin in port ${PORT}`)   =>m cuando suceda el anterior evento confiem en consola mostrando que funciono
})
```

```
Documentacion extra: const express = require("express"); 
// Importamos la librería Express para usar sus funcionalidades.

const app = express(); 
// Creamos una instancia de Express y la asignamos a "app".

const PORT = 3006; 
// Definimos el puerto en el que el servidor escuchará las solicitudes.

app.set("port", PORT); 
// Configuramos la aplicación para que use el puerto definido en "PORT".

app.get("/", (req, res) => { 
    // Creamos una ruta con el verbo HTTP GET. 
    // Esta ruta responde a solicitudes en "/".

    /*
        (req, res) => {
            req: Objeto que contiene la información enviada por el cliente.
            res: Objeto usado para enviar una respuesta al cliente.
        }
    */

    res.send("Hola Mundo");  
    // Enviamos como respuesta el texto "Hola Mundo".
});

app.listen(PORT, () => { 
    // Iniciamos el servidor y lo configuramos para que escuche en el puerto definido.
    // Además, usamos un callback que se ejecuta cuando el servidor inicia correctamente.

    console.log(`Server running on port ${PORT}`); 
    // Mostramos en consola que el servidor está corriendo en el puerto especificado.
});


```
```
ruta Logica 
// 1. Importar los módulos necesarios
const express = require("express");

// 2. Crear una instancia de la aplicación
const app = express();

// 3. Configurar ajustes globales
const PORT = 3000;

// 4. Definir las rutas
app.get("/", (req, res) => {
    res.send("Hola Mundo");
});

// 5. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

```


