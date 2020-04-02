import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../servicos/api';

import './styles.css';

import logo from '../../assents/logo.svg';

export default function NewCase() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory(); //Refresh na tela

    async function newCase(event) {
        event.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                    
                }
            })

            history.push('/cases');
        }
        catch (err) {
            alert('Erro no cadastro, tente novamente ou corra para as colinas');
        }
    }

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

                <form onSubmit={newCase}>
                    <input
                        placeholder="Titulo do case"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}