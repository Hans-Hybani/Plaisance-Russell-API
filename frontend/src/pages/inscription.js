import React from "react";
import "../style/home_style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Inscription(params) {
        return(
                <div>
                        <section className="section__connexion">
                                <h2>Inscrivez vous !</h2>
                                        <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Email address</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email" />
                                                        <Form.Text className="text-muted">
                                                                We'll never share your email with anyone else.
                                                        </Form.Text>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>

                                                <Button variant="primary" type="submit">
                                                        Inscription
                                                </Button>
                                        </Form>            
                        </section>
                </div>
        );
}

export default Inscription;