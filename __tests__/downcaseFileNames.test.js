import { cloneDeep } from 'lodash'; // eslint-disable-line
import { mkdir, mkfile } from 'hexlet-immutable-fs-trees'; // eslint-disable-line
import downcaseFileNames from '../src/downcaseFileNames';

test('immutable', () => {
  const tree = mkdir('/', [
    mkdir('eTc', [
      mkdir('NgiNx'),
      mkdir('CONSUL', [
        mkfile('config.json'),
      ]),
    ]),
    mkfile('hOsts'),
  ]);
  const original = cloneDeep(tree);

  downcaseFileNames(tree);

  expect(tree).toEqual(original);
});

test('traverse 1', () => {
  const tree = mkdir('/', [
    mkdir('eTc', [
      mkdir('NgiNx'),
      mkdir('CONSUL', [
        mkfile('config.JSON'),
      ]),
    ]),
    mkfile('hOsts'),
  ]);
  const actual = downcaseFileNames(tree);

  const expected = {
    children: [
      {
        children: [
          {
            children: [],
            meta: {},
            name: 'NgiNx',
            type: 'directory',
          },
          {
            children: [{ meta: {}, name: 'config.json', type: 'file' }],
            meta: {},
            name: 'CONSUL',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'eTc',
        type: 'directory',
      },
      { meta: {}, name: 'hosts', type: 'file' },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };

  expect(actual).toEqual(expected);
});
