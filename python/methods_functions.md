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

### Functional Parameters
* `*args`: allow a function to take an arbitrary number of arguments
  * args is a tuple
  * args is just an arbitrary name, can use any word
* `**kwargs`: used to build key-value pairs
  * kwargs is a dictionary
  * an arbitrary number of key-value pairs can be entered as input parameters separated by commas

* `*args` and `**kwargs` can be used in combination

