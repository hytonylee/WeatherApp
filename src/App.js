import React from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import WeatherGroup from './components/WeatherGroup';
import Axios from 'axios';
require('dotenv').config()

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weathers: [],
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let city = this.state.city;
        let country = this.state.country;

        Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&cnt=10&APPID=${process.env.SECRET_KEY}`)
            .then((response) => {
                let weatherData = response.data.list;
                weatherData.map(weatherInfo => {
                    console.log(weatherInfo)
                })
                // console.log(new Date(weatherData.list[0].dt * 1000).toISOString())
            });
    }


    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Header />
                <InputForm
                    onSubmit={this.handleSubmit} onChange={this.handleChange} />
                <WeatherGroup />
            </div>
        )
    }
}

export default App;