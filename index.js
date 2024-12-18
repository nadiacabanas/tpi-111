const express = require("express");

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("\views\registro.ejs validar", function (req, res) {
    res.render("Login");
    const datos = rec.body;

    let DNI = datos.dni;
    let nombre = datos.nom;
    let apellido = datos.apell;
    let curso = datos.cur;
    let division = datos.div;
    let usuario = datos.usu;
    let contrasena = datos.cont;
})


// Middleware para servir archivos estáticos
app.use(express.static("public"));

// Middleware para procesar datos del formulario
app.use(express.urlencoded({ extended: true }));

// Configuración del motor de vistas
app.set("view engine", "ejs");

// Ruta GET para mostrar el formulario
app.get("/", function (req, res) {
    res.render("Login");
});

// Ruta POST para manejar el inicio de sesión
app.post("/", function (req, res) {
    const { usuario, contrasenia } = req.body;
    console.log(`Usuario: ${usuario}, Contraseña: ${contrasenia}`);
    res.redirect("/Inicio")
    res.send("Inicio de sesión recibido");
});

// Ruta GET para mostrar el formulario
app.get("/registro", function (req, res) {
    res.render("registro");
});


// Ruta GET para mostrar el formulario
app.get("/carga", function (req, res) {
    res.render("Carga-notas");
});

// Ruta GET para mostrar el formulario
app.get("/ver_notas", function (req, res) {
    res.render("ver_notas_alumno");
});



// Ruta GET para mostrar el formulario
app.get("/Inicio", function (req, res) {
    res.render("Home");
});

// Inicia el servidor
app.listen(3000, function () {
    console.log("Servidor creado en http://localhost:3000");
});
