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

            // Manejar valores duales para transmisión y equilibrio de frenos
            if (setting.dualValues) {
                const [frontValue, rearValue] = setting.value;
                clone.querySelector('.slider-value-front').textContent = `${frontValue}%`;
                clone.querySelector('.slider-value-rear').textContent = `${rearValue}%`;
                updateDualSliderPosition(slider, setting.min, setting.max, frontValue, rearValue);
            } else {
                let displayValue;
                if (setting.isAlignment) {
                    // Formatear valores de alineación con dos decimales y signo de grado
                    displayValue = `${setting.value.toFixed(2)}°`;
                } else {
                    // Agregar signo de porcentaje para otros valores
                    displayValue = `${setting.value}%`;
                }
                clone.querySelector('.slider-value').textContent = displayValue;
                updateSliderPosition(slider, setting.min, setting.max, setting.value);
            }

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

function updateSliderPosition(slider, min, max, value) {
    const range = max - min;
    const percentage = ((value - min) / range) * 100;
    slider.style.backgroundSize = `${percentage}% 100%`;
}

function updateDualSliderPosition(slider, min, max, frontValue, rearValue) {
    const range = max - min;
    const frontPercentage = ((frontValue - min) / range) * 100;
    const rearPercentage = ((rearValue - min) / range) * 100;
    slider.style.backgroundImage = `linear-gradient(to right, 
        var(--primary-color) 0%, 
        var(--primary-color) ${frontPercentage}%, 
        #4a4a4a ${frontPercentage}%, 
        #4a4a4a ${rearPercentage}%, 
        var(--primary-color) ${rearPercentage}%, 
        var(--primary-color) 100%)`;
}