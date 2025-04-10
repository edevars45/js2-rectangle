document.addEventListener('DOMContentLoaded', () => {
    // Récupération des éléments HTML
    const longueurInput = document.getElementById('longueur');
    const largeurInput = document.getElementById('largeur');
    const creerRectangleBtn = document.getElementById('creerRectangleBtn');
    const longueurDisplay = document.getElementById('longueurDisplay');
    const largeurDisplay = document.getElementById('largeurDisplay');
    const perimetreBtn = document.getElementById('perimetreBtn');
    const perimetreDisplay = document.getElementById('perimetreDisplay');
    const aireBtn = document.getElementById('aireBtn');
    const aireDisplay = document.getElementById('aireDisplay');
    const carreBtn = document.getElementById('carreBtn');
    const carreDisplay = document.getElementById('carreDisplay');

    let rectangle; // Variable pour stocker l'objet Rectangle

    // Gestionnaire "Créer un rectangle"
    creerRectangleBtn.addEventListener('click', () => {
        const longueur = parseFloat(longueurInput.value);
        const largeur = parseFloat(largeurInput.value);

        if (isNaN(longueur) || isNaN(largeur)) {
            alert('Valeurs numériques invalides.');
            return;
        }

        rectangle = new Rectangle(longueur, largeur);

        // Vérification si les éléments existent avant de modifier leur contenu
        if (longueurDisplay) {
            longueurDisplay.textContent = `Longueur = ${rectangle.length}`;
        }
        if (largeurDisplay) {
            largeurDisplay.textContent = `Largeur = ${rectangle.width}`;
        }
    });

    // Gestionnaire "Calculer périmètre"
    perimetreBtn.addEventListener('click', () => {
        if (!rectangle) {
            alert('Créez un rectangle d\'abord.');
            return;
        }

        const perimetre = rectangle.perimeter();
        if (perimetreDisplay) {
            perimetreDisplay.textContent = `Périmètre = ${perimetre}`;
        }
    });

    // Gestionnaire "Calculer aire"
    aireBtn.addEventListener('click', () => {
        if (!rectangle) {
            alert('Créez un rectangle d\'abord.');
            return;
        }

        const aire = rectangle.area();
        if (aireDisplay) {
            aireDisplay.textContent = `Aire = ${aire}`;
        }
    });

    // Gestionnaire "Est un carré ?"
    carreBtn.addEventListener('click', () => {
        if (!rectangle) {
            alert('Créez un rectangle d\'abord.');
            return;
        }

        const estCarre = rectangle.isSquare();
        if (carreDisplay) {
            carreDisplay.textContent = estCarre ? 'Carré' : 'Rectangle';
        }
    });
});