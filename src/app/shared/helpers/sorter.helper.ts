import {map} from 'rxjs/operators';

export function sortBy(collection, mapTo) {
  return collection.sort((a, b) => {
    const x = mapTo(a);
    const y = mapTo(b);
    return x > y ? -1 : x === y ? 0 : 1;
  });
}

export function sortByOperator(key) {
  return map(list => {
    return sortBy(list, (a) => {
      return new Date(a[key]);
    });
  });
}
