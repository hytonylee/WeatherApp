import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const WeatherSingle = (props) => {
    return (
        <div>
            <Card className='weahterCard' key={props.id}>
                {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
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