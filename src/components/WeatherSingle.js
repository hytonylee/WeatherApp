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
                    <CardTitle>Hello</CardTitle>
                    <CardSubtitle>{props.weather}</CardSubtitle>
                    <CardSubtitle>{new Date(props.date * 1000).toISOString().slice(0, 10)}</CardSubtitle>
                    <CardText>{props.temperature}</CardText>
                    <Button>More Detail</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default WeatherSingle;

