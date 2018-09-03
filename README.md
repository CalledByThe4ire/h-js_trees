### filter.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход предикат и дерево, а возвращает отфильтрованное дерево по предикату.

```
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx', [
      mkdir('conf.d'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);
const actual = filter(n => n.type === 'directory', tree);
```