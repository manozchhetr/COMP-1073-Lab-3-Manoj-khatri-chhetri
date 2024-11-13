//Toy Car Constructor & Display Details

function ToyCar(brand, model, color, sku, upc, carBrand, scale, vehicleType, decade, packaging, price, features, dimensions) {
    this.brand = brand; // String
    this.model = model; // String
    this.color = color; // String
    this.sku = sku; // String
    this.upc = upc; // String
    this.carBrand = carBrand; // String
    this.scale = scale; // String
    this.vehicleType = vehicleType; // String
    this.decade = decade; // String
    this.packaging = packaging; // String
    this.price = price; // Number
    this.features = features; // Array
    this.dimensions = dimensions; // Object containing length, width, height

    // Method to display car details
    this.displayDetails = function() {
        return `
            <p><strong>Brand:</strong> ${this.brand}</p>
            <p><strong>Model:</strong> ${this.model}</p>
            <p><strong>Color:</strong> <span id="color-display">${this.color}</span></p>
            <p><strong>SKU:</strong> ${this.sku}</p>
            <p><strong>UPC:</strong> ${this.upc}</p>
            <p><strong>Car Brand:</strong> ${this.carBrand}</p>
            <p><strong>Scale:</strong> ${this.scale}</p>
            <p><strong>Vehicle Type:</strong> ${this.vehicleType}</p>
            <p><strong>Decade:</strong> ${this.decade}</p>
            <p><strong>Packaging:</strong> ${this.packaging}</p>
            <p><strong>Price:</strong> $<span id="price-display">${this.price}</span></p>
            <h2>Features</h2>
            <ul id="feature-list">
                ${this.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <h2>Dimensions</h2>
            <p><strong>Length:</strong> ${this.dimensions.length} inches</p>
            <p><strong>Width:</strong> ${this.dimensions.width} inches</p>
            <p><strong>Height:</strong> ${this.dimensions.height} inches</p>
        `;
    };
}
//  Methods for Updating Price, Color, and Features

// Method to update price
ToyCar.prototype.updatePrice = function(newPrice) {
    this.price = newPrice;
    document.querySelector('#price-display').textContent = `$${this.price}`;
};

// Method to update color
ToyCar.prototype.updateColor = function(newColor) {
    this.color = newColor;
    document.querySelector('#color-display').textContent = this.color;
};

// Method to add new feature
ToyCar.prototype.addFeature = function(newFeature) {
    if (!this.features.includes(newFeature)) {
        this.features.push(newFeature);
        this.updateFeatureList();
    } else {
        alert('Feature already exists!');
    }
};

// Method to update feature list in the HTML
ToyCar.prototype.updateFeatureList = function() {
    const featureList = document.querySelector('#feature-list');
    featureList.innerHTML = this.features.map(feature => `<li>${feature}</li>`).join('');
};
//  DOM Manipulation & Event Listeners

document.addEventListener('DOMContentLoaded', () => {
    const jeepWrangler = new ToyCar(
        'Maisto', // brand
        'Jeep Wrangler Unlimited', // model
        'Blue', // color
        '38268BU-MAI-BLUE', // sku
        '694365732791', // upc
        'Jeep', // carBrand
        '1/24 Scale', // scale
        'SUV', // vehicleType
        'After 2000', // decade
        'Window Box', // packaging
        20.99, // price
        ['Openable Doors', 'Free Wheeling', 'Rubber Tires'], // features
        { length: 7.5, width: 3, height: 3 } // dimensions
    );
    
    const carDetails = document.querySelector('.container');
    
    // Check if details have already been added to prevent duplication
    if (!carDetails.innerHTML.includes('<h1>2015 Jeep Wrangler Unlimited</h1>')) {
        carDetails.innerHTML += jeepWrangler.displayDetails();
    }

    // Bind event listeners to modify object properties
    const priceInput = document.querySelector('#price-input');
    const colorInput = document.querySelector('#color-input');
    const featureInput = document.querySelector('#feature-input');
    
    document.querySelector('#update-price').addEventListener('click', () => {
        const newPrice = parseFloat(priceInput.value);
        if (!isNaN(newPrice)) {
            jeepWrangler.updatePrice(newPrice);
        }
    });

    document.querySelector('#update-color').addEventListener('click', () => {
        const newColor = colorInput.value.trim();
        if (newColor) {
            jeepWrangler.updateColor(newColor);
        }
    });

    document.querySelector('#add-feature').addEventListener('click', () => {
        const newFeature = featureInput.value.trim();
        if (newFeature) {
            jeepWrangler.addFeature(newFeature);
        }
    });
});
