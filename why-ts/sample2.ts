function sum2(a: number, b: number): number {
  return a + b;
}

const result = sum2(10, 2);
result.toLocaleString;

let arr: Array<number> = [1, 2, 3];
let arr2: number[] = [1, 2, 3];
// 두개는 같은 거

let tuple: [string, number] = ["hi", 123];

let obj: object = {};

let person: {
  name: string;
  age: number;
} = {
  name: "osk",
  age: 28,
};

function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20);
// sum(20);
// sum(10, 20, 30);

function log(a: string, b?: string, c?: string) {} // 파라미터 유도리 있게 받아오기

log("asd");
log("asd", "123");
log("asd", "123", "123124");
