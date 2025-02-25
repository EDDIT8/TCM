document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('carForm');
    const addCustomSettingButton = document.getElementById('addCustomSetting');
    const tuningSettings = document.getElementById('tuningSettings');
    const jsonOutput = document.getElementById('jsonOutput');

    const predefinedSettings = {
        "Transmisión": ["Relación final", "Distribución de potencia"],
        "Neumáticos": ["Agarre delantero", "Agarre trasero"],
        "Frenos": ["Equilibrio de frenos", "Potencia de frenada"],
        "Aerodinámica": ["Carga delantera", "Carga trasera"],
        "Suspensión": ["Suspensión delantera", "Suspensión trasera", "Compresión delantera", "Compresión trasera", "Rebote delantero", "Rebote trasero"],
        "Barras estabilizadoras": ["Barra estabilizadora delantera", "Barra estabilizadora trasera"],
        "Alineamiento": ["Ángulo de caída delantero", "Ángulo de caída trasero"]
    };

    function createSettingField(groupName, settingName, isOptional = false) {
        const settingDiv = document.createElement('div');
        settingDiv.className = 'tuning-setting';
        settingDiv.innerHTML = `
            <label>${settingName}${isOptional ? ' (opcional)' : ''}:</label>
            <input type="number" class="settingValue" data-group="${groupName}" data-setting="${settingName}" ${isOptional ? '' : 'required'}>
            <label>Mínimo:</label>
            <input type="number" class="settingMin" data-group="${groupName}" data-setting="${settingName}" required>
            <label>Máximo:</label>
            <input type="number" class="settingMax" data-group="${groupName}" data-setting="${settingName}" required>
            <label>
                <input type="checkbox" class="settingHighlighted" data-group="${groupName}" data-setting="${settingName}"> Destacado
            </label>
        `;
        return settingDiv;
    }

    // Crear grupos de ajustes predefinidos
    for (const [groupName, settings] of Object.entries(predefinedSettings)) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'tuning-group';
        groupDiv.innerHTML = `<h3>${groupName}</h3>`;
        
        settings.forEach(settingName => {
            const isOptional = (groupName === "Transmisión" && settingName === "Distribución de potencia");
            groupDiv.appendChild(createSettingField(groupName, settingName, isOptional));
        });
        
        tuningSettings.appendChild(groupDiv);
    }

    // Agregar ajuste personalizado
    addCustomSettingButton.addEventListener('click', () => {
        const groupName = prompt("Ingrese el nombre del grupo de ajuste:");
        if (groupName) {
            const settingName = prompt("Ingrese el nombre del ajuste:");
            if (settingName) {
                let groupDiv = document.querySelector(`.tuning-group h3:contains('${groupName}')`);
                if (groupDiv) {
                    groupDiv = groupDiv.closest('.tuning-group');
                } else {
                    groupDiv = document.createElement('div');
                    groupDiv.className = 'tuning-group';
                    groupDiv.innerHTML = `<h3>${groupName}</h3>`;
                    tuningSettings.appendChild(groupDiv);
                }
                groupDiv.appendChild(createSettingField(groupName, settingName));
            }
        }
    });

    // Manejar el envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const carData = {
            id: document.getElementById('id').value,
            name: document.getElementById('name').value,
            brand: {
                name: document.getElementById('brandName').value,
                logo: document.getElementById('brandLogo').value
            },
            year: parseInt(document.getElementById('year').value),
            category: document.getElementById('category').value,
            description: document.getElementById('description').value,
            image: document.getElementById('image').value,
            tuning: {}
        };

        // Recopilar datos de ajustes
        document.querySelectorAll('.tuning-setting').forEach(setting => {
            const groupName = setting.querySelector('.settingValue').dataset.group;
            const settingName = setting.querySelector('.settingValue').dataset.setting;
            const value = setting.querySelector('.settingValue').value;
            
            if (value || !setting.querySelector('.settingValue').hasAttribute('required')) {
                if (!carData.tuning[groupName]) {
                    carData.tuning[groupName] = {
                        title: groupName,
                        settings: {}
                    };
                }
                carData.tuning[groupName].settings[settingName] = {
                    label: settingName,
                    value: parseInt(value) || 0,
                    min: parseInt(setting.querySelector('.settingMin').value),
                    max: parseInt(setting.querySelector('.settingMax').value),
                    highlighted: setting.querySelector('.settingHighlighted').checked
                };
            }
        });

        jsonOutput.textContent = JSON.stringify(carData, null, 2);
    });
});