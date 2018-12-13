document.addEventListener("DOMContentLoaded", () => {
  console.log("let's learn vanilla JavasScript");


  /*
  // creating an html element
  var el = document.createElement("div");
  el.innerHTML = "<p>Hellow World</p>";
  console.log( el );

  document.body.append(el);

  var textnode = document.createTextNode('Hello World2!');
  el.appendChild(textnode);
  console.log(el);
  document.body.appendChild(el);

  //  Accessing DOM Elements
  document.getElementById('someid');

  */

  const divs = document.getElementsByClassName("div");
  console.log(divs.item(0));
});