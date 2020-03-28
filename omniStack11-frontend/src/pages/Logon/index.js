import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import React from 'react';

import './styles.css';

import heroes from '../../assents/heroes.png';
import logo from '../../assents/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero" />

                <form>
                    <h1>Faça o Logon</h1>
                    <input placeholder="Seu ID" />
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