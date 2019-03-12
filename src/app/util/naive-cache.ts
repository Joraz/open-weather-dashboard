interface CachedObject<T> {
  expires: Date;
  data: T;
}

/**
 * Simple implementation of a cache that will only expire/delete items when they are requested
 */
export class NaiveCache<T = any> {
  private dataMap = new Map<string, CachedObject<T>>();

  constructor(private timeToLive: number = 300000) { }

  public get(key: string): T | null {
    const entry = this.dataMap.get(key);
    if (entry) {
      const entryNotExpired = new Date().getTime() < entry.expires.getTime();
      if (entryNotExpired) {
        return entry.data;
      } else {
        this.dataMap.delete(key);
      }
    }

    return null;
  }

  public set(key: string, data: T): void {
    const expires = new Date(new Date().getTime() + this.timeToLive);
    this.dataMap.set(key, { expires, data });
  }
}
