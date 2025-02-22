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
        // Añade más autos aquí siguiendo la misma estructura
    ]
};
