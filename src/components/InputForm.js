import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const InputForm = () => {
    return (
        <div className="inputContainer">
            <Form className="inputForm" inline>
                <FormGroup className="inputGroup">
                    <Label for="exampleCity" className="inputLabel">CITY</Label>
                    <Input type="text" name="city" id="exampleCity" placeholder="Examle Burnaby" className="inputBox" />
                    <Button className="inputButton">Submit</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default InputForm;