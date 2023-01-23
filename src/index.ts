declare global {
  interface Array<T> {
    jSum(): number;
    jChunk(chunkSize?: number): any[];
  }
}
const sum = (arr: any[]) => {
  let obj: any = 0;
  arr.forEach((key) => {
    obj += key;
  });
  return obj;
};
const chunk = (array: any[], chunkSize: number) => {
  const chunks: any[] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunked = array.slice(i, i + chunkSize);
    chunks.push(chunked);
  }
  return chunks;
};
Array.prototype.jSum = function () {
  return sum(this);
};
Array.prototype.jChunk = function (chunkSize: number) {
  return chunk(this, chunkSize);
};
export const jsxlib = {};
