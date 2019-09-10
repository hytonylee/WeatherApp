import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const InputForm = (props) => {
    return (
        <div className="inputContainer">
            <Form className="inputForm" inline onSubmit={props.loadWeather}>
                <FormGroup className="inputGroup">
                    <Label
                        for="exampleCity"
                        className="inputLabel"
                    >CITY</Label>
                    <Input
                        type="text"
                        name="city"
                        id="exampleCity"
                        placeholder="Example: Burnaby"
                        className="inputBox"
                        value={props.value}
                    />
                    <Button
                        type="submit"
                        className="inputButton"
                    >Get Weather Info
                    </Button>
                </FormGroup>
            </Form>

        </div>
    )
}

export default InputForm;