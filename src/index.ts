declare global {
  interface Array<T> {
    sum(): number;
  }
}
const sum = (arr: any[]) => {
  let obj: any = 0;
  arr.forEach((key) => {
    obj += key;
  });
  return obj;
};
Array.prototype.sum = function () {
  return sum(this);
};
export const getGreet = (name: string) => `Hello ${name}`;
