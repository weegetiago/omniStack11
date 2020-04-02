import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../servicos/api';

import './styles.css';

import heroes from '../../assents/heroes.png';
import logo from '../../assents/logo.svg';

export default function Logon() {
    const [id, setID] = useState('');
    const history = useHistory();

    async function listLogon(event) {
        event.preventDefault();

        const data = {
            id,
        };

        try {
            const response = await api.post('sessao', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/cases');
        }
        catch (err) {
            alert('ID incorreto, tente outro ou corra para as colinas');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero" />

                <form onSubmit={listLogon}>
                    <h1>Faça o Logon</h1>
                    <input
                        placeholder="ID visitantes: 2a057067"
                        value={id}
                        onChange={event => setID(event.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho login
                    </Link>
                </form>
            </section>
            <img src={heroes} alt="Heroes" />
        </div>
    );
}