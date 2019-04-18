import React, {Component} from 'react';
import Modal from './../../components/Modal/Modal';
import InputField from "../../components/Forms/InputField/InputField";
import ButtonField from "../../components/Forms/Button/ButtonField";
import ButtonGrouped from "../../components/Forms/ButtonGrouped/ButtonGrouped";
import Form from "../../components/Forms/Form/Form";
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            email: ''
        });

        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submitForm(e) {


        e.preventDefault();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Modal title="Login" modalAnimateClass="modal-animate-up" modalAnimateExitClass="modal modal-animate-down">
                <Form onSubmit={this.submitForm}>
                    <InputField
                        type="text"
                        className="input"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="E-mail"/>

                    <InputField
                        type="password"
                        className="input"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"/>

                    <ButtonGrouped>
                        <ButtonField className="btn">
                            Sign In
                        </ButtonField>
                        <ButtonField className="btn btn-primary">
                            Sign Up
                        </ButtonField>
                    </ButtonGrouped>
                </Form>
            </Modal>
        );
    }
}

export default Login;