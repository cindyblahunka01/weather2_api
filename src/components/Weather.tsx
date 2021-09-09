import React, { Component } from "react";

type AcceptedProps = {
    testProp: string,
    optionalProp?: string
};

class Weather extends Component <AcceptedProps> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
    };
  }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       console.log("Latitude is :", position.coords.latitude);
//       console.log("Longitude is :", position.coords.longitude);
//     });

    componentDidMount = () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);

        const weatherURL =
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${'bc29df293ac971f9d32dddf356843bab'}`
    
        console.log(weatherURL)

        fetch(weatherURL)
        .then(res => res.json())
        .then(data => console.log(data))
    })
    }

  render() {
    return (
      <div>
        <h4>Using geolocation and open weather APIs in React</h4>
        {/* <p>{this.props.testProp}</p>
        <p>{this.props.optionalProp}</p> */}

      </div>
    );
  }
}

export default Weather;