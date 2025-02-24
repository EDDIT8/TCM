document.addEventListener('DOMContentLoaded', () => {
    const carGrid = document.getElementById('carGrid');
    const categoryTabs = document.getElementById('categoryTabs');
    const brandSliderTemplate = document.getElementById('brandSliderTemplate');
    const carCardTemplate = document.getElementById('carCardTemplate');

    // Obtener categorías únicas
    const categories = [...new Set(carsData.cars.map(car => car.category))];

    // Crear tabs de categorías
    categories.forEach((category, index) => {
        const button = document.createElement('button');
        button.className = `tab-button ${index === 0 ? 'active' : ''}`;
        button.textContent = category;
        button.addEventListener('click', () => filterCars(category));
        categoryTabs.appendChild(button);
    });

    function filterCars(category) {
        // Actualizar botones activos
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.toggle('active', button.textContent === category);
        });

        // Filtrar autos por categoría
        const filteredCars = carsData.cars.filter(car => car.category === category);

        // Agrupar autos por marca
        const carsByBrand = filteredCars.reduce((acc, car) => {
            if (!acc[car.brand.name]) {
                acc[car.brand.name] = [];
            }
            acc[car.brand.name].push(car);
            return acc;
        }, {});

        // Limpiar grid y mostrar autos por marca
        carGrid.innerHTML = '';
        Object.entries(carsByBrand).forEach(([brandName, cars]) => {
            const brandSlider = brandSliderTemplate.content.cloneNode(true);
            brandSlider.querySelector('.brand-name').textContent = brandName;

            const sliderContent = brandSlider.querySelector('.slider-content');
            cars.forEach(car => {
                const carCard = createCarCard(car);
                sliderContent.appendChild(carCard);
            });

            carGrid.appendChild(brandSlider);

            // Implementar funcionalidad de slider
            const slider = carGrid.lastElementChild;
            implementSlider(slider);
        });

        // Guardar la categoría actual en el almacenamiento local
        localStorage.setItem('currentCategory', category);
    }

    function createCarCard(car) {
        const clone = carCardTemplate.content.cloneNode(true);
        
        clone.querySelector('.car-image').src = car.image;
        clone.querySelector('.car-image').alt = car.name;
        clone.querySelector('.brand-logo').src = car.brand.logo;
        clone.querySelector('.brand-logo').alt = car.brand.name;
        clone.querySelector('.car-name').textContent = car.name;
        clone.querySelector('.car-details').textContent = `${car.year}`;
        clone.querySelector('.car-description').textContent = car.description;

        const card = clone.querySelector('.car-card');
        card.addEventListener('click', () => {
            window.location.href = `car-details.html?id=${encodeURIComponent(car.id)}`;
        });

        return card;
    }

    function implementSlider(sliderElement) {
        const content = sliderElement.querySelector('.slider-content');
        const prevBtn = sliderElement.querySelector('.prev');
        const nextBtn = sliderElement.querySelector('.next');

        let scrollAmount = 0;
        const step = 200; // Ajusta este valor según sea necesario

        nextBtn.addEventListener('click', () => {
            scrollAmount += step;
            if (scrollAmount > content.scrollWidth - content.clientWidth) {
                scrollAmount = content.scrollWidth - content.clientWidth;
            }
            content.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            scrollAmount -= step;
            if (scrollAmount < 0) {
                scrollAmount = 0;
            }
            content.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Verificar si hay una categoría en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromUrl = urlParams.get('category');

    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
        filterCars(categoryFromUrl);
    } else {
        const savedCategory = localStorage.getItem('currentCategory');
        if (savedCategory && categories.includes(savedCategory)) {
            filterCars(savedCategory);
        } else {
            filterCars(categories[0]); // Categoría por defecto
        }
    }

    // Manejar errores de carga de imágenes
    document.querySelectorAll('.car-image, .brand-logo').forEach(img => {
        img.onerror = function() {
            this.src = '/placeholder.svg';
        }
    });
});

// Código para la página de detalles del auto
if (document.querySelector('.details-page')) {
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        const savedCategory = localStorage.getItem('currentCategory') || '';
        backButton.href = `index.html?category=${encodeURIComponent(savedCategory)}`;
    }
}
