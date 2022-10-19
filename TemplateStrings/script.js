const brand = 'Tayouta';
const model = 'Camry';
const color = 'grey';
const year = '1999';

let carHtml;

// Old approach (before ES6)
carHtml = '<h3>' + 'Car Description' + '</h3>' + '<ul>' +
    '<li>Brand: ' + brand + '</li>' +
    '<li>Model: ' + model + '</li>' +
    '<li>Color: ' + color + '</li>' +
    '<li>Year: ' + year + '</li>' +
    '</ul>';

// New approasch (template litterals or template strings)
carHtml = `
<h3> Car Description </h3>
<ul>
    <li>Brand: ${brand} </li>
    <li>Model: ${model}</li>
    <li>Color: ${color}</li>
    <li>Year: ${year}</li>
    <li>Year: ${2010 + 7}</li>
    <li>Doors: ${getDoorNumber()}</li>
    <li>Tax: ${year < 2000 ? '20%': '10%'} 


</ul>
`
function getDoorNumber() {
    return 5;
}

document.body.innerHTML = carHtml;