const carsData = {
    cars: [
        //Agera R
        {
            id: "koenigsegg-agera-r",
            name: "Agera R",
            brand: {
                name: "Koenigsegg",
                logo: "assets/icons/koenigsegg.ico"
            },
            year: 2012,
            category: "Hypercar",
            description: "Un hipercoche sueco con prestaciones extraordinarias.",
            image: "assets/cars/koenigsegg.png",
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
                            rightLabel: "Largo"
                        }
                    }
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
                            rightLabel: ""
                        },
                        rearGrip: {
                            label: "Agarre trasero",
                            value: 0,
                            min: -20,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                },
                brakes: {
                    title: "Frenos",
                    settings: {
                        equilibrio: {
                            label: "Equilibrio de frenos",
                            value: 60,
                            min: 20,
                            max: 80,
                            leftLabel: "Delantero",
                            rightLabel: "Trasero"
                        },
                        potencia: {
                            label: "Potencia de frenos",
                            value: 0,
                            min: -20,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
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
                            rightLabel: ""
                        },
                        rear: {
                            label: "Carga trasera",
                            value: 0,
                            min: -30,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                },
                suspension: {
                    title: "Suspensión",
                    settings: {
                        frontSuspension: {
                            label: "Suspensión delantera",
                            value: -3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        rearSuspension: {
                            label: "Suspensión trasera",
                            value: -3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontCompression: {
                            label: "Compresión de amortiguador delantero",
                            value: -10,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rígido",
                        },
                        rearCompression: {
                            label: "Compresión de amortiguador trasero",
                            value: -15,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontbump: {
                            label: "Rebote delantero",
                            value: +6,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        },
                        rearbump: {
                            label: "Rebote trasero",
                            value: +1,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        }
                    }
                },
                Barras: {
                    title: "Barras Estabilizadoras",
                    settings: {
                        front: {
                            label: "Barra estabiizadora delantera",
                            value: +3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        },
                        Rear: {
                            label: "Barra estabiizadora Trasera",
                            value: -3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        }
                    }
                },
                Alineamiento: {
                    title: "Alineamiento",
                    settings: {
                        front: {
                            label: "Ángulo de caida delantero",
                            value: -0.25,
                            min: -0.25,
                            max: +0.25,
                            leftLabel: "",
                            rightLabel: ""
                        },
                        rear: {
                            label: "Ángulo de caida trasero",
                            value: -0.25,
                            min: -0.25,
                            max: +0.25,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                }
            }
        },
        //Porsche 911 GT#
        {
            id: "Porsche GT3 RS 991.1",
            name: "Porsche 911.2",
            brand: {
                name: "Porsche",
                logo: "assets/icons/Porsche.ico"
            },
            year: 2013,
            category: "Street Tire 2",
            description: "Excelente auto para estabilidad con la mejor velocidad maxima y el mejor rendimiento en curvas",
            image: "assets/cars/porsche-911-gt3.png",
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
                            rightLabel: "Largo"
                        }
                    }
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
                            rightLabel: ""
                        },
                        rearGrip: {
                            label: "Agarre trasero",
                            value: 0,
                            min: -20,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                },
                brakes: {
                    title: "Frenos",
                    settings: {
                        equilibrio: {
                            label: "Equilibrio de frenos",
                            value: 60,
                            min: 20,
                            max: 80,
                            leftLabel: "Delantero",
                            rightLabel: "Trasero"
                        },
                        potencia: {
                            label: "Potencia de frenos",
                            value: 0,
                            min: -20,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
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
                            rightLabel: ""
                        },
                        rear: {
                            label: "Carga trasera",
                            value: 0,
                            min: -30,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                },
                suspension: {
                    title: "Suspensión",
                    settings: {
                        frontSuspension: {
                            label: "Suspensión delantera",
                            value: -3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        rearSuspension: {
                            label: "Suspensión trasera",
                            value: -3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontCompression: {
                            label: "Compresión de amortiguador delantero",
                            value: -10,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rígido",
                        },
                        rearCompression: {
                            label: "Compresión de amortiguador trasero",
                            value: -15,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontbump: {
                            label: "Rebote delantero",
                            value: +6,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        },
                        rearbump: {
                            label: "Rebote trasero",
                            value: +1,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        }
                    }
                },
                Barras: {
                    title: "Barras Estabilizadoras",
                    settings: {
                        front: {
                            label: "Barra estabiizadora delantera",
                            value: +3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        },
                        Rear: {
                            label: "Barra estabiizadora Trasera",
                            value: -3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        }
                    }
                },
                Alineamiento: {
                    title: "Alineamiento",
                    settings: {
                        front: {
                            label: "Ángulo de caida delantero",
                            value: -0.25,
                            min: -0.25,
                            max: +0.25,
                            leftLabel: "",
                            rightLabel: ""
                        },
                        rear: {
                            label: "Ángulo de caida trasero",
                            value: -0.25,
                            min: -0.25,
                            max: +0.25,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                }
            }
        },
        {
            id: "Porsche 991 Carrera RS",
            name: "Porsche 911 Carrera RS 2.7",
            brand: {
                name: "Porsche",
                logo: "assets/icons/Porsche.ico"
            },
            year: 1972,
            category: "Street Tire 1",
            description: "FRD • 492CV • 290km/h • 4.33s", 
            image: "assets/cars/porshce-carrera-rs2.7.png",
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
                            rightLabel: "Largo"
                        }
                    }
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
                            rightLabel: ""
                        },
                        rearGrip: {
                            label: "Agarre trasero",
                            value: 0,
                            min: -20,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                },
                brakes: {
                    title: "Frenos",
                    settings: {
                        equilibrio: {
                            label: "Equilibrio de frenos",
                            value: 50,
                            min: 20,
                            max: 80,
                            leftLabel: "Delantero",
                            rightLabel: "Trasero"
                        },
                        potencia: {
                            label: "Potencia de frenos",
                            value: 0,
                            min: -20,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
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
                            rightLabel: ""
                        },
                        rear: {
                            label: "Carga trasera",
                            value: 0,
                            min: -30,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                },
                suspension: {
                    title: "Suspensión",
                    settings: {
                        frontSuspension: {
                            label: "Suspensión delantera",
                            value: +5,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        rearSuspension: {
                            label: "Suspensión trasera",
                            value: +2,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontCompression: {
                            label: "Compresión de amortiguador delantero",
                            value: -7,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rígido",
                        },
                        rearCompression: {
                            label: "Compresión de amortiguador trasero",
                            value: -5,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontbump: {
                            label: "Rebote delantero",
                            value: +8,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        },
                        rearbump: {
                            label: "Rebote trasero",
                            value: +11,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        }
                    }
                },
                Barras: {
                    title: "Barras Estabilizadoras",
                    settings: {
                        front: {
                            label: "Barra estabiizadora delantera",
                            value: +5,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        },
                        Rear: {
                            label: "Barra estabiizadora Trasera",
                            value: -2,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        }
                    }
                },
                Alineamiento: {
                    title: "Alineamiento",
                    settings: {
                        front: {
                            label: "Ángulo de caida delantero",
                            value: -0.22,
                            min: -0.25,
                            max: +0.25,
                            leftLabel: "",
                            rightLabel: ""
                        },
                        rear: {
                            label: "Ángulo de caida trasero",
                            value: -0.15,
                            min: -0.25,
                            max: +0.25,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                }
            }
        },
        {
            id: "Porsche 991 Carrera 4S",
            name: "Porsche 911 Carrera 4S Timeless Edition",
            brand: {
                name: "Porsche",
                logo: "assets/icons/Porsche.ico"
            },
            year: 2020,
            category: "Street Tire 2",
            description: "4x4 • 722CV • 361km/h • 2.33s", 
            image: "assets/cars/porshce-4s.png",
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
                            rightLabel: "Largo"
                        },
                        potencia: {
                            label: "Distribución de potencia",
                            value: 48,
                            min: 20,
                            max: 80,
                            leftLabel: "Delantero",
                            rightLabel: "Trasero"
                        }
                    }
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
                            rightLabel: ""
                        },
                        rearGrip: {
                            label: "Agarre trasero",
                            value: 0,
                            min: -20,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                },
                brakes: {
                    title: "Frenos",
                    settings: {
                        equilibrio: {
                            label: "Equilibrio de frenos",
                            value: 65,
                            min: 20,
                            max: 80,
                            leftLabel: "Delantero",
                            rightLabel: "Trasero"
                        },
                        potencia: {
                            label: "Potencia de frenos",
                            value: 0,
                            min: -20,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
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
                            rightLabel: ""
                        },
                        rear: {
                            label: "Carga trasera",
                            value: 0,
                            min: -30,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                },
                suspension: {
                    title: "Suspensión",
                    settings: {
                        frontSuspension: {
                            label: "Suspensión delantera",
                            value: +3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        rearSuspension: {
                            label: "Suspensión trasera",
                            value: +6,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontCompression: {
                            label: "Compresión de amortiguador delantero",
                            value: -5,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rígido",
                        },
                        rearCompression: {
                            label: "Compresión de amortiguador trasero",
                            value: -8,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontbump: {
                            label: "Rebote delantero",
                            value: +10,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        },
                        rearbump: {
                            label: "Rebote trasero",
                            value: +8,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        }
                    }
                },
                Barras: {
                    title: "Barras Estabilizadoras",
                    settings: {
                        front: {
                            label: "Barra estabiizadora delantera",
                            value: -3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        },
                        Rear: {
                            label: "Barra estabiizadora Trasera",
                            value: -3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        }
                    }
                },
                Alineamiento: {
                    title: "Alineamiento",
                    settings: {
                        front: {
                            label: "Ángulo de caida delantero",
                            value: -0.25,
                            min: -0.25,
                            max: +0.25,
                            leftLabel: "",
                            rightLabel: ""
                        },
                        rear: {
                            label: "Ángulo de caida trasero",
                            value: -0.25,
                            min: -0.25,
                            max: +0.25,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                }
            }
        },
        //Bugatti Centodieci
        {
            id: "Bugatti Centodieci",
            name: "Bugatti Centodieci",
            brand: {
                name: "Bugatti",
                logo: "assets/icons/bugatti.ico"
            },
            year: 2019,
            category: "Hypercar",
            description: "4x4 • 1939CV • 453km/h • 1.73s",
            image: "assets/cars/centodieci.png",
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
                            rightLabel: "Largo"
                        },
                        potencia: {
                            label: "Distribución de potencia",
                            value: 45,
                            min: 20,
                            max: 80,
                            leftLabel: "Delantero",
                            rightLabel: "Trasero"
                        }
                    }
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
                            rightLabel: ""
                        },
                        rearGrip: {
                            label: "Agarre trasero",
                            value: 0,
                            min: -20,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                },
                brakes: {
                    title: "Frenos",
                    settings: {
                        equilibrio: {
                            label: "Equilibrio de frenos",
                            value: 69,
                            min: 20,
                            max: 80,
                            leftLabel: "Delantero",
                            rightLabel: "Trasero"
                        },
                        potencia: {
                            label: "Potencia de frenos",
                            value: 0,
                            min: -20,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
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
                            rightLabel: ""
                        },
                        rear: {
                            label: "Carga trasera",
                            value: 0,
                            min: -30,
                            max: 0,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                },
                suspension: {
                    title: "Suspensión",
                    settings: {
                        frontSuspension: {
                            label: "Suspensión delantera",
                            value: +6,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        rearSuspension: {
                            label: "Suspensión trasera",
                            value: +3,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontCompression: {
                            label: "Compresión de amortiguador delantero",
                            value: -5,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rígido",
                        },
                        rearCompression: {
                            label: "Compresión de amortiguador trasero",
                            value: -8,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontbump: {
                            label: "Rebote delantero",
                            value: +7,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        },
                        rearbump: {
                            label: "Rebote trasero",
                            value: +5,
                            min: -20,
                            max: +20,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        }
                    }
                },
                Barras: {
                    title: "Barras Estabilizadoras",
                    settings: {
                        front: {
                            label: "Barra estabiizadora delantera",
                            value: +7,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        },
                        Rear: {
                            label: "Barra estabiizadora Trasera",
                            value: +2,
                            min: -20,
                            max: +10,
                            leftLabel: "Suave",
                            rightLabel: "Rigido"
                        }
                    }
                },
                Alineamiento: {
                    title: "Alineamiento",
                    settings: {
                        front: {
                            label: "Ángulo de caida delantero",
                            value: -0.25,
                            min: -0.25,
                            max: +0.25,
                            leftLabel: "",
                            rightLabel: ""
                        },
                        rear: {
                            label: "Ángulo de caida trasero",
                            value: -0.25,
                            min: -0.25,
                            max: +0.25,
                            leftLabel: "",
                            rightLabel: ""
                        }
                    }
                }
            }
        },
        // Añade más autos aquí siguiendo la misma estructura
    ]
};
