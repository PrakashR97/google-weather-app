import React, { useState } from "react";
import "./App.css";
import InputBox from "./components/Input";
import axios from "axios";
import Result from "./components/Result";

const App = () => {
  const [input, setInput] = useState("");
  const [desc, setDesc] = useState("");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");

  const findWeather = async () => {
    const apikey = "9d126e87c75268697951a578dc9e9262";
    const unit = "metric";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      input +
      "&appid=" +
      apikey +
      "&units=" +
      unit;

    const response = await axios.get(url);
    const temp = await response.data.main.temp;
    const weatherDesc = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    setTemp(temp);
    setDesc(weatherDesc);
    setIcon(imageURL);
    setInput("");
  };

  console.log(temp, desc, icon);
  return (
    <>
      {temp === "" ? (
        <InputBox setInput={setInput} input={input} findWeather={findWeather} />
      ) : (
        <Result temp={temp} desc={desc} image={icon} setTemp={setTemp} />
      )}
    </>
  );
};

export default App;
