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

  // Select from list (Node)
  const firstDiv = divs.item(0);

  console.log(firstDiv[0])

  // get parent HTML element
  console.log( firstDiv.parentElement );

  [].forEach.call(divs, (e) => {
    e.style.color = "green";
  });

  // get children elements (HTML Collection)
  const children = firstDiv.children;

  console.log( firstDiv.firstChild );

  // remove a child
  firstDiv.removeChild(firstDiv.firstElementChild);
});