import React from 'react';
import { Container } from 'reactstrap'

const Header = () => {
    return (
        <Container className='header'>
            <h2 className='header-title'>Weekly Project: WeatherApp</h2>
            <p className='header-desc'>This is project is built with ReactJS, styled by ReactStrap and linked up OpenWeather Api.</p>
        </Container>
    )
}

export default Header;