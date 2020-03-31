import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory}from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logoimg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
    
    async function handleLogin(e){
        e.preventDefault();
        
        try {
            const response = await api.post('sessions', {id});
            console.log(response.data.name);
            
            sessionStorage.setItem('ongId', id);
            sessionStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no logon, tente novamente.');
            console.log(error);
        }

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt="Be the Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">
                        Entrar
                    </button>
                    <Link className="back-Link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}