// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function orderCoffee() {
    const REGULAR_SIZE = 3.76;
    const LARGE_SIZE = 5.01;
    const TOPPINGS = 1.3;
    const HST = 0.13;
    let coffee_size = document.getElementById("coffee-size").value;
    let coffee_toppings = parseInt(document.getElementById("coffee-toppings").value);
    let topping_price = coffee_toppings * TOPPINGS;
    let subtotal = 0;
    let tax = 0;
    let total = 0;
    if (coffee_size == "large") {
       
        subtotal = LARGE_SIZE + topping_price;
        tax = subtotal * HST;
        total = subtotal + tax;
    }
    else {
        subtotal = REGULAR_SIZE + topping_price;
        tax = subtotal * HST;
        total = subtotal + tax;
    }
    document.getElementById("subtotal").innerHTML = "CA$" + subtotal.toFixed(2);
    document.getElementById("tax").innerHTML = "CA$" + tax.toFixed(2);
    document.getElementById("total").innerHTML = "CA$" + total.toFixed(2);
}