document.addEventListener("DOMContentLoaded", () => {
  // ======== INICIALIZACIÓN Y OBTENCIÓN DE DATOS ========
  const urlParams = new URLSearchParams(window.location.search);
  const carId = urlParams.get("id");

  // Validación de ID del auto
  const car = carsData.cars.find((c) => c.id === carId);
  if (!car) {
    console.error("Auto no encontrado:", carId);
    window.location.href = "index.html";
    return;
  }

  // ======== ACTUALIZACIÓN DE LA INTERFAZ ========
  
  // Actualizar metadatos y elementos principales
  document.getElementById("pageTitle").textContent = `${car.name} - The Crew Motorfest`;
  
  // Actualizar información del auto
  const brandLogo = document.getElementById("brandLogo");
  brandLogo.src = car.brand.logo;
  brandLogo.alt = car.brand.name;
  
  document.getElementById("carName").textContent = car.name;
  document.getElementById("carInfo").textContent = `${car.brand.name} • ${car.year} • ${car.category}`;
  
  // Configurar la imagen con View Transition
  const carImage = document.getElementById("carImage");
  carImage.src = car.image;
  carImage.alt = car.name;
  
  // Configurar el viewTransitionName para la animación entre páginas
  // Aseguramos que sea el mismo identificador que en index.js para la transición suave
  carImage.style.viewTransitionName = `car-image-${car.id}`;
  
  document.getElementById("carDescription").textContent = car.description;

  // ======== CREACIÓN DE CONTROLES DE AJUSTE ========
  renderTuningControls(car.tuning);
  
  // ======== CONFIGURACIÓN DEL BOTÓN VOLVER ========
  configureBackButton();
});

/**
 * Renderiza los controles de ajuste del vehículo
 * @param {Object} tuning - Objeto con los grupos de ajustes del vehículo
 */
function renderTuningControls(tuning) {
  const tuningControls = document.getElementById("tuningControls");
  const template = document.getElementById("tuningSliderTemplate");
  
  // Limpiar contenedor antes de agregar nuevos controles
  tuningControls.innerHTML = '';

  // Iterar sobre los grupos de ajustes
  Object.entries(tuning).forEach(([groupKey, group]) => {
    const groupElement = document.createElement("div");
    groupElement.className = "tuning-group";

    const title = document.createElement("h2");
    title.className = "group-title";
    title.textContent = group.title;
    groupElement.appendChild(title);

    // Crear los controles para cada configuración dentro del grupo
    Object.entries(group.settings).forEach(([settingKey, setting]) => {
      const sliderElement = createTuningSlider(template, setting);
      groupElement.appendChild(sliderElement);
    });

    tuningControls.appendChild(groupElement);
  });
}

/**
 * Crea un control deslizante para una configuración específica
 * @param {HTMLTemplateElement} template - Plantilla para el control deslizante
 * @param {Object} setting - Configuración específica del ajuste
 * @returns {DocumentFragment} Fragmento de documento con el control configurado
 */
// function createTuningSlider(template, setting) {
//   const clone = template.content.cloneNode(true);
//   const container = clone.querySelector(".slider-container");

//   // Aplicar destacado si corresponde
//   if (setting.highlighted) {
//     container.classList.add("highlighted");
//   }

//   // Configurar etiquetas y slider
//   clone.querySelector(".slider-label").textContent = setting.label;
//   const slider = clone.querySelector(".slider");
//   slider.min = setting.min;
//   slider.max = setting.max;
//   slider.value = setting.value;
//   slider.disabled = true; // Control de solo lectura

//   clone.querySelector(".left-label").textContent = setting.leftLabel;
//   clone.querySelector(".right-label").textContent = setting.rightLabel;

//   // Manejar valores duales para transmisión y equilibrio de frenos
//   if (setting.dualValues) {
//     const [frontValue, rearValue] = setting.value;
//     clone.querySelector(".slider-value-front").textContent = `${frontValue}% - `;
//     clone.querySelector(".slider-value-rear").textContent = `${rearValue}%`;
//     updateDualSliderPosition(slider, setting.min, setting.max, frontValue, rearValue);
//   } else {
//     // Configurar valor único
//     let displayValue;
//     if (setting.isAlignment && setting.value < 0) {
//       // Formatear valores de alineación con dos decimales y signo de grado
//       displayValue = `-0.${setting.value.toFixed(2)}°`;
//     } else if {
//       // Agregar signo de porcentaje para otros valores
//       displayValue = `${setting.value}%`;
//     }
//     clone.querySelector(".slider-value").textContent = displayValue;
//     updateSliderPosition(slider, setting.min, setting.max, setting.value);
//   }

//   return clone;
// }

