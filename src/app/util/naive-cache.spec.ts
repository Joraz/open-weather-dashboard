import { NaiveCache } from './naive-cache';

describe('NaiveCache', () => {
  it('creates', () => {
    const cache = new NaiveCache<number>();
    expect(cache).toBeDefined();
  });

  it('returns null if the cache item has expired', done => {
    // cache with 1 second ttl
    const cache = new NaiveCache<number>(1000);
    cache.set('one', 1);
    setTimeout(() => {
      expect(cache.get('one')).toBeNull();
      done();
    }, 2000);
  });

  it('returns the value if the cache item has not expired', done => {
    // cache with 5 minute ttl
    const cache = new NaiveCache<number>();
    cache.set('one', 1);
    setTimeout(() => {
      expect(cache.get('one')).toEqual(1);
      done();
    }, 2000);
  });
});
