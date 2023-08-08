let name = document.getElementById("name");
let age = document.getElementById("age");
let phone = document.getElementById("phone");
let div = document.getElementById("div");
let button = document.getElementById("button");

let a = Math.random();
let b = a * data.results.length;
let c = Math.floor(b); 
console.log(data.results.length);
console.log(data.results);
console.log(data.results[c]);
let l = data.results[c];
 
name.innerHTML = `ID: ${l.name.title} ${l.name.first} ${l.name.last}`;
phone.innerHTML = `Phone Number: ${l.phone}`;
age.innerHTML = `DOB: ${l.dob.date}  (Age: ${l.dob.age})`


/*button.onclick = function(event){
event.preventDefault();/
}

//age.innerHTML = l.
/*button.onclick /* or chooseButton.onclick. dropdown.onchange doesn't require a button and can be much more efficient*/ /*= function (event) {

    event.preventDefault();

}
*/
