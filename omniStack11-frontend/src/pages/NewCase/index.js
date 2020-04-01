import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assents/logo.svg';

export default function NewCase() {
    return (
        <div className="newcase-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero" />

                    <h1>Cadastro no caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói</p>

                    <Link className="back-link" to="/cases">
                        <FiArrowLeft size={16} color="#e02041" />
                    Voltar
                </Link>
                </section>

                <form>
                    <input placeholder="Titulo do case" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}