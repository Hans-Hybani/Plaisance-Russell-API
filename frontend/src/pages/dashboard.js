import React from "react";
import '../style/dashboard.css'
import { Link } from 'react-router-dom';

function Dashboard(params) {
        const data = [
                { id: 1, nom: 'John Doe', email: 'john@example.com' },
                { id: 2, nom: 'Jane Smith', email: 'jane@example.com' },
                { id: 3, nom: 'Alice Johnson', email: 'alice@example.com' }
              ];
        return(
                <div>
                        <h1> TABLEAU DE BORD </h1>
                        <section className="add__user_dah">
                                <Link to="/Inscription">
                                        <button>Ajouter un utilisateur</button>
                                </Link>
                        </section>

                        <section className="tab__section">
                                <h2>Utilisateur</h2>
                                        <table className="table">
                                                <thead>
                                                        <tr>
                                                        <th>name</th>
                                                        <th>Email</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {data.map(item => (
                                                        <tr key={item.id}>
                                                                <td>{item.nom}</td>
                                                                <td>{item.email}</td>
                                                                <td>
                                                                        <button className="mod">Modifier</button>
                                                                </td>
                                                                <td>
                                                                        <button className="sup">Supprimer</button>
                                                                 </td>
                                                        </tr>
                                                        ))}
                                                </tbody>
                                        </table>
                        </section>

                        <section className="add__user_dah">
                                <Link to="/Catway">
                                        <button>Creer un catway</button>
                                </Link>
                        </section>

                        <section className="tab__section">
                                <h2>Catways</h2>
                                        <table className="table">
                                                <thead>
                                                        <tr>
                                                        <th>Cateway Number</th>
                                                        <th>Type</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {data.map(item => (
                                                        <tr key={item.id}>
                                                                <td>{item.nom}</td>
                                                                <td>{item.email}</td>
                                                                <td>
                                                                        <button className="mod">Modifier</button>
                                                                </td>
                                                                <td>
                                                                        <button className="sup">Supprimer</button>
                                                                </td>
                                                                <td>
                                                                        <button className="det">Details</button>
                                                                </td>
                                                        </tr>
                                                        ))}
                                                </tbody>
                                        </table>
                        </section>

                </div>
        )
}

export default Dashboard;