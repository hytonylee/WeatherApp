import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const WeatherSingle = (props) => {
    return (
        <div>
            <Card className='weahterCard' key={props.id}>
                <CardBody>
                    <CardTitle>{props.day}</CardTitle>
                    <CardSubtitle>{props.weather}</CardSubtitle>
                    <CardText>{props.temperature}</CardText>
                    <Button>More Detail</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default WeatherSingle;