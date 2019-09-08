import React from 'react';
import { Container } from 'reactstrap'

const Header = () => {
    return (
        <React.Fragment>
            <Container className='header'>
                <h2 className='header-title'>Weekly Project: WeatherApp</h2>
                <p className='header-desc'>This is project is built with ReactJS, styled by ReactStrap and linked up OpenWeather Api.</p>
            </Container>
        </React.Fragment>
    )
}

export default Header;