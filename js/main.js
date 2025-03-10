document.addEventListener("DOMContentLoaded", () => {
  // Polyfill para View Transitions API
  if (!document.startViewTransition) {
    document.startViewTransition = (callback) => callback();
  }

  // ======== SELECCIÓN DE ELEMENTOS DEL DOM ========
  const carGrid = document.getElementById("carGrid");
  const categoryTabs = document.getElementById("categoryTabs");
  const carCardTemplate = document.getElementById("carCardTemplate");
  const brandSliderTemplate = document.getElementById("brandSliderTemplate");
  const searchInput = document.getElementById("searchInput");
  const catSlider = document.getElementById("categorySlider");
  const clearSearchButton = document.getElementById("clearSearch");
  const matchCountSpan = document.getElementById("matchCount");


  // Variables para controlar el estado de búsqueda
  let isSearchActive = false; 
  let lastActiveCategory = null; // Añadimos esta variable para rastrear la última categoría activa

  // ======== ORDEN DE LAS CATEGORÍAS ========
  const categoryOrder = [
    "Street Tire 1",
    "Street Tire 2",
    "Drift",
    "Racing",
    "Hypercar",
    "Alpha GP",
    "Motocross",
    "Rally Raid",
    "Rally",
    "Monster",
  ];

  // ======== FUNCIONES DE INICIALIZACIÓN Y ESTADO ========
  
  /**
   * Maneja la carga inicial con una secuencia optimizada para evitar conflictos con animaciones
   * Primero carga el DOM básico, luego aplica transiciones y finalmente restaura el estado
   */
  function handleInitialLoad() {
    // Obtener parámetros de URL primero (tienen prioridad sobre localStorage)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromUrl = urlParams.get("category");
    const categories = [...new Set(carsData.cars.map((car) => car.category))].sort(
      (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b),
    );

    // Primero, crea las pestañas de categorías para que estén disponibles
    createCategoryTabs(categories);
    
    // Implementa el slider de categorías
    implementCategorySlider();
    
    // Determina qué categoría mostrar inicialmente (URL > localStorage > default)
    let initialCategory;
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      initialCategory = categoryFromUrl;
    } else {
      const savedCategory = localStorage.getItem("currentCategory");
      initialCategory = savedCategory && categories.includes(savedCategory) 
        ? savedCategory 
        : categories[0];
    }
    
    // Establecer la última categoría activa
    lastActiveCategory = initialCategory;

    // Verifica si hay una búsqueda guardada
    const savedSearch = localStorage.getItem("lastSearch");
    
    // Aplicamos un pequeño retraso para mejorar la transición visual
    setTimeout(() => {
      // Muestra inicialmente los autos sin animación
      if (savedSearch && savedSearch.trim() !== "") {
        searchInput.value = savedSearch;
        isSearchActive = true;
        filterCarsBySearch(savedSearch);
      } else {
        filterCars(initialCategory);
      }
      
      // Ahora que el contenido básico está cargado, restauramos posiciones de scroll
      const savedScrollPosition = localStorage.getItem("scrollPosition");
      const savedCategoryScroll = localStorage.getItem("categoryScrollPosition");
      
      if (savedScrollPosition) {
        window.scrollTo(0, Number.parseInt(savedScrollPosition));
      }
      
      if (savedCategoryScroll) {
        document.querySelector(".category-slider .tabs").scrollLeft = Number.parseInt(savedCategoryScroll);
      }
      
      // Actualiza el estado del botón de limpiar búsqueda
      toggleClearButton();
    }, 50); // Reducimos el retraso para mejorar la percepción de velocidad
  }

  /**
   * Crea las pestañas de categorías en la interfaz
   * @param {string[]} categories - Lista de categorías disponibles
   */
  function createCategoryTabs(categories) {
    categories.forEach((category, index) => {
      const button = document.createElement("button");
      button.className = `tab-button ${category === lastActiveCategory ? "active" : ""}`;
      button.textContent = category;
      button.addEventListener("click", () => {
        // Al hacer clic en una categoría, desactivamos el modo de búsqueda
        isSearchActive = false;
        lastActiveCategory = category; // Actualizamos la última categoría activa
        searchInput.value = "";
        toggleClearButton();
        filterCars(category);
      });
      categoryTabs.appendChild(button);
    });
  }

  // Llama a la función de carga inicial
  handleInitialLoad();

  // ======== CONFIGURACIÓN DE BÚSQUEDA ========
  searchInput.addEventListener("focus", () => {
    this.removeAttribute("readonly");
  });
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    
    // Si hay texto en el campo, activamos modo búsqueda
    isSearchActive = query.length > 0;
    
    // Actualizamos lastActiveCategory con la categoría actualmente seleccionada
    if (!isSearchActive) {
      const activeCategory = document.querySelector(".tab-button.active")?.textContent;
      if (activeCategory) {
        lastActiveCategory = activeCategory;
      }
    }
    
    filterCarsBySearch(query);
    toggleClearButton();
  });

  clearSearchButton.addEventListener("click", () => {
    searchInput.value = "";
    isSearchActive = false;
    
    // Al limpiar, volvemos a la última categoría activa
    filterCars(lastActiveCategory || categoryOrder[0]);
    
    toggleClearButton();
    searchInput.blur();
    searchInput.style.border = "solid 1px #ffffff17";

  });

  function toggleClearButton() {
    clearSearchButton.style.display = searchInput.value ? "block" : "none";
    matchCountSpan.style.display = searchInput.value ? "block" : "none";
    catSlider.style.display = searchInput.value ? "none" : "flex";
    document.querySelector(".search-container").style.left = searchInput.value ? "-23px" : "0px";

    if (!searchInput.value) {
      searchInput.style.border = "solid 1px #ffffff17";
    }
  }

  function highlightText(text, searchTerms) {
    if (!searchTerms || searchTerms.length === 0) return text;
    let highlightedText = text;
    searchTerms.forEach((term) => {
      if (term.length > 0) { // Evitar términos vacíos
        // Escapar caracteres especiales de RegExp
        const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escapedTerm})`, "gi");
        highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
      }
    });
    return highlightedText;
  }

  // ======== CREACIÓN Y FILTRADO DE TARJETAS DE AUTOS ========
  
  function createCarCard(car, searchTerms = []) {
    const clone = carCardTemplate.content.cloneNode(true);

    const carImage = clone.querySelector(".car-image");
    carImage.src = car.image;
    carImage.alt = car.name;
    carImage.style.viewTransitionName = `car-image-${car.id}`;

    clone.querySelector(".brand-logo").src = car.brand.logo;
    clone.querySelector(".brand-logo").alt = car.brand.name;

    const carNameElement = clone.querySelector(".car-name");
    carNameElement.innerHTML = highlightText(car.name, searchTerms);

    const carDetailsElement = clone.querySelector(".car-details");
    const carDetails = `${car.brand.name} • ${car.year}`;
    carDetailsElement.innerHTML = highlightText(carDetails, searchTerms);

    const carDescriptionElement = clone.querySelector(".car-description");
    carDescriptionElement.innerHTML = highlightText(car.description, searchTerms);

    const card = clone.querySelector(".car-card");
    card.addEventListener("click", () => {
      // Guardamos el estado actual con menor retraso
      localStorage.setItem("viewingCarId", car.id);
      localStorage.setItem("scrollPosition", window.scrollY);
      localStorage.setItem("categoryScrollPosition", document.querySelector(".category-slider .tabs").scrollLeft);
      
      // Guardar estado de búsqueda y categoría
      if (searchInput.value.trim() !== "") {
        localStorage.setItem("lastSearch", searchInput.value);
      } else {
        localStorage.removeItem("lastSearch"); // Eliminamos la búsqueda si no hay ninguna
      }
      
      // Siempre guardamos la categoría actual, incluso en modo búsqueda
      localStorage.setItem("currentCategory", lastActiveCategory || document.querySelector(".tab-button.active")?.textContent || categoryOrder[0]);

      // Usamos un transition más rápido
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          window.location.href = `car-details.html?id=${encodeURIComponent(car.id)}`;
        });
      } else {
        window.location.href = `car-details.html?id=${encodeURIComponent(car.id)}`;
      }
    });

    return card;
  }

  function filterCarsBySearch(query) {
    if (!query) {
      // Si no hay búsqueda y estábamos en modo búsqueda, volvemos a la última categoría activa
      if (isSearchActive) {
        isSearchActive = false;
        if (lastActiveCategory) {
          filterCars(lastActiveCategory);
        } else {
          // Si no hay categoría activa, usamos la primera
          filterCars(categoryOrder[0]);
        }
      }
      searchInput.style.border = "solid 1px #ffffff17";
      return;
    }

    // Cuando hay una búsqueda activa, desactivamos todas las categorías en UI
    // pero mantenemos el lastActiveCategory internamente
    if (query.length > 0) {
      // Guardamos la categoría activa actual si no tenemos una guardada
      if (!lastActiveCategory) {
        lastActiveCategory = document.querySelector(".tab-button.active")?.textContent || categoryOrder[0];
      }
      
      // Desactivamos todas las pestañas de categorías
      document.querySelectorAll(".tab-button").forEach(button => {
        button.classList.remove("active");
      });
    }

    const searchTerms = query.split(/\s+/).filter(term => term.length > 0);

    const matchingCars = carsData.cars.filter((car) => {
      const searchableText = [
        car.name.toLowerCase(),
        car.brand.name.toLowerCase(),
        car.category.toLowerCase(),
        car.description.toLowerCase(),
        car.year.toString(),
      ].join(" ");

      return searchTerms.every((term) => searchableText.includes(term));
    });

    if (matchCountSpan) {
      matchCountSpan.textContent = matchingCars.length.toString();
      matchCountSpan.style.color = matchingCars.length > 0 ? "#00ff00" : "#ff0000";
    }

    if (matchingCars.length > 0) {
      const carsByBrand = matchingCars.reduce((acc, car) => {
        if (!acc[car.brand.name]) {
          acc[car.brand.name] = [];
        }
        acc[car.brand.name].push(car);
        return acc;
      }, {});

      carGrid.innerHTML = "";

      const sortedBrands = Object.keys(carsByBrand).sort((a, b) => a.localeCompare(b));

      sortedBrands.forEach((brandName) => {
        const cars = carsByBrand[brandName];
        if (cars.length > 0) {
          const brandSlider = brandSliderTemplate.content.cloneNode(true);
          brandSlider.querySelector(".brand-name").textContent = brandName;

          const sliderContent = brandSlider.querySelector(".slider-content");
          cars.forEach((car) => {
            const carCard = createCarCard(car, searchTerms);
            sliderContent.appendChild(carCard);
          });

          carGrid.appendChild(brandSlider);

          const slider = carGrid.lastElementChild;
          implementSlider(slider);
        }
      });

      searchInput.style.border = "solid 1px #ffffff17";
      matchCountSpan.style.border = "solid 1px #ffffff91";

    } else {
      searchInput.style.border = "solid 1px #ec0b0b";
      matchCountSpan.style.border = "solid 1px #ec0b0b";
      carGrid.innerHTML = `
        <div class="no-results">
          <p>No se encontraron autos que coincidan con "${query}"</p>
          <button class="newIssue" onclick="window.location.href='https://github.com/EDDIT8/TCM/issues/new?template=solicitud_de_ajustes.yml';" arial-label="Solicitar auto">Solicitar Ajustes <svg xmlns="http://www.w3.org/2000/svg" width="15px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          </button>
        </div>
      `;
    }
  }

  function filterCars(category) {
    // Establecemos la última categoría activa
    lastActiveCategory = category;
    
    // Actualiza los botones activos
    document.querySelectorAll(".tab-button").forEach((button) => {
      button.classList.toggle("active", button.textContent === category);
    });

    const filteredCars = carsData.cars.filter((car) => car.category === category);

    const carsByBrand = filteredCars.reduce((acc, car) => {
      if (!acc[car.brand.name]) {
        acc[car.brand.name] = [];
      }
      acc[car.brand.name].push(car);
      return acc;
    }, {});

    const sortedBrands = Object.keys(carsByBrand).sort((a, b) => a.localeCompare(b));

    carGrid.innerHTML = "";
    sortedBrands.forEach((brandName) => {
      const cars = carsByBrand[brandName];
      const brandSlider = brandSliderTemplate.content.cloneNode(true);
      brandSlider.querySelector(".brand-name").textContent = brandName;

      const sliderContent = brandSlider.querySelector(".slider-content");
      cars.forEach((car) => {
        const carCard = createCarCard(car);
        sliderContent.appendChild(carCard);
      });

      carGrid.appendChild(brandSlider);

      const slider = carGrid.lastElementChild;
      implementSlider(slider);
    });

    // Guardar la categoría actual en localStorage
    localStorage.setItem("currentCategory", category);
  }

  // ======== IMPLEMENTACIÓN DE SLIDERS ========
  
  function implementSlider(sliderElement) {
    const content = sliderElement.querySelector(".slider-content");
    const prevBtn = sliderElement.querySelector(".prev");
    const nextBtn = sliderElement.querySelector(".next");

    let scrollAmount = 0;
    const step = 200;

    function updateArrows() {
      prevBtn.style.display = content.scrollLeft > 0 ? "block" : "none";
      nextBtn.style.display = content.scrollLeft < content.scrollWidth - content.clientWidth ? "block" : "none";
    }

    nextBtn.addEventListener("click", () => {
      scrollAmount += step;
      if (scrollAmount > content.scrollWidth - content.clientWidth) {
        scrollAmount = content.scrollWidth - content.clientWidth;
      }
      content.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      updateArrows();
    });

    prevBtn.addEventListener("click", () => {
      scrollAmount -= step;
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
      content.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      updateArrows();
    });

    content.addEventListener("scroll", () => {
      scrollAmount = content.scrollLeft;
      updateArrows();
    });

    updateArrows();
  }

  function implementCategorySlider() {
    const categorySlider = document.querySelector(".category-slider");
    const tabs = categorySlider.querySelector(".tabs");
    const prevBtn = categorySlider.querySelector(".prev");
    const nextBtn = categorySlider.querySelector(".next");

    let scrollAmount = 0;
    const step = 100;

    function updateArrows() {
      prevBtn.style.display = tabs.scrollLeft > 0 ? "block" : "none";
      nextBtn.style.display = tabs.scrollLeft < tabs.scrollWidth - tabs.clientWidth ? "block" : "none";
    }

    nextBtn.addEventListener("click", () => {
      scrollAmount += step;
      if (scrollAmount > tabs.scrollWidth - tabs.clientWidth) {
        scrollAmount = tabs.scrollWidth - tabs.clientWidth;
      }
      tabs.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      updateArrows();
    });

    prevBtn.addEventListener("click", () => {
      scrollAmount -= step;
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
      tabs.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      updateArrows();
    });

    tabs.addEventListener("scroll", () => {
      scrollAmount = tabs.scrollLeft;
      updateArrows();
    });

    updateArrows();
  }

  // ======== MANEJO DE ERRORES DE CARGA DE IMÁGENES ========
  
  document.addEventListener('DOMNodeInserted', function(e) {
    if (e.target.nodeType === 1) { // ELEMENT_NODE
      const imgs = e.target.querySelectorAll('.car-image, .brand-logo');
      imgs.forEach((img) => {
        img.onerror = function() {
          this.src = "/placeholder.svg";
        };
      });
    }
  });
});