/**----------------------------BLOQUE DE IVAN Y SARA ------------ */
interface Destinatario {nombre: string, direccion: string, telefono: string}
interface Paquete {trackingId: string, pesoKg: number, ditanciaKm: number, esFragil: boolean, 
    express: boolean, destinatario: Destinatario}
    







const listaDepaquetes: paquete[] = [
     { id: pesoKg: 80, distanciaKm: 200, fragil:false , express:true, destinatario: "Jose Gutierres" },
  { id: pesoKg: 20, distanciaKm: 150, fragil:false , express:true , destinatario: "maria jimenez" },
  { id: pesoKg: 25, distanciaKm: 300, fragil:false , express:true, destinatario: "andres espina" },
  { id: pesoKg: 10, distanciaKm: 800, fragil:false , express:false , destinatario: "luis fernandez" },
  { id: pesoKg: 50, distanciaKm: 200, fragil:false , express:true, destinatario: "fernando torres" },
  { id: pesoKg: 20, distanciaKm: 550, fragil:false , express:true , destinatario: "julieta afanador" },
  { id: pesoKg: 80, distanciaKm: 35, fragil:false , express:true, destinatario: "felipe carreño" },
  { id: pesoKm: 20, distanciaKm: 62, fragil:false , express:true , destinatario: "luisa perez" },
  
]; 

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
