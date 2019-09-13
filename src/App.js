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
            weather: [],
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let city = this.state.city;
        let country = this.state.country;
        Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${process.env.SECRET_KEY}`)
            .then((response) => {
                console.log(response.data.list);
                // console.log(response.status);
                // console.log(response.statusText);
                // console.log(response.headers);
                // console.log(response.config);
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