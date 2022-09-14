//Ask the name of the buyer and storre ii into "buyer"
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
    alert(`selected 1 ${products[selection - 1].name} whith a price of ${products[selection - 1].price}\n`); //Alert the product selected
    subTotal += (products[selection - 1].price);    //Add the prodect price to "subtotal"
    myPurchase.push(products[selection - 1].name);      //Push the selected product to myPurchase array.
    selectProducts();   
}
let myPurchase = []

const products = [
    { option: 1, name: "T-Shirt", price: 15 },
    { option: 2, name: "Sweater", price: 30 },
    { option: 3, name: "Jacket", price: 90 },
    { option: 4, name: "Shorts", price: 20 },
    { option: 5, name: "Jeans", price: 60 },
    { option: 6, name: "Sandals", price: 40 },
    { option: 7, name: "Shoes", price: 80 },
    { option: 8, name: "Boots", price: 150 }
]

//Iterate through products to show them in the prompt of selectProducts
let showProducts = products.map(function show(items) {
    return `\n${items.option} - ${items.name} - ${items.price}`;
});

let subTotal = 0;
let tax = 1.21;
let total = 0;

//Alert the products to start
const selectProducts = () => {
    let selection = Number(prompt(`Select your product \n${showProducts} \n9. Stop shoping`));
    if (selection > 0 && selection < products.length+1) {
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