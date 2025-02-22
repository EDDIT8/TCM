const carsData = {
    cars: [
        {
            id: "koenigsegg-agera-r",
            name: "Agera R",
            brand: {
                name: "Koenigsegg",
                logo: "assets/logos/koenigsegg.svg"
            },
            year: 2012,
            category: "Racing",
            description: "Un hipercoche sueco con prestaciones extraordinarias.",
            image: "assets/cars/agera-r.jpg",
            tuning: {
                transmission: {
                    title: "Transmisión",
                    settings: {
                        finalRatio: {
                            label: "Relación final",
                            value: 0,
                            min: -100,
                            max: 100,
                            leftLabel: "Corto -20%",
                            rightLabel: "0% Largo",
                            highlighted: true
                        }
                    }
                },
                tires: {
                    title: "Neumáticos",
                    settings: {
                        frontGrip: {
                            label: "Agarre delantero",
                            value: -5,
                            min: -100,
                            max: 100,
                            leftLabel: "-5%",
                            rightLabel: ""
                        },
                        rearGrip: {
                            label: "Agarre trasero",
                            value: 0,
                            min: -100,
                            max: 100,
                            leftLabel: "0%",
                            rightLabel: ""
                        }
                    }
                },
                suspension: {
                    title: "Suspensión",
                    settings: {
                        frontSuspension: {
                            label: "Suspensión delantera",
                            value: 1,
                            min: -100,
                            max: 100,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        rearSuspension: {
                            label: "Suspensión trasera",
                            value: 5,
                            min: -100,
                            max: 100,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontCompression: {
                            label: "Compresión de amortiguador delantero",
                            value: -10,
                            min: -100,
                            max: 100,
                            leftLabel: "Suave",
                            rightLabel: "Rígido",
                            highlighted: true
                        },
                        rearCompression: {
                            label: "Compresión de amortiguador trasero",
                            value: -15,
                            min: -100,
                            max: 100,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        }
                    }
                }
            }
        },

        {
            id: "koenigsegg-agera-r",
            name: "Porsche 911.2",
            brand: {
                name: "Porsche",
                logo: "assets/logos/koenigsegg.svg"
            },
            year: 2013,
            category: "Street Tire 2",
            description: "Excelente auto para estabilidad con la mejor velocidad maxima y el mejor rendimiento en curvas",
            image: "assets/cars/agera-r.jpg",
            tuning: {
                transmission: {
                    title: "Transmisión",
                    settings: {
                        finalRatio: {
                            label: "Relación final",
                            value: 0,
                            min: -100,
                            max: 100,
                            leftLabel: "0% Corto",
                            rightLabel: " Largo",
                        }
                    }
                },
                tires: {
                    title: "Neumáticos",
                    settings: {
                        frontGrip: {
                            label: "Agarre delantero",
                            value: -5,
                            min: -100,
                            max: 100,
                            leftLabel: "-5%",
                            rightLabel: ""
                        },
                        rearGrip: {
                            label: "Agarre trasero",
                            value: 0,
                            min: -100,
                            max: 100,
                            leftLabel: "0%",
                            rightLabel: ""
                        }
                    }
                },
                suspension: {
                    title: "Suspensión",
                    settings: {
                        frontSuspension: {
                            label: "Suspensión delantera",
                            value: 1,
                            min: -100,
                            max: 100,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        rearSuspension: {
                            label: "Suspensión trasera",
                            value: 5,
                            min: -100,
                            max: 100,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontCompression: {
                            label: "Compresión de amortiguador delantero",
                            value: -10,
                            min: -100,
                            max: 100,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        rearCompression: {
                            label: "Compresión de amortiguador trasero",
                            value: -15,
                            min: -100,
                            max: 100,
                            leftLabel: "Suave",
                            rightLabel: "Rígido"
                        },
                        frontRebound : {
                            label: "Rebote de amortiguador delantero",
                            value: +10,
                            min: -100,
                            max: +100,
                            leftLabel: "Suave",
                            rightLabel: "Rígido",
                        }
                    }
                },
                Barras: {
                    title: "Barras Estabilizadoras",
                    settings: {
                        front: {
                            label: "Barra estabiizadora delantera",
                            value: "+3%",
                            min: "-20%",
                            max: "+10%",
                            leftLabel: "+3% Suave",
                            rightLabel: "Rigido"
                        },
                        Rear: {
                            label: "Barra estabiizadora Trasera",
                            value: "-3%",
                            min: "-20%",
                            max: "+10%",
                            leftLabel: "-3% Suave",
                            rightLabel: "Rigido"
                        }
                    }
                }
            }
        },
        // Añade más autos aquí siguiendo la misma estructura
    ]
};
