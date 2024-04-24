import React, { useState } from "react";
import "../style/home_style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; // Importer Axios

function Inscription(props) {
    // Créer des états pour stocker les valeurs des champs du formulaire
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêcher le comportement par défaut du formulaire

        // Créer un objet contenant les données du formulaire
        const formData = {
            name: name,
            email: email,
            password: password
        };

        try {
            // Envoyer les données du formulaire à l'API avec Axios
            const response = await axios.post('http://localhost:3000/signup', formData);

            // Vérifier si la requête a réussi
            if (response.status === 201) {
                console.log('done')
                window.location.href = '/Home';
            } else {
                // Gérer la réponse de l'API en cas d'erreur
                setErrorMessage('An error occurred. Please try again.');
                console.error('Erreur lors de l\'inscription:', response.data.error);
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
    };

    return (
        <div>
            <section className="section__connexion">
                <h2>Inscrivez-vous !</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" placeholder="Entrez votre nom" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            Nous ne partagerons jamais votre email avec quelqu'un d'autre.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Inscription
                    </Button>

                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </Form>
            </section>
        </div>
    );
}

export default Inscription;
