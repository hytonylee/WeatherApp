import React from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import WeatherGroup from './components/WeatherGroup';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            country: '',
            weather: [],
            isLoading: false,
            imageURL: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        city = this.state.city;
        country = this.state.country;
        alert("You are submitting " + this.state.city + ', ' + this.state.country);
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    // componentDidMount() {
    //     axios.get('https://dog.ceo/api/breeds/image/random')
    //         .then(response => {
    //             this.setState({ imageURL: response.data.message })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    render() {
        // const { imageURL } = this.state;
        return (
            <div>
                <Header />
                {/* <img src={imageURL} /> */}
                <InputForm
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                />
                <WeatherGroup />
            </div>
        )
    }
}

export default App;