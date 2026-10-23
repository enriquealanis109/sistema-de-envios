/**----------------------------BLOQUE DE IVAN Y SARA ------------ */

/**----------------------------BLOQUE DE ESDRAS ------------ */

/**----------------------------BLOQUE DE LEONARDO ------------ */




























/**----------------------------BLOQUE DE ENRIQUE ------------ */



















































































































function calcularCostoEnvio(p: Paquete): number {
    let total = 15 + (2.5 * p.distanciaKm) + (1.5 * p.pesoKg);
    if (p.esFragil) {
        total += 20;
    }

    if (p.express) {
        total *= 1.25;
    }

    return total;
}

function ordPorDistancia (lista: Paquete[]) : Paquete [] {
    return [...lista].sort(
        (a, b) => a.distanciaKm - b.distanciaKm
    )
}
    const paquetesOrdenados = ordPorDistancia(dbPaquete);
    console.log(paquetesOrdenados);