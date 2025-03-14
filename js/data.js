/* LISTA DE AUTOS
   Aqui se organizan todos el auto en formato JSON, con sus respectivos datos, organizados por categorias. Basta con duplicar un diccionario y editar la informacion para agregar mas autos
*/
const carsData = {
  cars: [

    // === HYPERCAR === //
    
    //Agera R
    {
      id: "koenigsegg-agera-r",
      name: "Agera R",
      brand: {
        name: "Koenigsegg",
        logo: "assets/icons/koenigsegg.webp",
      },
      year: 2012,
      category: "Hypercar",
      description: "MCTT • 1409CV • 450km/h • 2.77s",
      image: "assets/cars/koenigsegg.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [40, 60],
              min: 40,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: -15,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: 5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 20,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // Noble
    {
      id: "M600 Lunar Year Ed.",
      name: "M600 Lunar Year Ed.",
      brand: {
        name: "Noble",
        logo: "assets/icons/noble.webp",
      },
      year: 2010,
      category: "Hypercar",
      description: "MCTT • 1225CV • 450km/h • 2.57s",
      image: "assets/cars/nobleM600.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [40, 60],
              min: 60,
              dualValues: true,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 1,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // Jesko
    {
      id: "Jesko",
      name: "Jesko",
      brand: {
        name: "Koenigsegg",
        logo: "assets/icons/koenigsegg.webp",
      },
      year: 2020,
      category: "Hypercar",
      description: "MCTT • 1654CV • 450km/h • 2.50s",
      image: "assets/cars/kjesko.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [48, 52],
              min: 0,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -8,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.2,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // Ferrari F12tbf
    {
      id: "F12tbf",
      name: "F12tbf",
      brand: {
        name: "Ferrari",
        logo: "assets/icons/ferrari.webp",
      },
      year: 2016,
      category: "Hypercar",
      description: "FRD • 1415CV • 450km/h • 2.73s",
      image: "assets/cars/F12tbf.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [50, 50],
              min: 0,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: -10,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Bugatti Centodieci
    {
      id: "Bugatti Centodieci",
      name: "Bugatti Centodieci",
      brand: {
        name: "Bugatti",
        logo: "assets/icons/bugatti.webp",
      },
      year: 2019,
      category: "Hypercar",
      description: "4x4 • 1939CV • 453km/h • 1.73s",
      image: "assets/cars/centodieci.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [45, 55],
              dualValues: true,
              min: 20,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [69, 31],
              dualValues: true,
              min: 20,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 6,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 3,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -5,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -8,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 7,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 5,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 7,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 2,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              isAlignment: true,
              min: -0.25,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              isAlignment: true,
              min: -0.25,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // 919 Street
    {
      id: "919 Street",
      name: "919 Street",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.webp",
      },
      year: 2017,
      category: "Hypercar",
      description: "MCTT • 932CV • 450km/h • 1.80s",
      image: "assets/cars/919street.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [50, 50],
              dualValues: true,
              min: 20,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [50, 50],
              dualValues: true,
              min: 20,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 4,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 4,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -6,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -6,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 10,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 8,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 4,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -2,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              isAlignment: true,
              min: -0.25,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              isAlignment: true,
              min: -0.25,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Lotus Evija
    {
      id: "Lotus Evija Pure Edition",
      name: "Lotus Evija Pure Edition",
      brand: {
        name: "Lotus",
        logo: "assets/icons/lotus.webp",
      },
      year: 2022,
      category: "Hypercar",
      description: "MCTT • 2112CV • 452km/h • 2.43s",
      image: "assets/cars/LOTUS-E.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [50, 50],
              dualValues: true,
              min: 20,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [68, 32],
              dualValues: true,
              min: 20,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -5,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -3,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -10,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -8,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 5,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 7,
              min: -20,
              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -2,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -6,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.2,
              isAlignment: true,
              min: -0.25,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              isAlignment: true,
              min: -0.25,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Porsche GT1
    {
      id: "911 GT1 Strassenversion [993]",
      name: "911 GT1 Strassenversion [993]",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.webp",
      },
      year: 2012,
      category: "Hypercar",
      description: "MCTT • 1035CV • 451km/h • 3.33s",
      image: "assets/cars/Porsche-GT1.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [50, 50],
              min: 20,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -4,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 11,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },

    // === STREET TIRE 2 === //

    //Porsche 911 GT3 RS
    {
      id: "Porsche 911 GT3 RS",
      name: "Porsche 911 GT3 RS",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.webp",
      },
      year: 2023,
      category: "Street Tire 2",
      description: "MCTT • 745CV • 361km/h • 2.87s",
      image: "assets/cars/porsche-911-gt3.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [55, 45],
              min: 0,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -4,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 11,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.2,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Corvette ZR1
    {
      id: "Corvette ZR1",
      name: "Corvette ZR1",
      brand: {
        name: "Chevrolet",
        logo: "assets/icons/chevrolet.webp",
      },
      year: 2009,
      category: "Street Tire 2",
      description: "FRD • 760CV • 361km/h • 3.10s",
      image: "assets/cars/ZR1.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [68,32],
              min: 0,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -14,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 12,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 8,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.20,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Dodge Challenger SRT DEMON
    {
      id: "Challenger SRT DEMON Aeake Edition",
      name: "Challenger SRT DEMON Aeake Edition",
      brand: {
        name: "Dodge",
        logo: "assets/icons/dodge.webp",
      },
      year: 2018,
      category: "Street Tire 2",
      description: "FRD • 975CV • 359km/h • 2.30s",
      image: "assets/cars/DEMON.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [65, 35],
              min: 0,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -11,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -14,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 12,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Toyota GR Supra
    {
      id: "GR Supra",
      name: "GR Supra",
      brand: {
        name: "Toyota",
        logo: "assets/icons/toyota.webp",
      },
      year: 2021,
      category: "Street Tire 2",
      description: "FRD • 752CV • 360km/h • 3.23s",
      image: "assets/cars/grsupra.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [55, 45],
              min: 0,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -12,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 12,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 8,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.20,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Mustang Shelby GT500 Tribute edition
    {
      id: "Mustang Shelby GT500 Tribute edition",
      name: "Mustang Shelby GT500 Tribute edition",
      brand: {
        name: "Ford",
        logo: "assets/icons/ford.webp",
      },
      year: 2020,
      category: "Street Tire 2",
      description: "FRD • 1089CV • 360km/h • 2.87s",
      image: "assets/cars/gt500.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [59, 41],
              min: 0,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -11,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -13,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.20,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Porsche Scotto's 911 Turbo RWB
    {
      id: "Porsche Scotto's 911 Turbo RWB",
      name: "Porsche Scotto's 911 Turbo RWB",
      brand: {
        name: "Hoonigan",
        logo: "assets/icons/hoonigan.webp",
      },
      year: 1993,
      category: "Street Tire 2",
      description: "MCTT • 746CV • 360km/h • 3.00s",
      image: "assets/cars/hooniganRWB.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [45, 55],
              min: 0,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.20,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //911GT [993]
    {
      id: "911 GT [993]",
      name: "911 GT [993]",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.webp",
      },
      year: 1996,
      category: "Street Tire 2",
      description: "MCTT • 677CV • 361km/h • 3.27s",
      image: "assets/cars/911.3.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [40, 60],
              min: 0,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: -10,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -11,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -13,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 3,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 1,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Porche carrera 4s timeless
    {
      id: "Taycan Turbo s",
      name: "Porsche 911 Carrera 4S Timeless Edition",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.webp",
      },
      year: 2020,
      category: "Street Tire 2",
      description: "4x4 • 722CV • 361km/h • 2.33s",
      image: "assets/cars/porsche-4s.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [48, 52],
              dualValues: true,
              min: 30,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [65, 35],
              dualValues: true,
              min: 50,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Nissan Skyline GT-R R32
    {
      id: "Skyline GT-R [R32]",
      name: "Skyline GT-R [R32]",
      brand: {
        name: "Nissan",
        logo: "assets/icons/nissan.webp",
      },
      year: 1989,
      category: "Street Tire 2",
      description: "4x4 • 661CV • 359km/h • 2.50s",
      image: "assets/cars/GTR-32.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [50, 50],
              dualValues: true,
              min: 0,

              max: 50,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [70, 30],
              dualValues: true,
              min: 20,

              max: 70,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: -10,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.15,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // BMW M5
    {
      id: "M5 CS",
      name: "M5 CS",
      brand: {
        name: "BMW",
        logo: "assets/icons/bmw.webp",
      },
      year: 2022,
      category: "Street Tire 2",
      description: "4x4 • 956CV • 360km/h • 2.27s",
      image: "assets/cars/bmwm5.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [50, 50],
              dualValues: true,
              min: 30,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [60, 40],
              dualValues: true,
              min: 50,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // GT-R[34] HO edition
    {
      id: "Skyline GT-R [R34] High Octane Edition",
      name: "Skyline GT-R [R34] High Octane Edition",
      brand: {
        name: "Nissan",
        logo: "assets/icons/nissan.webp",
      },
      year: 2002,
      category: "Street Tire 2",
      description: "4x4 • 782CV • 361km/h • 2.83s",
      image: "assets/cars/GT-R34.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [45, 55],
              dualValues: true,
              min: 30,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [60, 40],
              dualValues: true,
              min: 50,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -4,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -4,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 11,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },

    // HuracanLP
    {
      id: "Huracan LP610-4",
      name: "Huracan LP610-4",
      brand: {
        name: "Lamborghini",
        logo: "assets/icons/lamborghini.webp",
      },
      year: 2014,
      category: "Street Tire 2",
      description: "4x4 • 730CV • 362km/h • 2.23s",
      image: "assets/cars/HuracanLP.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [47, 53],
              dualValues: true,
              min: 30,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [55, 45],
              dualValues: true,
              min: 50,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: -0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -1,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: 12,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 20,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -1,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Taycan Turbo S
    {
      id: "Taycan Turbo S",
      name: "Taycan Turbo S",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.webp",
      },
      year: 2021,
      category: "Street Tire 2",
      description: "4x4 • 1178CV • 340km/h • 2.43s",
      image: "assets/cars/TTs.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [46, 54],
              dualValues: true,
              min: 30,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [80, 20],
              dualValues: true,
              min: 50,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Hoonigan
    {
      id: "AUDI Scotto's coupé quattro",
      name: "AUDI Scotto's coupé quattro",
      brand: {
        name: "Hoonigan",
        logo: "assets/icons/hoonigan.webp",
      },
      year: 1990,
      category: "Street Tire 2",
      description: "4x4 • 901CV • 360km/h • 2.83s",
      image: "assets/cars/audi-scotto.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [50, 50],
              min: 20,
              dualValues: true,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [40, 60],
              min: 0,
              dualValues: true,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },

    // === STREET TIRE 1 === //

    //Porsche carrera RS
    {
      id: "Porsche 991 Carrera RS",
      name: "Porsche 911 Carrera RS 2.7",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.webp",
      },
      year: 1972,
      category: "Street Tire 1",
      description: "FRD • 492CV • 290km/h • 4.33s",
      image: "assets/cars/Porsche RS 2.7.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [50, 50],
              min: 20,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 13,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // RS2 Avant
    {
      id: "RS 2 Avant",
      name: "RS 2 Avant",
      brand: {
        name: "Audi",
        logo: "assets/icons/audi.webp",
      },
      year: 1993,
      category: "Street Tire 1",
      description: "4x4 • 656CV • 290km/h • 3.53s",
      image: "assets/cars/RS2A.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [50, 50],
              dualValues: true,
              min: 20,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [65, 35],
              min: 20,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // Land Rover Defender110
    {
      id: "Defender 110 V8",
      name: "Defender 110 V8",
      brand: {
        name: "Land Rover",
        logo: "assets/icons/landrover.webp",
      },
      year: 2022,
      category: "Street Tire 1",
      description: "4x4 • 1308CV • 290km/h • 3.63s",
      image: "assets/cars/D110V8.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [45, 55],
              dualValues: true,
              min: 20,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [60, 40],
              min: 20,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 8,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 8,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.2,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // RS3 Sportback
    {
      id: "RS 3 Sportback",
      name: "RS 3 Sportback",
      brand: {
        name: "Audi",
        logo: "assets/icons/audi.webp",
      },
      year: 2022,
      category: "Street Tire 1",
      description: "4x4 • 635CV • 290km/h • 3.80s",
      image: "assets/cars/RS3S.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [40, 60],
              dualValues: true,
              min: 20,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [67, 33],
              min: 20,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -4,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 11,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Lancia Stradable
    {
      id: "Stratos HF Stradable",
      name: "Stratos HF Stradable",
      brand: {
        name: "Lancia",
        logo: "assets/icons/lancia.webp",
      },
      year: 1975,
      category: "Street Tire 1",
      description: "MCTT • 504CV • 290km/h • 3.97s",
      image: "assets/cars/SHF.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [40, 60],
              min: 20,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -1,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.15,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //mustang boss
    {
      id: "Mustang BOSS 429 Lime Edition",
      name: "Mustang BOSS 429 Lime Edition",
      brand: {
        name: "Ford",
        logo: "assets/icons/ford.webp",
      },
      year: 1969,
      category: "Street Tire 1",
      description: "FRD • 864CV • 300km/h • 3.87s",
      image: "assets/cars/BOSS.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [53, 47],
              min: 20,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -4,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.2,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //BMW M3
    {
      id: "M3 Sport Evolution",
      name: "M3 Sport Evolution",
      brand: {
        name: "BMW",
        logo: "assets/icons/bmw.webp",
      },
      year: 1990,
      category: "Street Tire 1",
      description: "FRD • 655CV • 290km/h • 3.77s",
      image: "assets/cars/M3sport.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [55, 45],
              min: 20,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Ford Focus
    {
      id: "Focus RS",
      name: "Focus RS",
      brand: {
        name: "Ford",
        logo: "assets/icons/ford.webp",
      },
      year: 2016,
      category: "Street Tire 1",
      description: "4x4 • 725CV • 290km/h • 3.20s",
      image: "assets/cars/focus.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [50, 50],
              dualValues: true,
              min: 30,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [70, 30],
              min: 20,
              dualValues: true,
              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 8,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -4,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -1,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },

    // === MOTOCROSS === //

    //Yamaha
    {
      id: "Yamaha YZ450F",
      name: "Yamaha YZ450F",
      brand: {
        name: "Yamaha",
        logo: "assets/icons/yamaha.webp",
      },
      year: 2018,
      category: "Motocross",
      description: "-- • 85CV • 230km/h • 4.07s",
      image: "assets/cars/yz4504.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [40, 60],
              min: 0,
              dualValues: true,
              max: 40,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 2,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
      },
    },

    // === RALLY === //

    //Porsche
    {
      id: "911 GT3 RS RD Limited Edition",
      name: "911 GT3 RS RD Limited Edition",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.webp",
      },
      year: 2016,
      category: "Rally",
      description: "MCTT • 633CV • 310km/h • 2.90s",
      image: "assets/cars/911RD.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [40, 60],
              dualValues: true,
              min: 50,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: -10,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: 0.05,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.05,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // Ford PUMA
    {
      id: "PUMA Hybrid Rally1",
      name: "PUMA Hybrid Rally1",
      brand: {
        name: "Ford",
        logo: "assets/icons/ford.webp",
      },
      year: 2022,
      category: "Rally",
      description: "4x4 • 650CV • 280km/h • 2.40s",
      image: "assets/cars/fpuma.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [45, 55],
              min: 20,
              dualValues: true,
              max: 55,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [60, 40],
              min: 20,
              dualValues: true,
              max: 50,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: 3,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: 5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 15,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 17,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.10,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.10,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Lotus Exige S
    {
      id: "EXIGE S",
      name: "EXIGE S",
      brand: {
        name: "Lotus",
        logo: "assets/icons/lotus.webp",
      },
      year: 2013,
      category: "Rally",
      description: "MCTT • 521CV • 280km/h • 3.57s",
      image: "assets/cars/exiges.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [40, 60],
              min: 20,
              dualValues: true,
              max: 55,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [45, 55],
              min: 20,
              dualValues: true,
              max: 50,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: 5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: 2,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 17,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 17,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.10,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.10,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // Ford Focus RS RX
    {
      id: "Focus RS RX",
      name: "Focus RS RX",
      brand: {
        name: "Ford",
        logo: "assets/icons/ford.webp",
      },
      year: 2016,
      category: "Rally",
      description: "4x4 • 672CV • 261km/h • 2.00s",
      image: "assets/cars/RSRX.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [30, 70],
              dualValues: true,
              min: 30,
              max: 70,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [60, 40],
              dualValues: true,
              min: 50,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: -10,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -8,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -12,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.1,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.1,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //PEUGEOT
    {
      id: "205 T16 EV02",
      name: "205 T16 EV02",
      brand: {
        name: "Peugeot",
        logo: "assets/icons/peugeot.webp",
      },
      year: 2016,
      category: "Rally",
      description: "4x4 • 469CV • 285km/h • 2.17s",
      image: "assets/cars/EV02-P.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [47, 53],
              dualValues: true,
              min: 30,
              max: 70,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [60, 40],
              dualValues: true,
              min: 50,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 3,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -8,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.1,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.1,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // Lancia 037
    {
      id: "Rally 037",
      name: "Rally 037",
      brand: {
        name: "Lancia",
        logo: "assets/icons/lancia.webp",
      },
      year: 1982,
      category: "Rally",
      description: "MCTT • 549CV • 280km/h • 2.23s",
      image: "assets/cars/L037.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [40, 60],
              dualValues: true,
              min: 50,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: -10,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.05,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.05,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },

    // === RALLY RAID === //

    //Porsche
    {
      id: "Porsche 959 RAID",
      name: "Porsche 959 RAID",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.webp",
      },
      year: 1985,
      category: "Rally Raid",
      description: "4x4 • 495CV • 240km/h • 4.23s",
      image: "assets/cars/Porsche-959.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [45, 55],
              min: 20,
              dualValues: true,
              max: 55,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [50, 50],
              min: 20,
              dualValues: true,
              max: 50,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 2,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 4,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: 0.05,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.05,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    // Ariel Nomad
    {
      id: "NOMAD",
      name: "NOMAD",
      brand: {
        name: "Ariel",
        logo: "assets/icons/ariel.webp",
      },
      year: 2015,
      category: "Rally Raid",
      description: "MCTT • 306CV • 240km/h • 3.13s",
      image: "assets/cars/anomad.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [60, 40],
              min: 20,
              dualValues: true,
              max: 50,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: 5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: 3,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 16,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 18,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.10,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.10,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Toyota Tacoma
    {
      id: "Toyota Tacoma",
      name: "Toyota Tacoma",
      brand: {
        name: "Toyota",
        logo: "assets/icons/toyota.webp",
      },
      year: 2021,
      category: "Rally Raid",
      description: "4x4 • 806CV • 251km/h • 3.97s",
      image: "assets/cars/tacoma.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [45, 55],
              min: 30,
              dualValues: true,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [60, 40],
              min: 0,
              dualValues: true,
              max: 70,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -8,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 2,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 4,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: 0.05,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.1,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //BMW Z4
    {
      id: "Z4 sDrive35is",
      name: "Z4 sDrive35is",
      brand: {
        name: "BMW",
        logo: "assets/icons/bmw.webp",
      },
      year: 2011,
      category: "Rally Raid",
      description: "4x4 • 696CV • 240km/h • 3.03s",
      image: "assets/cars/BMWZ4RD.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [49, 51],
              min: 30,
              dualValues: true,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [60, 40],
              min: 0,
              dualValues: true,
              max: 70,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: -10,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -8,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -6,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 1,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 4,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.05,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.1,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },

    // === MONSTER === //

    //Chevreolet Silverado
    {
      id: "Chevrolet Silverado 1500",
      name: "Chevrolet Silverado 1500",
      brand: {
        name: "Chevrolet",
        logo: "assets/icons/chevrolet.webp",
      },
      year: 2010,
      category: "Monster",
      description: "4x4 • 2321CV • 220km/h • 2.97s",
      image: "assets/cars/M-Silverado.webp",
      tuning: {
        Transmisión: {
          title: "Transmisión",
          settings: {
            Relacionfinal: {
              label: "Relacion final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [50, 50],
              dualValues: true,
              min: 40,
              max: 100,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        Neumáticos: {
          title: "Neumáticos",
          settings: {
            AgarreDelantero: {
              label: "Agarre Delantero",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            AgarreTrasero: {
              label: "Agarre Trasero",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Frenos: {
          title: "Frenos",
          settings: {
            Equilibrio: {
              label: "Equilibrio de frenos",
              value: [60, 40],
              dualValues: true,
              min: 20,
              max: 100,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            Potencia: {
              label: "Potencia de los frenos",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinamica",
          settings: {
            delantera: {
              label: "Carga delantera",
              value: -30,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            trasera: {
              label: "Carga trasera",
              value: -30,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Suspensión: {
          title: "Suspensión",
          settings: {
            delantera: {
              label: "Suspensión delantera",
              value: -15,
              min: -20,
              max: 10,
              leftLabel: "Suave ",
              rightLabel: "Rígido",
            },
            trasera: {
              label: "Suspensión trasera",
              value: -10,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Redigo",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 1,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 3,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras estabilizadoras",
          settings: {
            Barradelantera: {
              label: "Barra estabilizadora delantera",
              value: -3,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            Barratrasera: {
              label: "Barra estabilizadora trasera",
              value: -6,
              min: -20,
              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            delantera: {
              label: "Angulo de caída delantera",
              value: 0.0,
              isAlignment: true,
              min: -0.25,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            trasera: {
              label: "Angulo de caída trasera",
              value: -0.05,
              isAlignment: true,
              min: -0.25,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },

    // === RACING === //

    //Gordon t.50s
    {
      id: "T.50s",
      name: "T.50s",
      brand: {
        name: "Gordon Murray Automative",
        logo: "assets/icons/GMA.webp",
      },
      year: 2024,
      category: "Racing",
      description: "MCTT • 739CV • 400km/h • 2.40s",
      image: "assets/cars/GMT50.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [40, 60],
              dualValues: true,
              min: 50,

              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 6,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 4,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Aston Martin Vulcan
    {
      id: "Vulcan The Duke",
      name: "Vulcan The Duke",
      brand: {
        name: "Aston Martin",
        logo: "assets/icons/astonmartin.webp",
      },
      year: 2016,
      category: "Racing",
      description: "FRD • 1008CV • 400km/h • 2.77s",
      image: "assets/cars/vulcanTD.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [45, 55],
              dualValues: true,
              min: 50,

              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -11,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -13,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 13,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 9,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Chevrolet Camaro SS
    {
      id: "Camaro SS",
      name: "Camaro SS",
      brand: {
        name: "Chevrolet",
        logo: "assets/icons/chevrolet.webp",
      },
      year: 2010,
      category: "Racing",
      description: "FRD • 873CV • 400km/h • 3.97s",
      image: "assets/cars/camaross.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [60, 40],
              dualValues: true,
              min: 50,

              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -12,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 13,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Bentley Continental Supersports
    {
      id: "Continental Supersports",
      name: "Continental Supersports",
      brand: {
        name: "Bentley",
        logo: "assets/icons/bentley.webp",
      },
      year: 2010,
      category: "Racing",
      description: "MCTT • 867CV • 400km/h • 2.83s",
      image: "assets/cars/css.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [45, 55],
              dualValues: true,
              min: 50,

              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 8,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -11,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -14,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 11,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 12,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 7,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Ferrari FXX K
    {
      id: "FXX K",
      name: "FXX K",
      brand: {
        name: "Ferrari",
        logo: "assets/icons/ferrari.webp",
      },
      year: 2014,
      category: "Racing",
      description: "MCTT • 1091CV • 401km/h • 2.43s",
      image: "assets/cars/FXXK.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [40, 60],
              dualValues: true,
              min: 50,

              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Ferrari F40LM
    {
      id: "Ferrari F40LM",
      name: "Ferrari F40LM",
      brand: {
        name: "Ferrari",
        logo: "assets/icons/ferrari.webp",
      },
      year: 1989,
      category: "Racing",
      description: "MCTT • 811CV • 401km/h • 3.10s",
      image: "assets/cars/FF40LM.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [40, 60],
              dualValues: true,
              min: 50,

              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: 0,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 0,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: 0,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: 0,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 0,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 0,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 0,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: 0,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },
    //Lambo Gallardo
    {
      id: "Gallardo LP 570-4 Super Trofeo",
      name: "Gallardo LP 570-4 Super Trofeo",
      brand: {
        name: "Lamborghini",
        logo: "assets/icons/lamborghini.webp",
      },
      year: 2013,
      category: "Racing",
      description: "4x4 • 963CV • 402km/h • 2.13s",
      image: "assets/cars/LP570.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [45, 55],
              min: 30,
              dualValues: true,
              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [50, 50],
              dualValues: true,
              min: 50,

              max: 60,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: -1,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: 2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.2,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },

    // === DRIFT === //

    //Fors Hoonigan
    {
      id: "Ford Hoonicorn Mustang",
      name: "Ford Hoonicorn Mustang",
      brand: {
        name: "Hoonigan",
        logo: "assets/icons/hoonigan.webp",
      },
      year: 1965,
      category: "Drift",
      description: "4x4 • 1500CV • 329km/h • 2.50s",
      image: "assets/cars/Ford-Hoonigan.webp",
      tuning: {
        transmission: {
          title: "Transmisión",
          settings: {
            finalRatio: {
              label: "Relación final",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "Corto",
              rightLabel: "Largo",
            },
            potencia: {
              label: "Distribución de potencia",
              value: [50, 50],
              dualValues: true,
              min: 30,

              max: 80,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
          },
        },
        tires: {
          title: "Neumáticos",
          settings: {
            frontGrip: {
              label: "Agarre delantero",
              value: -5,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rearGrip: {
              label: "Agarre trasero",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        brakes: {
          title: "Frenos",
          settings: {
            equilibrio: {
              label: "Equilibrio de frenos",
              value: [45, 55],
              dualValues: true,
              min: 0,

              max: 100,
              leftLabel: "Delantero",
              rightLabel: "Trasero",
            },
            potencia: {
              label: "Potencia de frenos",
              value: 0,
              min: -20,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        Aerodinamica: {
          title: "Aerodinámica",
          settings: {
            front: {
              label: "Carga delantera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Carga trasera",
              value: 0,
              min: -30,
              max: 0,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
        suspension: {
          title: "Suspensión",
          settings: {
            frontSuspension: {
              label: "Suspensión delantera",
              value: -1,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearSuspension: {
              label: "Suspensión trasera",
              value: 3,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontCompression: {
              label: "Compresión de amortiguador delantero",
              value: -10,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            rearCompression: {
              label: "Compresión de amortiguador trasero",
              value: -7,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rígido",
            },
            frontbump: {
              label: "Rebote delantero",
              value: 5,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            rearbump: {
              label: "Rebote trasero",
              value: 8,
              min: -20,

              max: 20,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Barras: {
          title: "Barras Estabilizadoras",
          settings: {
            front: {
              label: "Barra estabiizadora delantera",
              value: -2,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
            Rear: {
              label: "Barra estabiizadora Trasera",
              value: -5,
              min: -20,

              max: 10,
              leftLabel: "Suave",
              rightLabel: "Rigido",
            },
          },
        },
        Alineamiento: {
          title: "Alineamiento",
          settings: {
            front: {
              label: "Ángulo de caida delantero",
              value: -0.2,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
            rear: {
              label: "Ángulo de caida trasero",
              value: -0.25,
              min: -0.25,
              isAlignment: true,
              max: 0.25,
              leftLabel: "",
              rightLabel: "",
            },
          },
        },
      },
    },

  //  === ALPHA GP === //

  //RB14
  {
    id: "RB14",
    name: "RB14",
    brand: {
      name: "Red Bull",
      logo: "assets/icons/redbull.webp",
    },
    year: 2018,
    category: "Alpha GP",
    description: "MCTT • 1038CV • 390km/h • 2.27s",
    image: "assets/cars/rb14.webp",
    tuning: {
      transmission: {
        title: "Transmisión",
        settings: {
          finalRatio: {
            label: "Relación final",
            value: 0,
            min: -20,
            max: 0,
            leftLabel: "Corto",
            rightLabel: "Largo",
          },
        },
      },
      tires: {
        title: "Neumáticos",
        settings: {
          frontGrip: {
            label: "Agarre delantero",
            value: 0,
            min: -20,
            max: 0,
            leftLabel: "",
            rightLabel: "",
          },
          rearGrip: {
            label: "Agarre trasero",
            value: 0,
            min: -20,
            max: 0,
            leftLabel: "",
            rightLabel: "",
          },
        },
      },
      brakes: {
        title: "Frenos",
        settings: {
          equilibrio: {
            label: "Equilibrio de frenos",
            value: [40, 60],
            dualValues: true,
            min: 0,

            max: 100,
            leftLabel: "Delantero",
            rightLabel: "Trasero",
          },
          potencia: {
            label: "Potencia de frenos",
            value: 0,
            min: -20,
            max: 0,
            leftLabel: "",
            rightLabel: "",
          },
        },
      },
      Aerodinamica: {
        title: "Aerodinámica",
        settings: {
          front: {
            label: "Carga delantera",
            value: 0,
            min: -30,
            max: 0,
            leftLabel: "",
            rightLabel: "",
          },
          rear: {
            label: "Carga trasera",
            value: 0,
            min: -30,
            max: 0,
            leftLabel: "",
            rightLabel: "",
          },
        },
      },
      suspension: {
        title: "Suspensión",
        settings: {
          frontSuspension: {
            label: "Suspensión delantera",
            value: -3,
            min: -20,

            max: 10,
            leftLabel: "Suave",
            rightLabel: "Rígido",
          },
          rearSuspension: {
            label: "Suspensión trasera",
            value: -1,
            min: -20,

            max: 10,
            leftLabel: "Suave",
            rightLabel: "Rígido",
          },
          frontCompression: {
            label: "Compresión de amortiguador delantero",
            value: -7,
            min: -20,

            max: 20,
            leftLabel: "Suave",
            rightLabel: "Rígido",
          },
          rearCompression: {
            label: "Compresión de amortiguador trasero",
            value: -10,
            min: -20,

            max: 20,
            leftLabel: "Suave",
            rightLabel: "Rígido",
          },
          frontbump: {
            label: "Rebote delantero",
            value: 10,
            min: -20,

            max: 20,
            leftLabel: "Suave",
            rightLabel: "Rigido",
          },
          rearbump: {
            label: "Rebote trasero",
            value: 8,
            min: -20,

            max: 20,
            leftLabel: "Suave",
            rightLabel: "Rigido",
          },
        },
      },
      Barras: {
        title: "Barras Estabilizadoras",
        settings: {
          front: {
            label: "Barra estabiizadora delantera",
            value: -2,
            min: -20,

            max: 10,
            leftLabel: "Suave",
            rightLabel: "Rigido",
          },
          Rear: {
            label: "Barra estabiizadora Trasera",
            value: -5,
            min: -20,

            max: 10,
            leftLabel: "Suave",
            rightLabel: "Rigido",
          },
        },
      },
      Alineamiento: {
        title: "Alineamiento",
        settings: {
          front: {
            label: "Ángulo de caida delantero",
            value: -0.25,
            min: -0.25,
            isAlignment: true,
            max: 0.25,
            leftLabel: "",
            rightLabel: "",
          },
          rear: {
            label: "Ángulo de caida trasero",
            value: -0.25,
            min: -0.25,
            isAlignment: true,
            max: 0.25,
            leftLabel: "",
            rightLabel: "",
          },
        },
      },
    },
  },

    // Añade más autos aquí siguiendo la misma estructura (archivo json)
  ],
};
