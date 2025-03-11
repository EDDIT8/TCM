#!/bin/bash

# Minificar archivos JavaScript
uglifyjs /workspaces/TCM/js/main.js -o /workspaces/TCM/js/main.min.js
uglifyjs /workspaces/TCM/js/data.js -o /workspaces/TCM/js/data.min.js
uglifyjs /workspaces/TCM/js/car-details.js -o /workspaces/TCM/js/car-details.min.js

echo "Archivos minificados correctamente."