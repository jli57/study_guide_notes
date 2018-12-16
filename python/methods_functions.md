# Methods and Functions

## Functions

``` python

def name_of_function(argument):
'''
DOCSTRING: information about function.
INPUT:
OUTPUT:
'''
print("Hello")

```

* `return`: keyword that allows the function to return a value


``` python
# assign default argument value
def say_hello(name='NAME'):
  print('hello ' +name)
```

### Solving Pig Latin in Python
``` python

def pig_latin(word):
  first_letter = word[0]

  # check if vowel
  if first_letter in 'aeiou':
    pig_word = word + 'ay'
  else:
    pig_word = word[1:] + first_letter + 'ay'

  return pig_word

```

## Functional Parameters
* `*args`: allow a function to take an arbitrary number of arguments
  * args is a tuple
  * args is just an arbitrary name, can use any word
* `**kwargs`: used to build key-value pairs
  * kwargs is a dictionary
  * an arbitrary number of key-value pairs can be entered as input parameters separated by commas

* `*args` and `**kwargs` can be used in combination


## Map, Filter, Lambas

### `map`
* `map(function, list)`

``` python
def square(num):
  return num**2

my_nums = [1, 2, 3, 4, 5]

for item in map(square, my_nums):
  print(item)

> list(map(square, my_nums))
[1, 4, 9, 16, 25]
```

### `filter`
* `filter(function, list)`
* function must return a boolean
* return elements that returns true in function

### `lamba`

``` python
def square(num):
  result = num ** 2
  return result

> square(3)
9

# to construct a lamba expression
def square(num): return num ** 2  # the function can be written all in one line
lambda num: num ** 2 # lambda expression, assume value on the right side of the colon is being returned

# used in a map function
> list(map(lambda num: num**2, nums))
[1, 4, 9, 16, 25]

```

## Nested Statements and Scope

### LEGB Rule:
* **Local**: names assigned in any way within a function (def or lambda), and not declared in that function
* **Enclosing function locals**: Names in the local scope of any and all enclosing functions (def or lambda), from inner to outer
  * go up to outer function (that encloses the inner function) to find variable
* **Global (module)**: Names assigned at the top-level of a module file, or declared global in a def within the file
* **Built-in (Python)**: Names preassigned in the built-in names module (such as `len`)

* variables declared inside a function or assigned within the function scope will not affect the value of the variable of the same name
* to change global variable, declare global in front of the variable name

``` python
x = 50

def func():
  global x
  x = 200 # the global variable will be changed from 50 to 200
```

