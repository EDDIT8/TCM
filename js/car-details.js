document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');
    
    const car = carsData.cars.find(c => c.id === carId);
    if (!car) {
        window.location.href = 'index.html';
        return;
    }

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

            clone.querySelector('.left-label').textContent = setting.leftLabel;
            clone.querySelector('.right-label').textContent = setting.rightLabel;

            groupElement.appendChild(clone);
        });

        tuningControls.appendChild(groupElement);
    });
});
