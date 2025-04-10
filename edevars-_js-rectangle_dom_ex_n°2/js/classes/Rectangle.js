class Rectangle {
    #length; // Propriété privée pour la longueur
    #width;  // Propriété privée pour la largeur

    constructor(length = 1, width = 1) {
        // Constructeur : initialise longueur et largeur, assure longueur >= largeur
        console.log("Constructeur appelé avec longueur =", length, "et largeur =", width);

        if (length < width) {
            console.log("Longueur < largeur, échange des valeurs.");
            [length, width] = [width, length]; // Échange les valeurs
            console.log("Valeurs échangées : longueur =", length, "et largeur =", width);
        }

        this.#length = length;
        this.#width = width;

        console.log("Longueur définie sur", this.#length, "et largeur sur", this.#width);
    }

    perimeter() {
        // Calcule et retourne le périmètre
        const perimeter = 2 * (this.#length + this.#width);
        console.log("Calcul du périmètre :", perimeter);
        return perimeter;
    }

    area() {
        // Calcule et retourne l'aire
        const area = this.#length * this.#width;
        console.log("Calcul de l'aire :", area);
        return area;
    }

    isSquare() {
        // Vérifie si le rectangle est un carré
        const isSquare = this.#length === this.#width;
        console.log("Vérification si carré :", isSquare);
        return isSquare;
    }

    get length() {
        // Accesseur pour la longueur
        console.log("Accesseur longueur appelé. Retourne", this.#length);
        return this.#length;
    }

    get width() {
        // Accesseur pour la largeur
        console.log("Accesseur largeur appelé. Retourne", this.#width);
        return this.#width;
    }

    set length(length) {
        // Mutateur pour la longueur
        console.log("Mutateur longueur appelé avec", length);
        if (length < this.#width) {
            console.error("Erreur : longueur doit être >= largeur.");
            throw new Error("Longueur doit être >= largeur.");
        }
        this.#length = length;
        console.log("Longueur définie sur", this.#length);
    }

    set width(width) {
        // Mutateur pour la largeur
        console.log("Mutateur largeur appelé avec", width);
        if (width > this.#length) {
            console.error("Erreur : largeur doit être <= longueur.");
            throw new Error("Largeur doit être <= longueur.");
        }
        this.#width = width;
        console.log("Largeur définie sur", this.#width);
    }
}