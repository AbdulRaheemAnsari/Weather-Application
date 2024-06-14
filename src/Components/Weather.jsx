import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import cloud_icon from '../assets/cloud.png';
import wind_icon from '../assets/wind.png';
import snow_icon from '../assets/snow.png';
import rain_icon from '../assets/rain.png';
import drizzle_icon from '../assets/drizzle.png';
import clear_icon from '../assets/clear.png';
import humidity_icon from '../assets/humidity.png';

const Weather = () => {

    const [icon, seticon] = useState(cloud_icon);

    const Api_Key = "535cecc8e400531e10b93dbcb7a4206d";

    const searchfunction = async () => {
        const inputfield = document.getElementsByClassName('input');
        if (inputfield[0].value === "") {
            return 0;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputfield[0].value}&units=metric&appid=${Api_Key}`;
        const responce = await fetch(url);
        const data = await responce.json();

        let humiditys = document.getElementsByClassName('humidity')
        let weather = document.getElementsByClassName('weather_km')
        let country = document.getElementsByClassName('country')
        let tempreture = document.getElementsByClassName('tempreture')



        for (let i = 0; i < humiditys.length; i++) {
            humiditys[i].innerHTML = data.main.humidity.toString() + "%";
        }
        for (let i = 0; i < weather.length; i++) {
            weather[i].innerHTML = Math.floor(data.wind.speed.toString()) + " KM/h";
        }
        for (let i = 0; i < country.length; i++) {
            country[i].innerHTML = data.name.toString();
        }
        for (let i = 0; i < tempreture.length; i++) {
            tempreture[i].innerHTML = Math.floor(data.main.temp.toString()) + "°C";
        }



        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            seticon(clear_icon);
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            seticon(cloud_icon);
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            seticon(clear_icon);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            seticon(drizzle_icon);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            seticon(rain_icon);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            seticon(rain_icon);
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            seticon(snow_icon);
        }
        else {
            seticon(clear_icon);
        }

    }

    return (
        <div className='w-[370px] h-[500px] rounded-md bg-gradient-to-r from-[#89beb0] to-[#268183]'>
            <div className="bar w-full h-[50px] flex justify-center px-6 mt-6 gap-2">
                <input className='input w-full rounded-full pl-5 py-0 outline-none border-none text-ms' type="text" placeholder='Search Here!' />
                <button onClick={() => { searchfunction() }} className='bg-white px-4 rounded-full text-gray-600'><FiSearch /></button>
            </div>
            <div className="weather_icon w-full flex justify-center mt-5">
                <img className='w-[160px]' src={icon} alt="" />
            </div>
            <div className="weather_tem w-full flex justify-center text-white">
                <h1 className='tempreture text-[68px] font-semibold'>29°C</h1>
            </div>
            <div className="country w-full flex justify-center mt-2 text-white">
                <h1 className='country text-[16px] font-semibold'>London</h1>
            </div>
            <div className="data_container flex justify-center items-center text-white mt-8">
                <div className="element flex items-start m-auto gap-[12px]">
                    <img className='mt-[3px] w-[35px]' src={humidity_icon} alt="" />
                    <div className="data text-md font-semibold text-[16px]">
                        <div className="humidity leading-5">87%</div>
                        <div className="weather_humidity">Humidity</div>
                    </div>
                </div>
                <div className="element flex items-start m-auto gap-[12px]">
                    <img className='mt-[3px] w-[35px]' src={wind_icon} alt="" />
                    <div className="data text-md font-semibold text-[16px]">
                        <div className="weather_km leading-5">5 KM/h</div>
                        <div className="weather_speed">Wind Speed</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather