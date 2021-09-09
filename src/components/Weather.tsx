import React, { Component } from "react";

type AcceptedProps = {
    testProp: string,
    optionalProp?: string
    // location: () => void
};

type WeatherState = {
  temp: number
  lat: number
  lon: number
}

class Weather extends Component <AcceptedProps, WeatherState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      lat: 0,
      lon: 0,
      temp: 0
    };
    // example of binding - this.location is not fat arrow
    // - needs to bind to have acces to 'this' keyword
    // this.location = this.location.bind(this)
  }

  // example of splitting up code so it's reusable
  // could call this function inside the componentDidMount
  // location(): void {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     this.setState({
  //       lat: position.coords.latitude,
  //       lon: position.coords.longitude
  //     })
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  // }

    componentDidMount(): void {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
              console.log("Latitude is :", position.coords.latitude);
              console.log("Longitude is :", position.coords.longitude);

        const weatherURL =
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${'bc29df293ac971f9d32dddf356843bab'}`
    
        console.log(weatherURL)

        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({
            temp: Math.round(data.main.temp),
          })
        })
    })
  }

  render() {
    return (
      <div>
        <h4>Using geolocation and open weather APIs in React</h4>
        {/* <p>{this.props.testProp}</p>
        <p>{this.props.optionalProp}</p> */}
      <p>{`${this.state.temp}\u00B0F`}</p>
      </div>
    );
  }
}

export default Weather;