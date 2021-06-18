# _Pizza Parlor_

#### _An e-commerce website to order pizza based on size and topping type_

#### By _**Godfrey Owidi**_

## Technologies Used

* _HTML5_
* _CSS_
* _Javascript_
* _Bootstrap_
* _jQuery_
* _Markdown_

## Description

_This is an application that enables the user to order pizza online by entering their name then choosing the number of toppings they want, they are then required to choose the type of the topping and the size of their pizza (small, medium or large)_

# Tests

### Describe costBasedOnSize()

```
Test: "Return a value based on the customer selection of pizza size"
Code: if (this.size === "small")
Expected output: return "4"
```

```
Test: "Alert the customer to check a size if no radio is checked"
Code: else {alert: ("Please check a size you want!")}
Expected output: "Please check a size you want!"
```
### Describe costBasedOnTopping()

```
Test: "Return a value based on the customer selection of pizza topping type"
Code: if (this.toppings === "Cheese")
Expected output: return this.pizzaPrice
```
```
Test: "Alert the customer to check a topping type if no radio is checked"
Code: else {alert: ("Please check a topping you want!")}
Expected output: "Please check a topping you want!"
```

### Describe tabulate()

```
Test: "Tabulate the total by adding together cost of pizza based on size and topping type"
Code: totalCost = tCost + sCost;
Expected output: Total Amount Due
```

## Installation Requirements

* _Computer(PC/Mac)_
* _Browser_
* _Internet Connection_
* _Github Account_

## Setup Requirements

1. Clone the project repository from [Github](https://github.com/godfreyowidi/Pizza_Parlor)

2. Identify the directory ``pizza_Parlor`` and navigate to it using the terminal command ``cd pizza_Parlor``

3. While inside the working directroy ``pizza_Parlor``, open the project on editor preferably VS code using the terminal command ``code`` .

4. Identify index.html from the list of items display on the editor.

5. Right click on the file and choose to open with browser.

6. You can now enjoy viewing and reading through the page.

## Known Bugs

_No bugs_

## License

_[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)_

## Contact Information

_[Email Contact](godfreyowiidi@gmail.com)_
