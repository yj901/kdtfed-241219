import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import styled from "styled-components";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
  margin-top: 10px;
`;

interface Historical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<Historical[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    // refetchInterval: 5000,
  });

  const isDark = useRecoilValue(isDarkAtom);
  // console.log(isDark);

  const chartData = Array.isArray(data) ? data : [];

  return (
    <Container>
      {isLoading ? (
        <div>Loading Start...</div>
      ) : chartData.length > 0 ? (
        <ApexCharts
          width={600}
          type="line"
          series={[
            {
              name: "Data",
              data: chartData.map((price) => parseFloat(price.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: isDark ? "#222" : "#eee",
            },
            grid: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
                style: {
                  fontSize: "12px",
                },
              },
            },
            colors: ["#8870f7"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: isDark ? ["#eee"] : ["#222"],
              },
            },
          }}
        />
      ) : (
        <div>No Data Available to display chart.</div>
      )}
    </Container>
  );
};

export default Chart;
