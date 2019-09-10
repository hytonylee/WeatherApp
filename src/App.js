import React from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import WeatherGroup from './components/WeatherGroup';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            weather: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Header />
                <InputForm onSubmit={this.handleSubmit} />
                <WeatherGroup />
            </div>
        )
    }
}

export default App;