document.addEventListener('DOMContentLoaded', () => {
    const carGrid = document.getElementById('carGrid');
    const categoryTabs = document.getElementById('categoryTabs');
    const template = document.getElementById('carCardTemplate');

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

        // Filtrar y mostrar autos
        carGrid.innerHTML = '';
        const filteredCars = carsData.cars.filter(car => car.category === category);
        
        filteredCars.forEach(car => {
            const clone = template.content.cloneNode(true);
            
            clone.querySelector('.car-image').src = car.image;
            clone.querySelector('.car-image').alt = car.name;
            clone.querySelector('.brand-logo').src = car.brand.logo;
            clone.querySelector('.brand-logo').alt = car.brand.name;
            clone.querySelector('.car-name').textContent = car.name;
            clone.querySelector('.car-details').textContent = 
                `${car.brand.name} • ${car.year}`;
            clone.querySelector('.car-description').textContent = car.description;

            const card = clone.querySelector('.car-card');
            card.addEventListener('click', () => {
                window.location.href = `car-details.html?id=${encodeURIComponent(car.id)}`;
            });

            carGrid.appendChild(clone);
        });

        // Guardar la categoría actual en el almacenamiento local
        localStorage.setItem('currentCategory', category);
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
