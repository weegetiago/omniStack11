import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logo from '../../assents/logo.svg';
import { useEffect } from 'react';
import api from '../../servicos/api';
import { useState } from 'react';

export default function Cases() {
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('perfil', { //no beck perfil=casos cadastrados
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function deleteCases(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers: {
                    Authorization: ongId,
                }
            });
            //Após o delete, da um refresh na tela trazendo os id <> dos ids deletados
            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch(error) {
            alert('Erro ao deletar, analise e tente novamente');
        }
    }

    function fazerLogout(){
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="cases-container">
            <header>
                <img src={logo} alt="Be the Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/newcase">Cadastrar novo casos</Link>
                <button onClick={fazerLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÂO</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR</strong>
                <       p>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}</p>

                        <button onClick={() => deleteCases(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}