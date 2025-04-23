// import { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  Link,
  Outlet,
  useMatch,
} from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo } from "../api";
import { fetchCoinPrice } from "../api";

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

const Overview = styled.div`
  width: 600px;
  color: ${({ theme }) => theme.bgColor};
`;

const Overviewitem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.textColor};
  span:nth-of-type(1) {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Description = styled.div`
  width: 600px;
  background: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.textColor};
  padding: 18px 24px;
  border-radius: 8px;
  font-size: 1.8rem;
  line-height: 1.3;
`;

const Tabs = styled.div`
  width: 600px;
  display: flex;
  gap: 10px;
`;

const Tab = styled.span<IsActive>`
  flex: 1;
  text-align: center;
  font-size: 1.8rem;
  padding: 16px 20px;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.accentColor : theme.textColor};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.textColor : theme.bgColor};
`;

interface IsActive {
  $isActive: boolean;
}

interface IRouteParams {
  coinId: string;
}
interface IRouteState {
  state: string;
}
interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
interface PriceInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

const Coin = () => {
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceInfo] = useState<PriceInfoData>();
  const { coinId } = useParams<IRouteParams | any>();
  const { state } = useLocation() as IRouteState;

  const chartMatch = useMatch(`/${coinId}/chart`);
  const priceMatch = useMatch(`/${coinId}/price`);

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();
  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();
  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]);

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>({
    queryKey: ["coinInfo", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceInfoData>({
    queryKey: ["coinPrice", coinId],
    queryFn: () => fetchCoinPrice(coinId),
  });

  const loading = infoLoading || priceLoading;

  return (
    <Container>
      <Header>
        <Link to={"/"}>
          <Title>
            Coin : {state ? state : loading ? "Loading..." : coinId}
          </Title>
        </Link>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <Overviewitem>
              <span>🏆Rank : </span>
              <span>{infoData?.rank}</span>
            </Overviewitem>
            <Overviewitem>
              <span>Symbol : </span>
              <span>{infoData?.symbol}</span>
            </Overviewitem>
            <Overviewitem>
              <span>isActive : </span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </Overviewitem>
          </Overview>
          <Description>
            Infomation of {infoData?.type} type : Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nesciunt perspiciatis dolor voluptates
            consequatur possimus ab sit aut corporis id eum error repudiandae
            obcaecati, porro aperiam adipisci fuga eius quam magni.
          </Description>
          <Overview>
            <Overviewitem>
              <span>Total Supply</span>
              <span>{priceData?.total_supply}</span>
            </Overviewitem>
            <Overviewitem>
              <span>Max Supply</span>
              <span>{priceData?.max_supply}</span>
            </Overviewitem>
          </Overview>
          <Tabs>
            <Tab $isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab $isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Coin;
