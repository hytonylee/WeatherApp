import React from 'react';
import { Jumbotron, Container, Row, Col, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

const Header = (props) => {
    return (
        <React.Fragment>
            <Jumbotron fluid className='header'>
                <h2 className='header-title'>Weekly Project: WeatherApp</h2>
                <p className='header-desc'>This is project is built with ReactJS, styled by ReactStrap and linked up OpenWeather Api.</p>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Header;