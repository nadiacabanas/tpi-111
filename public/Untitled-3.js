document.addEventListener("DOMContentLoaded", () => {
    const tablaNotas = document.getElementById("tabla-notas");

    // Datos de ejemplo (puedes reemplazarlos con datos dinámicos desde un servidor o archivo JSON)
    const notas = [
        { materia: "TÉCNICA: Autogestión", informe1: 8, informe2: 7, cuatrimestre1: 7.5, cuatrimestre2: 8, final: 8 },
        { materia: "TÉCNICA: Hardware 4", informe1: 9, informe2: 8, cuatrimestre1: 8.5, cuatrimestre2: 9, final: 9 },
        { materia: "TÉCNICA: Programación", informe1: 10, informe2: 9, cuatrimestre1: 9.5, cuatrimestre2: 10, final: 10 },
        { materia: "TÉCNICA: Redes 3", informe1: 7, informe2: 6, cuatrimestre1: 6.5, cuatrimestre2: 7, final: 7 },
        { materia: "EDI: Arduino 3", informe1: 8, informe2: 8, cuatrimestre1: 8, cuatrimestre2: 8.5, final: 8.25 }
    ];

    // Generar las filas de la tabla dinámicamente
    notas.forEach(nota => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${nota.materia}</td>
            <td>${nota.informe1}</td>
            <td>${nota.informe2}</td>
            <td>${nota.cuatrimestre1}</td>
            <td>${nota.cuatrimestre2}</td>
            <td>${nota.final}</td>
        `;

        tablaNotas.appendChild(fila);
    });
});
