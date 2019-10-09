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
                    <CardSubtitle>Date: {new Date(props.date * 1000).toISOString().slice(0, 10)}</CardSubtitle>
                    <CardSubtitle>Time: {new Date(props.date * 1000).toISOString().slice(11, 16)}</CardSubtitle>
                    <CardText>Temperature: {props.temperature}</CardText>
                    <Button>More Detail</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default WeatherSingle;

