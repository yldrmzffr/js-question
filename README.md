# JS Question

[![Build Status](https://travis-ci.com/yldrmzffr/js-question.svg?branch=master)](https://travis-ci.com/yldrmzffr/js-question)
## How does it work?

Imagine an array that contains folders. These folders can have files in it. `move` function moves a file to another folder and returns the new state of given list.

## Installation

```bash
yarn install
```

## Usage

```javascript
move(list, sourceId, destinationId);
```


### Example list
```ts
const list = [
  {
    id: '1',
    name: 'Folder 1',
    files: [
      { id: '2', name: 'File 1' },
      { id: '3', name: 'File 2' },
      { id: '4', name: 'File 3' },
      { id: '5', name: 'File 4' },
    ],
  },
  {
    id: '6',
    name: 'Folder 2',
    files: [{ id: '7', name: 'File 5' }],
  },
]
```

If I run the command move (list, '4', '6')` it moves the file numbered `4` to the folder with ID` 6`. The function returns the following new state;
```ts
const result = [
  {
    id: '1',
    name: 'Folder 1',
    files: [
      { id: '2', name: 'File 1' },
      { id: '3', name: 'File 2' },
      { id: '5', name: 'File 4' },
    ],
  },
  {
    id: '6',
    name: 'Folder 2',
    files: [
      { id: '7', name: 'File 5' },
      { id: '4', name: 'File 3' },
    ],
  },
];
```

### Move function signature

| Key         | Type             | Description                  |
|-------------|------------------|------------------------------|
| list        | Folder[]         | Given list                   |
| source      | string           | Id of the moved file         |
| destination | string           | Id of the folder to be moved |


### Folder shape

| Key   | Type           | Description                 |
|-------|----------------|-----------------------------|
| id    | string         | Unique identifier of folder |
| name  | string         | Name of the folder          |
| files | File []        | Files in this folder        |

### File shape

| Key  | Type   | Description               |
|------|--------|---------------------------|
| id   | string | Unique identifier of file |
| name | string | Name of the file          |


## Running tests

```bash
yarn test
```

[Test Results](https://travis-ci.com/github/yldrmzffr/js-question)
