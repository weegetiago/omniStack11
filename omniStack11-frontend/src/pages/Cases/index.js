import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logo from '../../assents/logo.svg';

export default function Cases() {
    return (
        <div className="cases-container">
            <header>
                <img src={logo} alt="Be the Hero" />
                <span>Bem vinda, Nome da ONG</span>

                <Link className="button" to="/newcase">Cadastrar novo casos</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso cadela baia</p>

                    <strong>DESCRIÇÂO</strong>
                    <p>Atropelada na rua Blumenau</p>

                    <strong>VALOR</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso cadela baia</p>

                    <strong>DESCRIÇÂO</strong>
                    <p>Atropelada na rua Blumenau</p>

                    <strong>VALOR</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso cadela baia</p>

                    <strong>DESCRIÇÂO</strong>
                    <p>Atropelada na rua Blumenau</p>

                    <strong>VALOR</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}