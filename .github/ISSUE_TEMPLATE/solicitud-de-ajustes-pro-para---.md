---
name: Solicitud de Ajustes Pro para...
about: 'Formulario de solicitud de ajustes pro para algun auto en especifico que no
  se encuentre dentro de la pagina '
title: ''
labels: enhancement
assignees: EDDIT8

---

name: 🚗 Solicitud de configuración
description: Pide una configuración de ajuste para un vehículo que no está en la lista
title: "[Solicitud] Ajuste para: "
labels: ["Solicitud"]
assignees: ["EDDIT8"]
body:
  - type: markdown
    attributes:
      value: "## 🚗 Información del vehículo\nPor favor, llena los datos del coche para que podamos agregarlo."
  
  - type: input
    id: marca
    attributes:
      label: "Marca"
      description: "Ejemplo: Toyota"
      placeholder: "Ejemplo: Nissan"
    validations:
      required: true

  - type: input
    id: modelo
    attributes:
      label: "Modelo"
      description: "Ejemplo: Supra"
      placeholder: "Ejemplo: Skyline GT-R"
    validations:
      required: true

  - type: input
    id: ano
    attributes:
      label: "Año"
      description: "Ejemplo: 1998"
      placeholder: "Ejemplo: 2002"
    validations:
      required: true

  - type: textarea
    id: detalles
    attributes:
      label: "Detalles adicionales"
      description: "Agrega más detalles si lo crees necesario (ejemplo: Siento que el auto se desliza mucho al salir de una carva, Patina mucho al arrancar, no gira, etc.)"
      placeholder: "Ejemplo: Me gustaria solicitar unos ajustes para [nombre-del-auto], de la categoria [nombre-de-la-categoria] de la marca [marca] el cual no gira lo suficiente y derrapa al salir de curva..."

  - type: markdown
    attributes:
      value: "Gracias por tu solicitud. 🚀"
