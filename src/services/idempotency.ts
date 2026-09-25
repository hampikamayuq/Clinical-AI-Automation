export class InMemoryIdempotencyStore {
  private readonly keys = new Set<string>();

  has(key: string): boolean {
    return this.keys.has(key);
  }

  record(key: string): void {
    this.keys.add(key);
  }

  runOnce<T>(key: string, fn: () => T): T | undefined {
    if (this.has(key)) return undefined;
    const result = fn();
    this.record(key);
    return result;
  }
}
