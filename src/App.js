import React from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import WeatherGroup from './components/WeatherGroup';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            coutnry: '',
            weather: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("You are submitting " + this.state.city + ', ' + this.state.country);
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
                <InputForm onSubmit={this.handleSubmit} onChange={this.handleChange} />
                <WeatherGroup />
            </div>
        )
    }
}

export default App;