document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const carGrid = document.getElementById("carGrid");
  const categoryTabs = document.getElementById("categoryTabs");
  const carCardTemplate = document.getElementById("carCardTemplate");
  const brandSliderTemplate = document.getElementById("brandSliderTemplate");
  const savedCategory = localStorage.getItem("currentCategory");
  const savedScrollPosition = localStorage.getItem("scrollPosition");
  const savedCategoryScroll = localStorage.getItem("categoryScrollPosition");
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    filterCarsBySearch(query);
  });

  function filterCarsBySearch(query) {
    if (!query) {
      // Si no hay búsqueda, mostrar la categoría actual
      const currentCategory =
        document.querySelector(".tab-button.active").textContent;
      filterCars(currentCategory);
      return;
    }

    const searchTerms = query.split(/\s+/);

    // Filtrar todos los autos en todas las categorías
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

    // Si hay coincidencias, agrupar por marca
    if (matchingCars.length > 0) {
      // Agrupar por marca
      const carsByBrand = matchingCars.reduce((acc, car) => {
        if (!acc[car.brand.name]) {
          acc[car.brand.name] = [];
        }
        acc[car.brand.name].push(car);
        return acc;
      }, {});

      // Limpiar el grid
      carGrid.innerHTML = "";

      // Ordenar marcas alfabéticamente
      const sortedBrands = Object.keys(carsByBrand).sort((a, b) =>
        a.localeCompare(b)
      );

      // Mostrar solo las marcas que tienen autos coincidentes
      sortedBrands.forEach((brandName) => {
        const cars = carsByBrand[brandName];
        if (cars.length > 0) {
          // Solo crear el slider si hay autos para mostrar
          const brandSlider = brandSliderTemplate.content.cloneNode(true);
          brandSlider.querySelector(".brand-name").textContent = brandName;

          const sliderContent = brandSlider.querySelector(".slider-content");
          cars.forEach((car) => {
            const carCard = createCarCard(car);
            sliderContent.appendChild(carCard);
          });

          carGrid.appendChild(brandSlider);

          // Implementar funcionalidad del slider
          const slider = carGrid.lastElementChild;
          implementSlider(slider);
        }
      });

      // Si encontramos coincidencias en una categoría diferente,
      // actualizar la pestaña activa
      if (matchingCars.length > 0) {
        const firstMatchCategory = matchingCars[0].category;
        document.querySelectorAll(".tab-button").forEach((button) => {
          button.classList.toggle(
            "active",
            button.textContent === firstMatchCategory
          );
        });
      }
    } else {
      // Si no hay coincidencias, mostrar un mensaje
      carGrid.innerHTML = `
            <div class="no-results">
                <p>No se encontraron autos que coincidan con "${query}"</p>
                <button class="newIssue" onclick="window.location.href='https://github.com/EDDIT8/TCM/issues/new?template=solicitud_de_ajustes.yml';">Solicitar Ajustes <svg xmlns="http://www.w3.org/2000/svg" width="15px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</button>
            </div>
        `;
    }
  }

  if (savedCategory) {
    filterCars(savedCategory); // Restaurar la categoría activa
  }

  setTimeout(() => {
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition)); // Restaurar la posición del scroll vertical
    }
    if (savedCategoryScroll) {
      document.querySelector(".category-slider .tabs").scrollLeft =
        parseInt(savedCategoryScroll); // Restaurar la posición del scroll horizontal
    }
  }, 200);

  // Category order
  const categoryOrder = [
    "Street Tire 1",
    "Street Tire 2",
    "Drift",
    "Racing",
    "Hypercar",
    "Motocross",
    "Rally Raid",
    "Rally",
    "Monster",
  ];

  // Get unique categories and sort them according to categoryOrder
  const categories = [
    ...new Set(carsData.cars.map((car) => car.category)),
  ].sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));

  // Create category tabs
  categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.className = `tab-button ${index === 0 ? "active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => filterCars(category));
    categoryTabs.appendChild(button);
  });

  // Implement slider for categories
  implementCategorySlider();

  // Filter cars by category
  function filterCars(category) {
    // Update active buttons
    document.querySelectorAll(".tab-button").forEach((button) => {
      button.classList.toggle("active", button.textContent === category);
    });

    // Filter cars by category
    const filteredCars = carsData.cars.filter(
      (car) => car.category === category
    );

    // Group cars by brand
    const carsByBrand = filteredCars.reduce((acc, car) => {
      if (!acc[car.brand.name]) {
        acc[car.brand.name] = [];
      }
      acc[car.brand.name].push(car);
      return acc;
    }, {});

    // Sort brands alphabetically
    const sortedBrands = Object.keys(carsByBrand).sort((a, b) =>
      a.localeCompare(b)
    );

    // Clear grid and display cars by brand
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

      // Implement slider functionality
      const slider = carGrid.lastElementChild;
      implementSlider(slider);
    });

    // Save current category in local storage
    localStorage.setItem("currentCategory", category);
  }

  function createCarCard(car) {
    const clone = carCardTemplate.content.cloneNode(true);

    const carImage = clone.querySelector(".car-image");
    carImage.src = car.image;
    carImage.alt = car.name;
    carImage.style.viewTransitionName = `car-${car.id}`;

    clone.querySelector(".brand-logo").src = car.brand.logo;
    clone.querySelector(".brand-logo").alt = car.brand.name;
    clone.querySelector(".car-name").textContent = car.name;
    clone.querySelector(
      ".car-details"
    ).textContent = `${car.brand.name} • ${car.year}`;
    clone.querySelector(".car-description").textContent = car.description;

    const card = clone.querySelector(".car-card");
    card.addEventListener("click", () => {
      localStorage.setItem("viewingCarId", car.id); // Guardar el ID del auto seleccionado
      localStorage.setItem("scrollPosition", window.scrollY); // 🔥 Guardar la posición del scroll
      localStorage.setItem(
        "categoryScrollPosition",
        document.querySelector(".category-slider .tabs").scrollLeft
      );
      localStorage.setItem(
        "currentCategory",
        document.querySelector(".tab-button.active").textContent
      ); // Guardar la categoría activa
      window.location.href = `car-details.html?id=${encodeURIComponent(
        car.id
      )}`;
    });

    return card;
  }

  // Implement slider functionality
  function implementSlider(sliderElement) {
    const content = sliderElement.querySelector(".slider-content");
    const prevBtn = sliderElement.querySelector(".prev");
    const nextBtn = sliderElement.querySelector(".next");

    let scrollAmount = 0;
    const step = 200; // Adjust this value as needed

    function updateArrows() {
      prevBtn.style.display = content.scrollLeft > 0 ? "block" : "none";
      nextBtn.style.display =
        content.scrollLeft < content.scrollWidth - content.clientWidth
          ? "block"
          : "none";
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

    content.addEventListener("scroll", updateArrows);

    // Initialize arrow visibility
    updateArrows();
  }

  // Implement category slider
  function implementCategorySlider() {
    const categorySlider = document.querySelector(".category-slider");
    const tabs = categorySlider.querySelector(".tabs");
    const prevBtn = categorySlider.querySelector(".prev");
    const nextBtn = categorySlider.querySelector(".next");

    let scrollAmount = 0;
    const step = 100; // Adjust this value as needed

    function updateArrows() {
      prevBtn.style.display = tabs.scrollLeft > 0 ? "block" : "none";
      nextBtn.style.display =
        tabs.scrollLeft < tabs.scrollWidth - tabs.clientWidth
          ? "block"
          : "none";
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

    tabs.addEventListener("scroll", updateArrows);

    // Initialize arrow visibility
    updateArrows();
  }

  // Check for category in URL or local storage
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromUrl = urlParams.get("category");

  if (categoryFromUrl && categories.includes(categoryFromUrl)) {
    filterCars(categoryFromUrl);
  } else {
    const savedCategory = localStorage.getItem("currentCategory");
    if (savedCategory && categories.includes(savedCategory)) {
      filterCars(savedCategory);
    } else {
      filterCars(categories[0]); // Default category
    }
  }

  // Handle image loading errors
  document.querySelectorAll(".car-image, .brand-logo").forEach((img) => {
    img.onerror = function () {
      this.src = "/placeholder.svg";
    };
  });
});
