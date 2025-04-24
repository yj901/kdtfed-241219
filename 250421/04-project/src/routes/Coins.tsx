import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const Header = styled.header`
  font-size: 3.2rem;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

const Loader = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.accentColor};
`;

const CoinList = styled.ul`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  a {
    display: block;
    width: 33.33%;
    height: 110px;
    padding: 5px;
  }
`;

const Coin = styled.li`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.textColor};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  font-size: 1.7rem;
  cursor: pointer;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .rank {
    display: block;
    text-align: center;
    font-size: 1.4rem;
  }
  .name {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    span {
      font-size: 1.3rem;
    }
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

interface coinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

// const coinss = [
//   {
//     id: "btc-bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "eth-ethereum",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
// ];

const Coins = () => {
  // const [coins, setCoins] = useState<coinInterface[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //     );
  //     const json = await response.json();
  //     setCoins(json.slice(0, 30));
  //     setLoading(false);
  //   })();
  // }, []);

  const { isLoading, data } = useQuery<coinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  return (
    <Container>
      <Helmet>
        <title>Coins List</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
            <Link to={`/${coin.id}`} state={`${coin.name}`} key={coin.id}>
              <Coin>
                <div>
                  <span className="rank">
                    {" "}
                    Rank <br /> {coin.rank}
                  </span>
                  <div className="name">
                    <div>
                      <Img
                        src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                      />
                      {coin.name}
                    </div>{" "}
                    <span>&rarr;</span>
                  </div>
                </div>
              </Coin>
            </Link>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
