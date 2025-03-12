// Añadir este código al final del archivo main.js, justo antes del cierre del event listener DOMContentLoaded

// ======== IMPLEMENTACIÓN DEL SCROLL INDICATOR ========
export function implementBrandScrollIndicator() {
    // Eliminar cualquier indicador existente para evitar duplicados
    const existingIndicator = document.querySelector(".brand-scroll-indicator")
    if (existingIndicator) {
      existingIndicator.remove()
    }
  
    // Crear el indicador flotante
    const scrollIndicator = document.createElement("div")
    scrollIndicator.className = "brand-scroll-indicator"
    scrollIndicator.style.cssText = `
      position: fixed;
      right: 20px;
      background-color: white;
      color: black;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
      cursor: grab;
      user-select: none;
      pointer-events: auto;
    `
    document.body.appendChild(scrollIndicator)
  
    // Variables para el seguimiento de marcas visibles y posición de desplazamiento
    let brandSections = []
    let isDragging = false
    let startY = 0
    let scrollTimeout
    let currentBrandName = ""
    let isTransitioning = false
  
    // Función para actualizar las secciones de marcas
    function updateBrandSections() {
      brandSections = []
      const brandHeaders = document.querySelectorAll(".brand-name")
  
      brandHeaders.forEach((header) => {
        const brandContainer = header.closest(".brand-slider")
        if (brandContainer) {
          const rect = brandContainer.getBoundingClientRect()
          brandSections.push({
            name: header.textContent,
            top: window.scrollY + rect.top,
            bottom: window.scrollY + rect.bottom,
            element: brandContainer,
          })
        }
      })
  
      // Ordenar las secciones por posición
      brandSections.sort((a, b) => a.top - b.top)
    }
  
    // Función para actualizar el indicador basado en la posición de scroll
    function updateScrollIndicator() {
      if (brandSections.length === 0 || isDragging) return
  
      const scrollPosition = window.scrollY + window.innerHeight / 3
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      )
  
      let activeBrand = brandSections[0].name
      let activeBrandIndex = 0
  
      // Encontrar la marca visible actual y su índice
      for (let i = 0; i < brandSections.length; i++) {
        const section = brandSections[i]
        if (scrollPosition >= section.top && scrollPosition <= section.bottom) {
          activeBrand = section.name
          activeBrandIndex = i
          break
        } else if (i === brandSections.length - 1 && scrollPosition > section.bottom) {
          // Si estamos más allá de la última sección, usar la última
          activeBrand = section.name
          activeBrandIndex = i
        }
      }
  
      // Actualizar el texto del indicador si la marca ha cambiado
      if (currentBrandName !== activeBrand) {
        currentBrandName = activeBrand
  
        // Animación de cambio de texto
        isTransitioning = true
        scrollIndicator.style.transform = "translateY(-50%) scale(0.95)"
        setTimeout(() => {
          scrollIndicator.textContent = activeBrand
          scrollIndicator.style.transform = "translateY(-50%) scale(1)"
          isTransitioning = false
        }, 100)
      }
  
      // Calcular la posición vertical del indicador
      const viewportHeight = window.innerHeight
  
      // Calcular la posición relativa basada en el índice de la marca activa
      // y la posición de scroll actual
      let relativePosition
  
      // Verificar si estamos cerca del final del documento
      const isNearBottom = window.scrollY + window.innerHeight > documentHeight - 50
  
      if (isNearBottom) {
        // Si estamos cerca del final, forzar la posición al final
        relativePosition = 1
      } else if (brandSections.length === 1) {
        // Si solo hay una sección, usar la posición relativa del scroll
        relativePosition = window.scrollY / (documentHeight - viewportHeight)
      } else {
        // Calcular basado en el índice de la sección activa
        relativePosition = activeBrandIndex / (brandSections.length - 1)
  
        // Ajustar para la última sección
        if (activeBrandIndex === brandSections.length - 1) {
          // Verificar si estamos en la última sección
          const lastSection = brandSections[brandSections.length - 1]
          const sectionProgress = (scrollPosition - lastSection.top) / (lastSection.bottom - lastSection.top)
  
          // Ajustar la posición para que llegue al final cuando estamos al final de la última sección
          const lastSectionWeight = 1 / (brandSections.length - 1)
          const previousPosition = (activeBrandIndex - 1) / (brandSections.length - 1)
          relativePosition = previousPosition + lastSectionWeight * Math.min(1, sectionProgress)
        }
      }
  
      // Ajustar la posición vertical del indicador
      // Limitamos el rango para que no llegue completamente a los bordes
      const minTop = 100 // px desde la parte superior
      const maxTop = viewportHeight - 100 // px desde la parte inferior
      const availableSpace = maxTop - minTop
  
      const topPosition = minTop + availableSpace * relativePosition
  
      // Aplicar la posición con transición suave solo si no estamos arrastrando
      if (!isDragging && !isTransitioning) {
        scrollIndicator.style.transition =
          "top 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease"
        scrollIndicator.style.top = `${topPosition}px`
        scrollIndicator.style.transform = "translateY(-50%)"
      }
  
      // Mostrar el indicador
      scrollIndicator.style.opacity = "1"
  
      // Ocultar después de un tiempo
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        if (!isDragging) {
          scrollIndicator.style.opacity = "0"
        }
      }, 2000)
    }
  
    // Función para calcular la posición de scroll basada en la posición del indicador
    function scrollToPositionFromIndicator(clientY) {
      if (brandSections.length === 0) return
  
      const viewportHeight = window.innerHeight
      const minTop = 100
      const maxTop = viewportHeight - 100
      const availableSpace = maxTop - minTop
  
      // Calcular la posición relativa del indicador (0-1)
      const relativePosition = Math.max(0, Math.min(1, (clientY - minTop) / availableSpace))
  
      // Calcular la sección correspondiente
      const sectionIndex = Math.round(relativePosition * (brandSections.length - 1))
      const targetSection = brandSections[Math.min(sectionIndex, brandSections.length - 1)]
  
      // Desplazarse a la sección
      window.scrollTo({
        top: targetSection.top,
        behavior: "auto",
      })
  
      // Actualizar la posición del indicador directamente durante el arrastre
      // Desactivar transiciones durante el arrastre para evitar el efecto fantasma
      scrollIndicator.style.transition = "transform 0.2s ease, box-shadow 0.2s ease"
      scrollIndicator.style.top = `${clientY}px`
    }
  
    // Event listeners para arrastrar el indicador
    scrollIndicator.addEventListener("mousedown", (e) => {
      isDragging = true
      startY = e.clientY
  
      // Desactivar transiciones para evitar el efecto fantasma
      scrollIndicator.style.transition = "transform 0.2s ease, box-shadow 0.2s ease"
  
      scrollIndicator.style.cursor = "grabbing"
      scrollIndicator.style.transform = "translateY(-50%) scale(0.95)"
      scrollIndicator.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)"
  
      e.preventDefault()
    })
  
    scrollIndicator.addEventListener(
      "touchstart",
      (e) => {
        isDragging = true
        startY = e.touches[0].clientY
  
        // Desactivar transiciones para evitar el efecto fantasma
        scrollIndicator.style.transition = "transform 0.2s ease, box-shadow 0.2s ease"
  
        scrollIndicator.style.cursor = "grabbing"
        scrollIndicator.style.transform = "translateY(-50%) scale(0.95)"
        scrollIndicator.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)"
  
        e.preventDefault()
      },
      { passive: false },
    )
  
    window.addEventListener("mousemove", (e) => {
      if (isDragging) {
        scrollToPositionFromIndicator(e.clientY)
      }
    })
  
    window.addEventListener(
      "touchmove",
      (e) => {
        if (isDragging) {
          scrollToPositionFromIndicator(e.touches[0].clientY)
          e.preventDefault()
        }
      },
      { passive: false },
    )
  
    function handleDragEnd() {
      if (isDragging) {
        isDragging = false
  
        // Restaurar transiciones
        scrollIndicator.style.transition =
          "top 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease"
  
        scrollIndicator.style.cursor = "grab"
        scrollIndicator.style.transform = "translateY(-50%) scale(1)"
        scrollIndicator.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)"
  
        // Efecto de rebote suave al soltar
        setTimeout(() => {
          scrollIndicator.style.transform = "translateY(-50%) scale(1.05)"
          setTimeout(() => {
            scrollIndicator.style.transform = "translateY(-50%) scale(1)"
          }, 150)
        }, 0)
  
        // Actualizar la posición después de soltar
        setTimeout(() => {
          updateScrollIndicator()
        }, 50)
  
        // Ocultar después de soltar
        setTimeout(() => {
          if (!isDragging) {
            scrollIndicator.style.opacity = "0"
          }
        }, 2000)
      }
    }
  
    window.addEventListener("mouseup", handleDragEnd)
    window.addEventListener("touchend", handleDragEnd)
  
    // Actualizar en scroll y cuando cambia el contenido
    window.addEventListener("scroll", () => {
      updateScrollIndicator()
    })
  
    // Observador de mutaciones para detectar cambios en el DOM (cuando se filtran coches)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.target.id === "carGrid") {
          // Actualizar las secciones cuando cambia el contenido
          setTimeout(() => {
            updateBrandSections()
            updateScrollIndicator()
          }, 100)
        }
      })
    })
  
    const carGrid = document.getElementById("carGrid")
    if (carGrid) {
      observer.observe(carGrid, {
        childList: true,
        subtree: true,
      })
    }
  
    // Efectos de hover para el indicador
    scrollIndicator.addEventListener("mouseenter", () => {
      if (!isDragging) {
        scrollIndicator.style.transform = "translateY(-50%) scale(1.05)"
        scrollIndicator.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)"
      }
    })
  
    scrollIndicator.addEventListener("mouseleave", () => {
      if (!isDragging) {
        scrollIndicator.style.transform = "translateY(-50%) scale(1)"
        scrollIndicator.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)"
      }
    })
  
    // Mostrar el indicador al mover el ratón
    document.addEventListener("mousemove", () => {
      if (!isDragging) {
        scrollIndicator.style.opacity = "1"
  
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          if (!isDragging) {
            scrollIndicator.style.opacity = "0"
          }
        }, 2000)
      }
    })
  
    // Inicialización
    setTimeout(() => {
      updateBrandSections()
      updateScrollIndicator()
  
      // Mostrar brevemente el indicador al inicio
      scrollIndicator.style.opacity = "1"
      setTimeout(() => {
        if (!isDragging) {
          scrollIndicator.style.opacity = "0"
        }
      }, 2000)
    }, 500)
  }
  
  // Llamar a la función después de que se haya cargado el contenido inicial
  setTimeout(implementBrandScrollIndicator, 1000)
  
  