import React, { useState } from 'react';
import '../CSS/Register.css';
import Nav from '../Navigation/Nav';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        fullName: '',
        address: '',
        phone: '',
        email: '',
        clientType: '',
        location: '',
        registrationDate: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Handle form submission logic
    };

    return (
        <div>
            <Nav/>
        <div className="container">
          
            <div className="left-panel">
                <h1>Register Your Client</h1>
                <form onSubmit={handleSubmit} className="form">
                    <label>ID</label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="Identifiant unique du client"
                        required
                    />

                    <label>Nom complet du client</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Nom complet du client"
                        required
                    />

                    <label>Adresse du client</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Adresse du client"
                        required
                    />

                    <label>Numéro de téléphone du client</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Numéro de téléphone"
                        required
                    />

                    <label>Adresse email du client</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Adresse email"
                        required
                    />

                    <label>Type de client</label>
                    <select
                        name="clientType"
                        value={formData.clientType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Type de client</option>
                        <option value="Particulier">Particulier</option>
                        <option value="PME">PME</option>
                        <option value="Grande entreprise">Grande entreprise</option>
                    </select>

                    <label>Localisation géographique</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Localisation géographique"
                        required
                    />

                    <label>Date d’enregistrement</label>
                    <input
                        type="datetime-local"
                        name="registrationDate"
                        value={formData.registrationDate}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="submit-button">Register</button>
                </form>
            </div>
            <div className="right-panel">
                <h2>Create Your Account</h2>
                <p>Till loune ancome runber frction and detige, encelle payetts and conose se protion.</p>

                <h3>Location</h3>
                <p>Andivasy/Individual indodounie larre, geogelomnement centfirrm, onente, the sugn thest your llogation porthation.</p>

                <h3>Subwort</h3>
                <p>Confirm Password! this conponarelets login po your contoible.</p>
            </div>
        </div>
        </div>
    );
};

export default RegistrationForm;
