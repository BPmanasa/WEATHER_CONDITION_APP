import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import Header from "./header";
import Card from "./card";
import "./styles.css";


export default function App() {
  const [cityName, setCityName] = useState("");
  const [cityWeather, setCityWeather] = useState([]);
  const [isCityFound, SetIsCityFound] = useState(false);

  const handleChange = async (city) => {
    const LocationName = city.toLowerCase();
    const apiKey = "cbbe4d01a9f547e0bdc182525232409";
    const apiLink = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${LocationName}`;

    try {
      // console.log(apiLink);
      const response = await axios.get(apiLink);
      SetIsCityFound(true);
      setCityWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      handleChange(cityName);
    }, 750);
    return () => clearTimeout(getData);
  }, [cityName]);

  return (
    <div className="App">
      <Header />
      <TextField
        id="outlined-helperText"
        label="Enter location"
        defaultValue={cityName}
        sx={{ width: "50%" }}
        onChange={(e) => {
          setCityName(e.target.value);
          // handleChange(e.target.value);
        }}
      /> 
      { cityName.length ? (isCityFound ? (
        <Card cityWeather={cityWeather} />
      ) : (
        <Typography
          color="#d50000"
          sx={{ fontWeight: "medium", fontSize: "h6.fontSize", my: 2 }}
        >
          No matching location found
        </Typography>
      )) : <Typography></Typography>}
    </div>
  );
}

