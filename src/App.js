import React from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import WeatherGroup from './components/WeatherGroup';

const API = 'https://api.openweathermap.org/data/2.5/weather?q=';
let city = 'Vancouver'
let country = ''

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
        city = this.state.city;
        country = this.state.country;
        // alert("You are submitting " + this.state.city + ', ' + this.state.country);
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