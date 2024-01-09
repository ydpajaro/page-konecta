function extraerPalabras() {
    const datosEntradaTextarea = document.getElementById("datosEntrada");
    const resultadosDiv = document.getElementById("resultados");

    resultadosDiv.innerHTML = "";

    const datosEntrada = datosEntradaTextarea.value.trim();

    if (!datosEntrada) {
        resultadosDiv.textContent = "Por favor, ingresa datos en el área de entrada.";
        return;
    }

    const lineas = datosEntrada.split('\n');

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const encabezadoRow = document.createElement("tr");
    const encabezadoKey = document.createElement("th");
    encabezadoKey.textContent = "KEY";
    encabezadoRow.appendChild(encabezadoKey);
    thead.appendChild(encabezadoRow);
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");

   
    lineas.forEach(linea => {
        const campos = linea.split('\t');

        const fila = document.createElement("tr");

        campos.forEach((campo, index) => {
            const celda = document.createElement("td");
            console.log(celda)
            celda.textContent = index === 0 ? `$lang["${campo}"]` : campo;
            celda.classList.add("tabla-celda");
            fila.appendChild(celda);
        });

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);

    resultadosDiv.appendChild(tabla);
}
