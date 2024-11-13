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