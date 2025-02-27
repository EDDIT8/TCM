const carsData = {
  cars: [
    //HYPERCAR
    //Agera R
    {
      id: "koenigsegg-agera-r",
      name: "Agera R",
      brand: {
        name: "Koenigsegg",
        logo: "assets/icons/koenigsegg.ico",
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
              value: [60, 40],
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
              value: -3,
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
              value: -2,
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
              value: 5,
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
              value: -0.21,
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
        logo: "assets/icons/bugatti.ico",
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
        logo: "assets/icons/Porsche.ico",
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
    //STREET TIRE 2
    //Porsche 911 GT3 RS
    {
      id: "Porsche 911 GT3 RS",
      name: "Porsche 911 GT3 RS",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.ico",
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
              value: -0.20,
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
    //911GT [993]
 {
      id: "911 GT [993]",
      name: "911 GT [993]",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.ico",
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
        logo: "assets/icons/Porsche.ico",
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
    //Taycan Turbo S
{
      id: "Taycan Turbo S",
      name: "Taycan Turbo S",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.ico",
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
        logo: "assets/icons/hoonigan.ico",
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
    //STREET TIRE 1
    //Porsche carrera RS
    {
      id: "Porsche 991 Carrera RS",
      name: "Porsche 911 Carrera RS 2.7",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.ico",
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
              value: -0.22,
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
        logo: "assets/icons/ford.ico",
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
        logo: "assets/icons/bmw.ico",
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
        logo: "assets/icons/ford.ico",
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
    // MOTOCROSS
    //Yamaha
    {
      id: "Yamaha YZ450F",
      name: "Yamaha YZ450F",
      brand: {
        name: "Yamaha",
        logo: "assets/icons/yamaha.png",
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
    //Rally
    //Porsche
    {
      id: "911 GT3 RS RD Limited Edition",
      name: "911 GT3 RS RD Limited Edition",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.ico",
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
    //RALLY RAID
    //Porsche
    {
      id: "Porsche 959 RAID",
      name: "Porsche 959 RAID",
      brand: {
        name: "Porsche",
        logo: "assets/icons/Porsche.ico",
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
    //Toyota Tacoma
    {
      id: "Toyota Tacoma",
      name: "Toyota Tacoma",
      brand: {
        name: "Toyota",
        logo: "assets/icons/toyota.ico",
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
        logo: "assets/icons/bmw.ico",
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
    //MONSTER
    //Chevreolet Silverado
    {
      id: "Chevrolet Silverado 1500",
      name: "Chevrolet Silverado 1500",
      brand: {
        name: "Chevrolet",
        logo: "assets/icons/wp2657665.webp",
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
    //Racing
    //Gordon t.50s
    {
      id: "T.50s",
      name: "T.50s",
      brand: {
        name: "Gordon Murray Automative",
        logo: "assets/icons/GMA.png",
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
    //Ferrari F40LM
    {
      id: "Ferrari F40LM",
      name: "Ferrari F40LM",
      brand: {
        name: "Ferarri",
        logo: "assets/icons/ferrari.png",
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
        logo: "assets/icons/lamborghini.png",
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
    //DRIFT
    //Fors Hoonigan
    {
      id: "Ford Hoonicorn Mustang",
      name: "Ford Hoonicorn Mustang",
      brand: {
        name: "Hoonigan",
        logo: "assets/icons/hoonigan.ico",
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
    // Añade más autos aquí siguiendo la misma estructura (archivo json)
  ],
};
