/**----------------------------BLOQUE DE IVAN Y SARA ------------
 * CREACION DE INTERFACES Y ARRAY
 */
interface Destinatario {
  nombre: string;
  direccion: string;
  telefono: string;
}
interface Paquete {
  trackingId: string;
  pesoKg: number;
  distanciaKm: number;
  esFragil: boolean;
  express: boolean;
  destinatario: Destinatario;
}

const listaPaquetes: Paquete[] = [
  {
    trackingId: "P-000",
    pesoKg: 80,
    distanciaKm: 200,
    esFragil: false,
    express: true,
    destinatario: {
      nombre: "Fernando Torres",
      direccion: "Calle 10, 12323",
      telefono: "382738872",
    },
  },
  {
    trackingId: "P-001",
    pesoKg: 80,
    distanciaKm: 200,
    esFragil: false,
    express: true,
    destinatario: {
      nombre: "Jose Gutierres",
      direccion: "Calle 1 100",
      telefono: "8110000001",
    },
  },
  {
    trackingId: "P-002",
    pesoKg: 20,
    distanciaKm: 150,
    esFragil: false,
    express: true,
    destinatario: {
      nombre: "maria jimenez",
      direccion: "Calle 2 200",
      telefono: "8110000002",
    },
  },
  {
    trackingId: "P-003",
    pesoKg: 25,
    distanciaKm: 300,
    esFragil: false,
    express: true,
    destinatario: {
      nombre: "andres espina",
      direccion: "Calle 3 300",
      telefono: "8110000003",
    },
  },
  {
    trackingId: "P-004",
    pesoKg: 10,
    distanciaKm: 800,
    esFragil: false,
    express: false,
    destinatario: {
      nombre: "luis fernandez",
      direccion: "Calle 4 400",
      telefono: "8110000004",
    },
  },
  {
    trackingId: "P-005",
    pesoKg: 50,
    distanciaKm: 200,
    esFragil: false,
    express: true,
    destinatario: {
      nombre: "fernando torres",
      direccion: "Calle 5 500",
      telefono: "8110000005",
    },
  },
  {
    trackingId: "P-006",
    pesoKg: 20,
    distanciaKm: 550,
    esFragil: false,
    express: true,
    destinatario: {
      nombre: "julieta afanador",
      direccion: "Calle 6 600",
      telefono: "8110000006",
    },
  },
  {
    trackingId: "P-007",
    pesoKg: 80,
    distanciaKm: 35,
    esFragil: false,
    express: true,
    destinatario: {
      nombre: "felipe carreño",
      direccion: "Calle 7 700",
      telefono: "8110000007",
    },
  },
  {
    trackingId: "P-008",
    pesoKg: 20,
    distanciaKm: 62,
    esFragil: false,
    express: true,
    destinatario: {
      nombre: "luisa perez",
      direccion: "Calle 8 800",
      telefono: "8110000008",
    },
  },
];
/**----------------------------BLOQUE DE ESDRAS ------------
 *Crear descargarManifiesto(): Promise<Paquete[]> con demora de 2s. Implementar
el 20% de probabilidad de error ("Fallo en sincronización GPS/Almacén") retornando un rechazo
tipado.
 */

function descargarManifiesto(): Promise<Paquete[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const conexionExitosa = Math.random() >= 0.2;
      if (conexionExitosa) {
        resolve(listaPaquetes);
      } else {
        reject(new Error("Fallo de sincronizacion GPS/Almacen"));
      }
    }, 2000);
  });
}
/**----------------------------BLOQUE DE LEONARDO ------------
 *Implementar calcularCostoEnvio(p: Paquete): number: Tarifa base $15 + ($2.5 × km)+ ($1.5 × kg).
 * Si es frágil sumar seguro de $20; si es express multiplicar total por 1.25.
 * Crearfunción adicional para ordenar paquetes de menor a mayor distancia.
 *
 */

function calcularCostoEnvio(p: Paquete): number {
  let total = 15 + 2.5 * p.distanciaKm + 1.5 * p.pesoKg;
  if (p.esFragil) {
    total += 20;
  }

  if (p.express) {
    total *= 1.25;
  }

  return total;
}

function ordPorDistancia(lista: Paquete[]): Paquete[] {
  return [...lista].sort((a, b) => a.distanciaKm - b.distanciaKm);
}

/**----------------------------BLOQUE DE ENRIQUE ------------
 * Consumir la promesa en main.ts con try/catch. Si hay error, cargar un array de respaldo
 * local. Imprimir itinerario de chofer con subtotales, costo total a cobrar del camión y paquetes
 * prioritarios destacados.
 */

const paquetesRespaldo: Paquete[] = [
  {
    trackingId: "R-001",
    pesoKg: 3,
    distanciaKm: 4,
    esFragil: true,
    express: false,
    destinatario: {
      nombre: "ana lopez",
      direccion: "Calle 20 120",
      telefono: "8111111111",
    },
  },
  {
    trackingId: "R-002",
    pesoKg: 10,
    distanciaKm: 12,
    esFragil: false,
    express: true,
    destinatario: {
      nombre: "carlos ruiz",
      direccion: "Calle 21 45",
      telefono: "8122222222",
    },
  },
  {
    trackingId: "R-003",
    pesoKg: 1.5,
    distanciaKm: 7,
    esFragil: false,
    express: false,
    destinatario: {
      nombre: "maria perez",
      direccion: "Calle 22 300",
      telefono: "8133333333",
    },
  },
];

async function ejecutarDespacho(): Promise<void> {
  let paquetes: Paquete[];
  try {
    console.log("Descargando manifiesto...");
    paquetes = await descargarManifiesto();
    console.log("Manifiesto descargado correctamente.\n");
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    console.log("Cargando array de respaldo local...\n");
    paquetes = paquetesRespaldo;
  }

  const ruta = ordPorDistancia(paquetes);
  let costoTotal = 0;

  console.log("ITINERARIO DEL CHOFER");
  ruta.forEach((paquete, i) => {
    const subtotal = calcularCostoEnvio(paquete);
    costoTotal += subtotal;

    const etiquetas: string[] = [];
    let prioridad = "";
    if (paquete.express && paquete.esFragil) {
      prioridad = " PRIORITARIO (EXPRESS, FRAGIL)";
    } else if (paquete.express) {
      prioridad = " PRIORITARIO (EXPRESS)";
    } else if (paquete.esFragil) {
      prioridad = " PRIORITARIO (FRAGIL)";
    }

    console.log(`Parada ${i + 1}: ${paquete.trackingId}${prioridad}`);
    console.log(`   Destinatario: ${paquete.destinatario.nombre}`);
    console.log(`   Telefono: ${paquete.destinatario.telefono}`);
    console.log(`   Direccion: ${paquete.destinatario.direccion}`);
    console.log(`   Distancia: ${paquete.distanciaKm} km`);
    console.log(`   Peso: ${paquete.pesoKg} kg`);
    console.log(`   Subtotal: $${subtotal}`);
  });

  console.log(`Paquetes en ruta: ${ruta.length}`);
  console.log(`TOTAL A COBRAR DEL CAMION: $${costoTotal}`);
}
ejecutarDespacho();
