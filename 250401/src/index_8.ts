// type A = number extends string ? number : string;

// type ObjA = {
//   a: number;
//   b: string;
// };

// type ObjB = {
//   a: number;
//   b: number;
// };

// type B = ObjB extends ObjA ? number : string;

// type StringNumber<T> = T extends number ? string : number;

// let varA: StringNumber<number>;
// let varB: StringNumber<string>;

////함수 오버로드
// function removeSpaces<T>(text: T): T extends string ? string : undefined;

// function removeSpaces(text: any) {
//   if (typeof text === "string") {
//     return text.replaceAll(" ", "");
//   } else {
//     return undefined;
//   }
// }

// let result = removeSpaces("hi im jin");
// let result2 = removeSpaces(undefined);

//
type StringNumber<T> = T extends number ? string : number;

let c: StringNumber<number | string>;
