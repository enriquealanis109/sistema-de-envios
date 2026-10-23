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

/**----------------------------BLOQUE DE ENRIQUE ------------
 * Consumir la promesa en main.ts con try/catch. Si hay error, cargar un array de respaldo
 * local. Imprimir itinerario de chofer con subtotales, costo total a cobrar del camión y paquetes
 * prioritarios destacados.
 */
