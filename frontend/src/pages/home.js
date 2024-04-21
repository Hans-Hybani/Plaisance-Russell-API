import React from "react";
import "../style/home_style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home(params) {
        return(
                <div>
                        <section className="section__titre">
                                <h1>PORT PLAISANCE RUSELL</h1>
                                <p>Loerm ipsum dolor sit amen</p>
                        </section>

                        <section className="section__connexion">
                                <h2>Veuillez vous connecter !</h2>
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

                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" label="Check me out" />
                                                </Form.Group>

                                                <Button variant="primary" type="submit">
                                                        Connexion
                                                </Button>
                                        </Form>            
                        </section>

                        <section className="section__documentation">
                                <h3>Lire la documentation</h3>
                                <link/>
                        </section>
                </div>
        );
}

export default Home;