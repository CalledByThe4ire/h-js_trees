import { mkdir, mkfile } from 'hexlet-immutable-fs-trees'; // eslint-disable-line
import filter from '../src/filter';

test('filter 1', () => {
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

  const expected = {
    children: [
      {
        children: [
          {
            children: [{
              children: [],
              meta: {},
              name: 'conf.d',
              type: 'directory',
            }],
            meta: {},
            name: 'nginx',
            type: 'directory',
          },
          {
            children: [],
            meta: {},
            name: 'consul',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'etc',
        type: 'directory',
      },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };

  expect(actual).toEqual(expected);
});
