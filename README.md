### reduce.js

Реализуйте и экспортируйте по умолчанию функцию-редьюсер обрабатывающую файловые деревья.

```
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx'),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);
reduce((acc, n) => acc + 1, tree, 0); // => 6
```