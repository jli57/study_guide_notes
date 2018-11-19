# Python overview

* [Numbers](#Numbers)
* [Variable Assignments](#Variable-Assignments)
* [Strings](#Strings)
* [Lists](#lists)
* [Dictionaries](#Dictionaries)
* [Tuples](#Tuples)
* [Sets](#Sets)
* [Booleans](#Booleans)
* [File I/O](#File-I/O)

## Key Data Structures
| Name | Type | Description |
| ---- | ---- | ----------- |
| Integers | int | Whole numbers |
| Floating point | float | Numbers with decimal point |
| Strings | str | Ordered sequence of characters |
| Lists | list | ordered sequence of objects: [10, "hello", 2000.3] |
| Dictionaries | dict | unordered key:value pairs: {"myKey": "value" } |
| Tuples | tup | Ordered immutable sequence of objects: (10, "hello", 200.3) |
| Sets | set | Unordered collection of unique objects ("a", "b") |
| Booleans | bool | Logical value indicating **True** or **False** |

## Numbers

2 Type of Numbers:
* Integers: whole numbers
* Floating Point: numbers witha  decimal

Basic Mathemtical Operations
* `+`, `-`, `*`, `/`
* `%` Modulus
* `**` Exponent
* use `(` and `)`

Python 3 performs true divion by default

Example Mathematic operations
```python
> 1 + 2
3
> 7 % 4
3
> 2 ** 3
8
> 3 / 2
1.5
```

## Variable Assignments
* Names cannot start with a number
* There can be no spaces in the name, use `_`
* Cannot use symbols: `:"',<>/?|\()!@#$%^&*~-+`
* Name should be lower case
* Avoid special key words such as `list` or `str`

* Python uses **Dynamic Typing**, variables can be reassigned to different data types

```python
my_dog = 2
my_dog = ["Sammy", 2]
```

* `type()` can be used to check the data type of a variable

## Strings
* Strings are sequences of characters using syntax of either *single quotes* or *double quotes*
* strings are **ordered sequences**
* **indexing** and **slicing** works with strings
* Strings are **immutable**, cannot reassign value by indexing into a string

### Indexing
* index notation using `[]` after the string allows you to grab subsections of the
* indexing in python starts from 0
* reverse indexing is available in python (last character from -1)

``` python
mystring = "Hello World"

> mystring[0]
'H'

> mystring[-2] #the same as mystring[9]
'l'
```

### Slicing
* grab subsection with the following syntax
  * `[start:stop:step]`
* start: the index indicating where to start slicing (included)
* stop: the index indicating where to stop slicing (excluded)
* step: how many letters to skip

``` python
mystring = "abcdefghijk"

> mystring[2]
'c'

> mystring[2:]
'cdefghijk'

> mystring[:3]
'abc'

> mystring[3:6]
'def'

> mystring[::2]
'acegik'

> mystring[::-1] # reverses
'kjihgfedcba'
```

* escape sequences
  * use `\` to indicate special characters
  * `\n` to print new line
  * `\t` to print tab

* `len(string)` to find the length of the string

string addition and multiplication
``` python
> string1 = 'a'
> string2 = 'b'
> string + string2
"ab"

> 'z' * 3
'zzz'

> 'n'.upper()
'N'

> 'Hello World'.split()
['Hello', 'World']

> x = 'a-b-c'
> x.split('-')
['a', 'b', 'c']

> print("hello")
"hello"
```


### String Interpolation
* `.format()`

``` python
> print('This is a string {}'.format('INSERTED'))
This is a string INSERTED

> print('The {2} {1} {0}'.format('fox', 'brown', 'quick'))
The quick brown fox

> print('The {q} {b} {f}'.format(f='fox', b='brown', q='quick'))
The quick brown fox

> result = 100/777
> print("Theresult was {r:1.3f}".format(r=result))
The result was 0.129

```
* Float formatting `{value:width.precisionf}`
  * width: the overall width (white space int he front)

* `f-strings`
``` python
> name = 'Jose'
> age = 3
> print(f'Hello, {name} is {age} years old')
Hello, Jose is 3 years old
```

## Lists
* a list is defined by square brackets `[]`
* elements in a list can be any data type
* a list can be indexed/sliced
* elements in a list are mutable

``` python
> new_list = ['a', 'b']
> new_list.append('c')
> new_list
['a', 'b', 'c']

> new_list.pop()
'c'
> new_list
['a', 'b']
> new_list.pop(0)
'a'

> new_list = ['a', 'e', 'x', 'b', 'c']
> num_list = [4, 1, 8, 3]
> new_list.sort() # occurs in place, does not return a new list
['a', 'b', 'c' , 'e' , 'x']

```

`None` is a special data type in Python to indicate the absence of a value

## Dictionaries
* Unordered mappings for storing objects
* Cannot be sorted
* key-value pairs allow users to quickly grab objects
* Dictionaries are indicated with curly braces `{}`
* Colon for key-value pairs
* keys should always be a string
* Index into dictionary using keys

``` python

d = { 'k1': 100, 'k2': 200, 'k3': 300}
> d.keys()
['k1', 'k2', 'k3']
> d.values()
[100, 200, 300]
> d.items()
[('k1', 100), ('k2', 200), ('k3', 300)]
```

## Tuples
* indicated by parenthesis `()`
* immutable
* similar to lists
* elements can have different data types
* indexing and slicing

``` python
t = ('a', 'a', 'b')

> t.count('a')
2

> t.index('a')
0
```

## Sets
* unordered collections of unique elements
* initialize set with `set()`
* indicated by `{}`
* add to set by `.add(val)`
* can cast a list into a set
  * `set(mylist)`

## Booleans
* Can either be **True** or **False**
* Should be capitalized
* `type(False)` is `bool`

## File I/O
``` python
myfile = open('myfile.txt')

# return file as a single string
myfile.read()

# will not return anything if called again because the cursor for reading the file is now at the end of the file
myfile.read()
''

# reset cursor to beginning of the file
myfile.seek(0)

# to grab a list of all lines in file
myfile.readlines()

# Provide fulle file path if the file is not in the current directory
myfile = open("Users/Subfolder/file.txt")

# file should be closed
myfile.close()

# place file in a block, file doesn't need to be closed
with open('myfile.txt) as my_new_file:
  contents = my_new_file.read()
```

* File modes
  * `r`: read only
  * `w`: write only
  * `a`: append only
  * `r+`: read and write
  * `w+`: writing and reading (overwrites existing files or creates a new file)

``` python
# adding to a file
with open('my_new_file.txt', mode='a') as f:
  f.write('\nA new line')

# writing a file
with open('text.txt', mode='w') as f:
  f.write('create a new file')
```