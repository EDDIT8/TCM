#!/bin/bash

# Minificar archivos JavaScript
uglifyjs C:/Users/eddi_/TCM/js/main.js -o C:/Users/eddi_/TCM/js/main.min.js
uglifyjs C:/Users/eddi_/TCM/js/data.js -o C:/Users/eddi_/TCM/js/data.min.js
uglifyjs C:/Users/eddi_/TCM/js/car-details.js -o C:/Users/eddi_/TCM/js/car-details.min.js

echo "Archivos minificados correctamente."