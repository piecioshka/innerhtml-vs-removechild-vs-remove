# innerhtml-vs-removechild-vs-remove

Comparison: `innerHTML` vs `removeChild()` vs `remove()`

## Demo 🚀

<https://piecioshka.github.io/innerhtml-vs-removechild-vs-remove/>

## Test results

Code below is execute 100_000 times.

`innerHTML`:
```js
$element.innerHTML = '';
```

`removeChild()`:
```js
while ($element.firstElementChild) {
  $element.removeChild($element.firstElementChild);
}
```

`remove()`:
```js
while ($element.firstElementChild) {
  $element.firstElementChild.remove();
}
```

Results:

```
[Element exists in DOM: innerHTML] 20 ms
[Element exists in DOM: removeChild()] 49 ms
[Element exists in DOM: remove()] 31 ms
[Element does not exists in DOM: innerHTML] 11 ms
[Element does not exists in DOM: removeChild()] 1 ms
[Element does not exists in DOM: remove()] 2 ms
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2022
