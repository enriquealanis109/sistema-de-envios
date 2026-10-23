/**----------------------------BLOQUE DE IVAN Y SARA ------------ */

/**----------------------------BLOQUE DE ESDRAS ------------ */

function descargarManifiesto(): Promise<Paquete[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const conexionExitosa = Math.random() >= 0.2;
      if (conexionExitosa) {
        resolve(dbPaqute);
      } else {
        reject(new Error("Fallo de sincronizacion GPS/Almacen"));
      }
    }, 2000);
  });
}

/**----------------------------BLOQUE DE LEONARDO ------------ */

/**----------------------------BLOQUE DE ENRIQUE ------------ */
