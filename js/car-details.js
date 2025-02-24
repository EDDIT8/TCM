document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');
    
    const car = carsData.cars.find(c => c.id === carId);
    if (!car) {
        console.error('Car not found:', carId);
        window.location.href = 'index.html';
        return;
    }

    // Actualizar el título de la página
    document.getElementById('pageTitle').textContent = `${car.name} - The Crew Motorfest`;

    // Actualizar información básica del auto
    document.getElementById('brandLogo').src = car.brand.logo;
    document.getElementById('brandLogo').alt = car.brand.name;
    document.getElementById('carName').textContent = car.name;
    document.getElementById('carInfo').textContent = 
        `${car.brand.name} • ${car.year} • ${car.category}`;
    document.getElementById('carImage').src = car.image;
    document.getElementById('carImage').alt = car.name;
    document.getElementById('carDescription').textContent = car.description;

    const tuningControls = document.getElementById('tuningControls');
    const template = document.getElementById('tuningSliderTemplate');

    // Crear controles de ajuste
    Object.entries(car.tuning).forEach(([groupKey, group]) => {
        const groupElement = document.createElement('div');
        groupElement.className = 'tuning-group';
        
        const title = document.createElement('h2');
        title.className = 'group-title';
        title.textContent = group.title;
        groupElement.appendChild(title);

        Object.entries(group.settings).forEach(([settingKey, setting]) => {
            const clone = template.content.cloneNode(true);
            const container = clone.querySelector('.slider-container');
            
            if (setting.highlighted) {
                container.classList.add('highlighted');
            }

            clone.querySelector('.slider-label').textContent = setting.label;
            const slider = clone.querySelector('.slider');
            slider.min = setting.min;
            slider.max = setting.max;
            slider.value = setting.value;
            slider.disabled = true; // Hacer el slider de solo lectura

            clone.querySelector('.left-label').textContent = setting.leftLabel;
            clone.querySelector('.right-label').textContent = setting.rightLabel;

            // Añadir el valor actual como texto
            const valueDisplay = document.createElement('span');
            valueDisplay.className = 'slider-value';
            valueDisplay.textContent = setting.value;
            container.appendChild(valueDisplay);

             // Añadir marcador de punto medio si es necesario
            if (setting.midPoint !== undefined) {
                const midPointMarker = document.createElement('div');
                midPointMarker.className = 'mid-point-marker';
                container.appendChild(midPointMarker);
                positionMidPointMarker(midPointMarker, setting.min, setting.max, setting.midPoint);
            }

            // Actualizar la posición visual del slider
            updateSliderPosition(slider, setting.min, setting.max, setting.value, setting.midPoint);

            groupElement.appendChild(clone);
        });

        tuningControls.appendChild(groupElement);
    });
});


    // Obtener la categoría guardada
    const savedCategory = localStorage.getItem('currentCategory') || '';

    // Modificar el enlace "Volver"
    const backButton = document.querySelector('.back-button');
    backButton.href = `index.html?category=${encodeURIComponent(savedCategory)}`;


function updateSliderPosition(slider, min, max, value, midPoint) {
    const range = max - min;
    let percentage;
    
    if (midPoint !== undefined) {
        // Si hay un punto medio definido, ajustamos el cálculo
        if (value < midPoint) {
            percentage = ((value - min) / (midPoint - min)) * 50;
        } else {
            percentage = 50 + ((value - midPoint) / (max - midPoint)) * 50;
        }
    } else {
        // Si no hay punto medio, usamos el cálculo normal
        percentage = ((value - min) / range) * 100;
    }

    slider.style.backgroundSize = `${percentage}% 100%`;
}

function positionMidPointMarker(marker, min, max, midPoint) {
    const range = max - min;
    const percentage = ((midPoint - min) / range) * 100;
    marker.style.left = `calc(${percentage}% + 8px)`; // 8px es la mitad del ancho del thumb
}
