/**----------------------------BLOQUE DE IVAN Y SARA ------------ */
interface Destinatario {nombre: string, direccion: string, telefono: string}
interface Paquete {trackingId: string, pesoKg: number, ditanciaKm: number, esFragil: boolean, 
    express: boolean, destinatario: Destinatario}
    




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
