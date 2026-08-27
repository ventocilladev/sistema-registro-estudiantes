let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || []

function guardarDatos() {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes))
}

function registrarEstudiante() {
    let nombre = document.getElementById("nombre").value
    let codigo = document.getElementById("codigo").value
    let carrera = document.getElementById("carrera").value

    if (nombre === "" || codigo === "" || carrera === "") {
        alert("Completa todos los campos")
        return
    }

    let estudiante = {
        nombre: nombre,
        codigo: codigo,
        carrera: carrera
    }

    estudiantes.push(estudiante)
    guardarDatos()
    mostrarEstudiantes()

    document.getElementById("nombre").value = ""
    document.getElementById("codigo").value = ""
    document.getElementById("carrera").value = ""
}

function mostrarEstudiantes() {
    let lista = document.getElementById("listaEstudiantes")
    lista.innerHTML = ""

    estudiantes.forEach(function(estudiante, indice) {
        lista.innerHTML += `
            <tr>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.codigo}</td>
                <td>${estudiante.carrera}</td>
                <td>
                    <button onclick="eliminarEstudiante(${indice})">Eliminar</button>
                </td>
            </tr>
        `
    })
}

function eliminarEstudiante(indice) {
    estudiantes.splice(indice, 1)
    guardarDatos()
    mostrarEstudiantes()
}

function buscarEstudiante() {
    let texto = document.getElementById("buscar").value.toLowerCase()
    let filas = document.querySelectorAll("#listaEstudiantes tr")

    filas.forEach(function(fila) {
        let contenido = fila.innerText.toLowerCase()

        if (contenido.includes(texto)) {
            fila.style.display = ""
        } else {
            fila.style.display = "none"
        }
    })
}

mostrarEstudiantes()
