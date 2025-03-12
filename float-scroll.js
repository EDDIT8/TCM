// ======== IMPLEMENTACIÓN DEL SCROLL INDICATOR ========
export function implementBrandScrollIndicator() {
  // Crear el indicador flotante
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'brand-scroll-indicator';
  scrollIndicator.style.cssText = `
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    color: black;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.2s ease;
    cursor: grab;
    user-select: none;
    pointer-events: auto;
  `;
  document.body.appendChild(scrollIndicator);

  // Variables para el seguimiento de marcas visibles y posición de desplazamiento
  let brandSections = [];
  let isDragging = false;
  let startY = 0;
  let scrollTimeout;
  let currentBrandName = '';

  // Función para actualizar las secciones de marcas
  function updateBrandSections() {
    brandSections = [];
    const brandHeaders = document.querySelectorAll('.brand-name');
    
    brandHeaders.forEach(header => {
      const brandContainer = header.closest('.brand-slider');
      if (brandContainer) {
        const rect = brandContainer.getBoundingClientRect();
        brandSections.push({
          name: header.textContent,
          top: window.scrollY + rect.top,
          bottom: window.scrollY + rect.bottom
        });
      }
    });
  }

  // Función para actualizar el indicador basado en la posición de scroll
  function updateScrollIndicator() {
    if (brandSections.length === 0) return;
    
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    let activeBrand = brandSections[0].name;
    
    // Encontrar la marca visible actual
    for (const section of brandSections) {
      if (scrollPosition >= section.top && scrollPosition <= section.bottom) {
        activeBrand = section.name;
        break;
      }
    }
    
    // Actualizar el indicador solo si la marca ha cambiado
    if (currentBrandName !== activeBrand) {
      currentBrandName = activeBrand;
      
      // Animación de cambio de texto
      scrollIndicator.style.transform = 'translateY(-50%) scale(0.95)';
      setTimeout(() => {
        scrollIndicator.textContent = activeBrand;
        scrollIndicator.style.transform = 'translateY(-50%) scale(1)';
      }, 100);
    }
    
    // Mostrar el indicador
    scrollIndicator.style.opacity = '1';
    
    // Ocultar después de un tiempo
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (!isDragging) {
        scrollIndicator.style.opacity = '0';
      }
    }, 2000);
  }

  // Función para calcular la posición de scroll basada en la posición del indicador
  function scrollToPositionFromIndicator(clientY) {
    if (brandSections.length === 0) return;
    
    const indicatorHeight = scrollIndicator.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollAreaHeight = windowHeight - indicatorHeight;
    
    // Calcular la posición relativa del indicador (0-1)
    const relativePosition = Math.max(0, Math.min(1, 
      (clientY - (windowHeight - scrollAreaHeight) / 2) / scrollAreaHeight
    ));
    
    // Calcular la sección correspondiente
    const sectionIndex = Math.floor(relativePosition * brandSections.length);
    const targetSection = brandSections[Math.min(sectionIndex, brandSections.length - 1)];
    
    // Desplazarse a la sección
    window.scrollTo({
      top: targetSection.top,
      behavior: 'auto'
    });
  }

  // Event listeners para arrastrar el indicador
  scrollIndicator.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    scrollIndicator.style.cursor = 'grabbing';
    scrollIndicator.style.transform = 'translateY(-50%) scale(0.95)';
    e.preventDefault();
  });

  scrollIndicator.addEventListener('touchstart', (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
    scrollIndicator.style.cursor = 'grabbing';
    scrollIndicator.style.transform = 'translateY(-50%) scale(0.95)';
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      scrollToPositionFromIndicator(e.clientY);
    }
  });

  window.addEventListener('touchmove', (e) => {
    if (isDragging) {
      scrollToPositionFromIndicator(e.touches[0].clientY);
      e.preventDefault();
    }
  }, { passive: false });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      scrollIndicator.style.cursor = 'grab';
      scrollIndicator.style.transform = 'translateY(-50%) scale(1)';
      
      // Ocultar después de soltar
      setTimeout(() => {
        if (!isDragging) {
          scrollIndicator.style.opacity = '0';
        }
      }, 2000);
    }
  });

  window.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      scrollIndicator.style.cursor = 'grab';
      scrollIndicator.style.transform = 'translateY(-50%) scale(1)';
      
      // Ocultar después de soltar
      setTimeout(() => {
        if (!isDragging) {
          scrollIndicator.style.opacity = '0';
        }
      }, 2000);
    }
  });

  // Actualizar en scroll y cuando cambia el contenido
  window.addEventListener('scroll', () => {
    updateScrollIndicator();
  });

  // Observador de mutaciones para detectar cambios en el DOM (cuando se filtran coches)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.target.id === 'carGrid') {
        // Actualizar las secciones cuando cambia el contenido
        setTimeout(() => {
          updateBrandSections();
          updateScrollIndicator();
        }, 100);
      }
    });
  });

  observer.observe(document.getElementById('carGrid'), {
    childList: true,
    subtree: true
  });

  // Mostrar el indicador al mover el ratón
  document.addEventListener('mousemove', () => {
    if (!isDragging) {
      scrollIndicator.style.opacity = '1';
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!isDragging) {
          scrollIndicator.style.opacity = '0';
        }
      }, 2000);
    }
  });

  // Inicialización
  setTimeout(() => {
    updateBrandSections();
    updateScrollIndicator();
  }, 500);
}

// Llamar a la función después de que se haya cargado el contenido inicial
setTimeout(implementBrandScrollIndicator, 1000);