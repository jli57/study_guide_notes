# Prototype

[Prototype](https://javascript.info/function-prototype)



``` JavaScript
function Dog (name) {
  this.name = name;
}

Dog.prototype.woof = function() {
  console.log(this.name + " woof");
}

d.woof();
```

* `Object` is the top level class
* `prototype` is a property of a function.
  * `prototype` is an Object
  * has a `__proto__` that points to the Object prototype
* JavaScript traverses up the prototype chain
  * When a property is called on an object, first look at the object iself
  * if the object does not have the method, then it checks the object's prototype
  * if the prototype does not have it, it will look up the prototype's `__proto__` property to go up the inheritance chain
* `__proto__` points to the prototype of the Object that is on the instances of the Object.

* `Object.create(Animal.prototype)`: creates an Object where the prototype points to


## Surrogate
``` JavaScript
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

function Dog ( name, coatColor ) {
  Animal.call(this, name);
  this.coatColor = coatColor;
}
// Create surrogate to construct Dog.prototype
// Surrogate instance delegates to Animal.prototype
function Surrogate () {};
Surrogate.prototype = Animal.prototype;

// Set Dog.prototype to Surrogate instance
Dog.prototype = new Surrogate();

// Make sure instances of Dog have instance.constructor === dog
Dog.prototype.constructor = Dog;
```

## Inheritance in ES2015

* `class Dog extends Animal` is syntactic sugar for `Object.create`

``` JavaScript
class Bicycle {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  action() {
    return "rolls along";
  }
}

// extends to inherit
class RaceBicyclee extends Bicycle {
  constructor(color, model, gears) {
    super( color, model);
    this.gears = gears;
  }

  action() {
    const oldAction = super.action();
    return `${oldAction} at a blistering pace`;
  }
}
```