const BASE_URL = "https://my-json-server.typicode.com/Divjason";

export const fetchCoins = () => {
  return fetch(`${BASE_URL}/coinlist/coins`).then((res) => res.json());
};

export const fetchCoinInfo = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/coinlist/coins/${coinId}`).then((res) =>
    res.json()
  );
};

export const fetchCoinPrice = (coinId: string | undefined) => {
  return fetch(`${BASE_URL}/coinprice/coinprice/${coinId}`).then((res) =>
    res.json()
  );
};
