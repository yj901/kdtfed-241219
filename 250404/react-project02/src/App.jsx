import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { ClipLoader } from "react-spinners";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat center/cover;
  background-image: ${({ img }) => `url(${img})`};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

function App() {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [apiError, setApiError] = useState("");
  const [background, setBackground] = useState(null);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocaiton = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setApiError(err.message);
      setLoading(true);
    }
  };

  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setApiError(err.message);
      setLoading(true);
    }
  };

  const handleCityChange = () => {
    if (city === "") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeatherByCurrentLocaiton(lat, lon);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const getBackground = () => {
    const getImg = `https://api.unsplash.com/photos/random?client_id=${API_UNSPLASH_KEY}`;

    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) => setBackground(full));
  };

  useEffect(() => {
    getBackground();
  }, []);

  useEffect(() => {
    if (city === null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <div>
          <ClipLoader color="#f86cb6" size={150} loading={loading} />
        </div>
      ) : (
        <Wrapper img={background}>
          <Container>
            <WeatherBox weather={weather} />
            <WeatherButton
              cities={cities}
              handleCityChange={handleCityChange}
              selectedCity={city}
            />
          </Container>
        </Wrapper>
      )}
    </>
  );
}

export default App;
