# Logical Operators and Control Flow

* [Comparison Operators](#Comparison-Operators)
* [Control Flow](#Control-Flow)
* [Userful Operators](#User-Operators)

## Comparison Operators
* `==` equal
* `>`
* `<`
* `and`
* `or`
* `True == 1`

## Control Flow
``` python
# if
if 3 > 5:
  print("IT'S TRUE")
elif 3 > 4
  print("It's true")
else:
  print("What is false")

# for
mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for num in mylist:
  print(num)

for _ in 'Hello World':
  print('Cool!')

# while
x = 0
while x < 5:
  print(f'The current value of x is {x}')
  x = x + 1
else:
  print('Done')
```

* `break`: breaks out of the current closest enclosing loop
  * exits the loop
* `continue`: goes to the top of the closest enclosing loop
  * goes to the top of the next loop
* `pass`: Does nothing at all
  * does not do anything in the loop, useful for testing a function or temporarily ignoring a function that has not been built


## Useful Operators
* `range(start,stop,step)`: a range of numbers
  * start: number to start
  * stop: number to stop at (exclusded)
  * step: the number of steps
* `list(range(0, 11, 2))`: generates the list
* `enumerate(word)`: get the index and element in tuples
  * can be used with any iterable object
* `zip(list1, list2, list3)`: match elements at each index of the list
  * extra elements are ignored
* `'x' in [1, 2, 3]` to check if something is in the list
  * works with strings, numbers, dictionary keys
* `min`, `max` to get the smallest or largest of a list
* `from random import shuffle`: shuffles a list
* `from random import randomint`: chooses a random integer
* `input('enter a number')` to get user input
  * takes entered value as a string
* `int(result)` to convert to integer

## List Comprehension
``` python
mystring = 'hello'
mylist = [letter for letter in mystring]

> mylist
['h', 'e', 'l', 'l', 'o']

mylist = [num**2 for num in range(0, 4)]

> mylist
[0, 1, 4, 9]

mylist = [x**2 for x in range(0, 11) if x % 2 == 0 ]

> mylist
[0, 4, 16, 36, 64, 100]

```

