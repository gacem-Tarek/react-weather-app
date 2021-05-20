import React from "react";
import apiKeys from "../apiKeys";
import axios from "axios";
import ForcastList from "./ForcastList";
import Map from "./Map";

import loader from "../images/WeatherIcons.gif";


class Weather extends React.Component {
  state = {
   
    lat: undefined,
    lon: undefined,

    temperatureC: undefined,
    temperatureF: undefined,
    city: undefined,
    cityName: "",
    country: undefined,
    humidity: undefined,
    description: undefined,
    visibility: undefined,
    icon: undefined,
    sunrise: undefined,
    sunset: undefined,
    forcastList: undefined,
  };

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        //If user allow location service then will fetch data & send it to get-weather function.
        .then((position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
          this.getWeather(28.67, 77.22);
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
          );
        });
    } else {
      alert("Geolocation not available");
    }

    
  }


  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  getWeather = async (lat, lon) => {
    const api_call = await fetch(
      `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
    );
    const data = await api_call.json();

    const daily_api_call = await fetch(
      `${apiKeys.base}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely,alerts&APPID=${apiKeys.key}`
    );
    const dailyData = await daily_api_call.json();

    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      forcastList: dailyData.daily,
      icon: data.weather[0].icon,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      humidity: data.main.humidity,
      visibility: data.visibility,
      temp_min: Math.round(data.main.temp_min),
      temp_max: Math.round(data.main.temp_max),
      main: data.weather[0].main,
      description: data.weather[0].description,
      country: data.sys.country,
    });
  };

  search = async (city) => {
    await axios
      .get(`${apiKeys.base}weather?q=${city}&units=metric&APPID=${apiKeys.key}`)
      .then((response) => {
        this.getWeather(response.data.coord.lat, response.data.coord.lon);
        this.setState({ cityName: ""});
      })
      .catch(function (error) {
        console.log(error);
      });

    
  };
  

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  render() {
  
    const { cityName,mapCall } = this.state;
    if (this.state.temperatureC) {
      return (
      
        <React.Fragment>
         <div className='forecast'><div className="Myblock" style={{width:"50%", alignItem:"center"}}>
            <div className='search-box'>
              <div
                className='input-group mt-1 mb-1 py-0'
                style={{ alignItem: "center", justifyContent: "center" }}
              >
                <div className='form-outline  '>
                  <input
                    type='search'
                    id='form1'
                    name='cityName'
                    onChange={this.onChange}
                    value={cityName}
                    className='form-control'
                    placeholder='Search a City'
                  />
                </div>
                <button  type='button' onClick={() => this.search(cityName)} className='btn btn-primary'>
                  <i className='fa fa-search'></i>
                </button>
              </div>
              
            </div>

            <div className='title'>
              <h2>{this.state.city} </h2>

              <h3> , {this.state.country}</h3>
            </div>
            <div className='forecast-icon'>
              <img
                src={`http://openweathermap.org/img/w/${this.state.icon}.png`}
                alt='weather status icon'
              />
              
            </div><div className='temperature'>
                <p id="temp">{Math.round(this.state.temperatureC)}°c</p>
                <p>
                  <span>min : {Math.round(this.state.temp_min)}°</span>{" "}
                  <span>max: {Math.round(this.state.temp_max)}°</span>&nbsp;
                  <span>
                    humididty : {Math.round(this.state.humidity)}°
                  </span>{" "}
                  <span>min : {Math.round(this.state.visibility)}°</span>
                </p>
              </div>
            <div className='today-weather'>
              <h3>{this.state.description}</h3>
            </div>
             <div style={{ margin: '100px' }}>

             </div>
		
			</div>	
      <Map
					google={this.props.google}
					center={{lat: this.state.lat, lng: this.state.lon}}
          city={this.state.city}
					height='340px'
          width="300px"
					zoom={8}
				/> 
      	
          </div> 


          <ForcastList all={this.state} forcastList={this.state.forcastList} />

         
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} />
          <h3 style={{ color: "black", fontSize: "22px", fontWeight: "600" }}>
            Detecting your location
          </h3>
          <h3 style={{ color: "black", marginTop: "10px" }}>
            Your current location wil be displayed on the App <br></br> & used
            for calculating Real time weather.
          </h3>
        </React.Fragment>
      );
    }
  }
}

export default Weather;
