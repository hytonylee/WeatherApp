import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const WeatherSingle = (props) => {
    return (
        <div>
            <Card className='weahterCard'>
                <CardBody>
                    <CardTitle>{props.weather}</CardTitle>
                    <CardSubtitle>Date: {props.date}</CardSubtitle>
                    <CardSubtitle>Time: {props.time}</CardSubtitle>
                    <CardText>Temperature: {props.temperature}</CardText>
                    <Button>More Detail</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default WeatherSingle;

