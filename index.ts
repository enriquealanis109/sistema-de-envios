/**----------------------------BLOQUE DE IVAN Y SARA ------------ */

/**----------------------------BLOQUE DE ESDRAS ------------ */

/**----------------------------BLOQUE DE LEONARDO ------------ */


















// DEV 2 
// Crear descargarManifiesto(): Promise<Paquete[]> con demora de 2s. Implementar
// el 20% de probabilidad de error ("Fallo en sincronización GPS/Almacén") retornando un rechazo
// tipado.

function descargarManifiesto(): Promise<Paquete[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const conexionExitosa = Math.random() >= 0.2;
            if (conexionExitosa){
                resolve(dbPaquete);
            } else {
                reject(new Error("Error 500: fallo en la sincronización GPS/Almacén"));
            }         
        }, 2000);
    })
}







/**----------------------------BLOQUE DE ENRIQUE ------------ */
