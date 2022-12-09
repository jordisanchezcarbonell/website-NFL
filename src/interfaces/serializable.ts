export interface Serializable<T> {
  deserialize(input: object): T | null;
  deserializeArray?(inputArray: Array<object>): Array<T | null>;
}
