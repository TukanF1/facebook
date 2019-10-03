import {PostDatePipe} from './post-date.pipe';

describe('PostDatePipe', () => {
  let pipe = null;

  beforeEach(() => {
    pipe = new PostDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should works', () => {
    const input = 'Fri Oct 04 2020 22:13:23 GMT+0100 (czas środkowoeuropejski standardowy)';
    const output = pipe.transform(input);
    expect(output).toEqual('4 października 2020, 23:13');
  });

  it('should return empty string for falsy values', () => {
    const input = [false, '', NaN, undefined, null, 0];
    input.forEach(value => {
      const output = pipe.transform(value as string);
      expect(output).toEqual('');
    });
  });

  it('should return empty string for non date-string', () => {
    const input = ['false', 'vdsfsdfasd', 'Październik 22', '22-09-2019 12:12'];
    input.forEach(value => {
      const output = pipe.transform(value);
      expect(output).toEqual('');
    });
  });
});
