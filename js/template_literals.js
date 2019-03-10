const name = 'Wes';
const age = '38';
const job ='Developer';
const city ='Paarl';

let html;

//ES6 Template literal method

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>    
    </ul>

`;

document.body.innerHTML = html;