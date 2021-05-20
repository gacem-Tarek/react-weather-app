import React, { Component, Fragment } from "react";
import "./ForcastList.css";

export default class ForcastList extends Component {
    
    weekDay = (dt) => new Date(dt * 1000).toLocaleString("en-us", {
        weekday: "long"
      });
  render() {
   
    return (
      <Fragment>
         
        
        <div className='wrapper'>

        {this.props.forcastList.slice(1, 7).map(day => (
           
            <div className='day'>
                <div className="forcasting">
            <h2 className='date'>{this.weekDay(day.dt)}</h2>
            <img
              src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
              alt="weather status icon"
            />
    
            <h2 className='main'>{day.weather[0].main}</h2>
            <h3 className='tempM'>
              <span>{Math.round(day.temp.min)}°</span> &nbsp;{" "}
              <span> {Math.round(day.temp.max)}°</span>
            </h3>
            </div>
          </div>
        ))}
        </div>
    </Fragment>
    );
  }
}
