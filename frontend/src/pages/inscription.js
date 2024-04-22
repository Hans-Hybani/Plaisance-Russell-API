import React, { useState } from "react";
import "../style/home_style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Inscription(params) {

        const [formData, setFormData] = useState({
                name: '',
                email: '',
                password: ''
            });
        
            const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormData(prevState => ({
                    ...prevState,
                    [name]: value
                }));
            };
        
            const handleSubmit = (e) => {
                e.preventDefault();
                axios.post('https://api-port-russell-plaisance.vercel.app/signup', formData)
                    .then(response => {
                        console.log('Utilisateur créé avec succès !');
                        // Ajoutez ici la logique pour gérer la réponse de l'API (redirection, affichage de messages, etc.)
                    })
                    .catch(error => {
                        console.error('Erreur lors de l\'inscription : ', error);
                        // Ajoutez ici la logique pour gérer les erreurs lors de la soumission du formulaire
                    });
            };
        
        return(
                <div>
                        <section className="section__connexion">
                                <h2>Inscrivez vous !</h2>
                                <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Nom</Form.Label>
                                        <Form.Control type="text" placeholder="Entrez votre nom" name="name" value={formData.name} onChange={handleInputChange} />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleInputChange} />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} />
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