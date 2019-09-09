import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="inputContainer">
                <Form className="inputForm" inline onSubmit={this.handleSubmit}>
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
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <Button
                            type="submit"
                            value="Submit"
                            className="inputButton"
                        >Submit
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default InputForm;