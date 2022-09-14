const getName = (name) => {
    name = prompt("Whats your name?");
    if (name != "") {
        return name
    } else {
        alert("Log a valid name");
        getName();
    }
}

let buyer = getName();

const purchase = (selection) => {
    alert(`selected 1 ${products[selection - 1].name} whith a price of ${products[selection - 1].price}\n`);
    subTotal += (products[selection - 1].price);
    myPurchase.push(products[selection - 1].name);
    selectProducts();
}

let myPurchase = []

const products = [
    { name: "T-Shirt", price: 15 },
    { name: "Sweater", price: 30 },
    { name: "Jacket", price: 90 },
    { name: "Shorts", price: 20 },
    { name: "Jeans", price: 60 },
    { name: "Sandals", price: 40 },
    { name: "Shoes", price: 80 },
    { name: "Boots", price: 150 }
]

let subTotal = 0;
let tax = 1.21;
let total = 0;

const selectProducts = () => {
    let selection = Number(prompt(`Select your product \n1. ${products[0].name} - price: ${products[0].price} \n2. ${products[1].name} - price: ${products[1].price} \n3. ${products[2].name} - price: ${products[2].price} \n4. ${products[3].name} - price: ${products[3].price} \n5. ${products[4].name} - price: ${products[4].price} \n6. ${products[5].name} - price: ${products[5].price} \n7. ${products[6].name} - price: ${products[6].price} \n8. ${products[7].name} - price: ${products[7].price} \n9. Stop shoping`));
    if (selection > 0 && selection < products.length) {
        purchase(selection);
    } else if (selection == 9) {
        alert(`Purchase ended`);
    } else {
        alert(`Select a valid option`);
        selectProducts();
    }
}

function totalized() {
    total = (subTotal * tax);
}

selectProducts();
totalized();
total = total.toFixed(2);
alert(`Hola ${buyer} you bought ${myPurchase.length} items, which are these:\n ${myPurchase.join(`\n`)} \n whith a subtotal of ${subTotal} and a total of ${total}. \n Thank you for your purchase, we hope to see you soon again!`);