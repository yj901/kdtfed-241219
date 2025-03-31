// type Map2 = {
//   [key: string]: string;
// };

// let stringMap2: Map2 = {
//   key: "string",
// };

interface IKeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: IKeyPair<string, number> = {
  key: "key",
  value: 10,
};

// interface IKeyPair2 {
//   key: boolean;
//   value: string[];
// }

let keyPair2: IKeyPair<boolean, string[]> = {
  key: true,
  value: ["i"],
};
