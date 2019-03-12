import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => pipe = new CapitalizePipe());

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns null when supplied with null', () => {
    expect(pipe.transform(null)).toBeNull()
  });

  it('returns the same string when already capitalized', () => {
    expect(pipe.transform('Hello')).toEqual('Hello');
  });

  it('capitalizes a single word', () => {
    expect(pipe.transform('hello')).toEqual('Hello');
  });

  it('capitalizes a set of words', () => {
    expect(pipe.transform('hello world')).toEqual('Hello world');
  });
});