function createTuningSlider(template, setting) {
  const clone = template.content.cloneNode(true)
  const container = clone.querySelector(".slider-container")

  // Aplicar destacado si corresponde
  if (setting.highlighted) {
    container.classList.add("highlighted")
  }

  // Configurar etiquetas y slider
  clone.querySelector(".slider-label").textContent = setting.label
  const slider = clone.querySelector(".slider")

  // Para valores de alineación, usamos enteros internamente
  if (setting.isAlignment) {
    // Convertir el valor decimal a entero (multiplicar por 100)
    const intValue = Math.round(setting.value * 100)
    const intMin = Math.round(setting.min * 100)
    const intMax = Math.round(setting.max * 100)

    // Configurar el slider con valores enteros
    slider.min = intMin
    slider.max = intMax
    slider.value = intValue

    // Formatear el valor para mostrar (con 0. o -0. según corresponda)
    let displayValue
    if (setting.value < 0) {
      // Valor negativo: -0.XX°
      displayValue = `-0.${Math.abs(intValue).toString().padStart(2, "0")}°`
    } else {
      // Valor positivo: 0.XX°
      displayValue = `0.${intValue.toString().padStart(2, "0")}°`
    }

    clone.querySelector(".slider-value").textContent = displayValue
    updateSliderPosition(slider, intMin, intMax, intValue)
  } else {
    // Para valores normales (no alineación), mantener el comportamiento original
    slider.min = setting.min
    slider.max = setting.max
    slider.value = setting.value

    // Manejar valores duales para transmisión y equilibrio de frenos
    if (setting.dualValues) {
      const [frontValue, rearValue] = setting.value
      clone.querySelector(".slider-value-front").textContent = `${frontValue}% - `
      clone.querySelector(".slider-value-rear").textContent = `${rearValue}%`
      updateDualSliderPosition(slider, setting.min, setting.max, frontValue, rearValue)
    } else {
      // Configurar valor único con porcentaje
      const displayValue = `${setting.value}%`
      clone.querySelector(".slider-value").textContent = displayValue
      updateSliderPosition(slider, setting.min, setting.max, setting.value)
    }
  }

  slider.disabled = true // Control de solo lectura
  clone.querySelector(".left-label").textContent = setting.leftLabel
  clone.querySelector(".right-label").textContent = setting.rightLabel

  return clone
}

/**
 * Configura el botón de volver manteniendo la categoría activa
 */
function configureBackButton() {
  // Obtener la categoría guardada
  const savedCategory = localStorage.getItem("currentCategory") || "";
  
  // Modificar el enlace "Volver" para mantener la categoría
  const backButton = document.querySelector(".back-button");
  backButton.href = `index.html?category=${encodeURIComponent(savedCategory)}`;
  
  // Opcionalmente, agregar soporte para View Transitions API en el botón de regreso
  backButton.addEventListener("click", (e) => {
    if (document.startViewTransition) {
      e.preventDefault();
      document.startViewTransition(() => {
        window.location.href = backButton.href;
      });
    }
  });
}

/**
 * Actualiza la posición visual del deslizador para un valor único
 * @param {HTMLInputElement} slider - Elemento deslizador
 * @param {number} min - Valor mínimo
 * @param {number} max - Valor máximo
 * @param {number} value - Valor actual
 */

function updateSliderPosition(slider, min, max, value) {
  const percentage = ((value - min) / (max - min)) * 100
  slider.style.backgroundSize = `${percentage}% 100%`;
}

function updateDualSliderPosition(slider, min, max, frontValue, rearValue) {
  const frontPercentage = ((frontValue - min) / (max - min)) * 100
  const rearPercentage = ((rearValue - min) / (max - min)) * 100

  // Use a different color or visual cue to distinguish the dual slider
  slider.style.background = `linear-gradient(to right, #f7d538 ${frontPercentage}%, #fae27f ${rearPercentage}%, #ccc ${rearPercentage}%)`
}

// function updateSliderPosition(slider, min, max, value) {
//   const range = max - min;
//   const percentage = ((value - min) / range) * 100;
//   slider.style.backgroundSize = `${percentage}% 100%`;
// }

// /**
//  * Actualiza la posición visual del deslizador para valores duales
//  * @param {HTMLInputElement} slider - Elemento deslizador
//  * @param {number} min - Valor mínimo
//  * @param {number} max - Valor máximo
//  * @param {number} frontValue - Valor frontal
//  * @param {number} rearValue - Valor trasero
//  */
// function updateDualSliderPosition(slider, min, max, frontValue, rearValue) {
//   const range = max - min;
//   const frontPercentage = ((frontValue - min) / range) * 100;
//   const rearPercentage = ((rearValue - min) / range) * 100;
//   slider.style.backgroundImage = `linear-gradient(to right, 
//     var(--primary-color) 0%, 
//     var(--primary-color) ${frontPercentage}%, 
//     #4a4a4a ${frontPercentage}%, 
//     #4a4a4a ${rearPercentage}%, 
//     var(--primary-color) ${rearPercentage}%, 
//     var(--primary-color) 100%)`;
// }