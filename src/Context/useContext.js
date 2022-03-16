import {useState} from 'react';

export function UserContext () {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [form, setForm] = useState([]);
    const [nomeBarbeiro, setNomeBarbeiro] = useState([]);

    return (
        {
            nome,
            setNome,
            email,
            setEmail,
            password,
            setPassword,
            form,
            setForm,
            nomeBarbeiro,
            setNomeBarbeiro
        }
    )
};