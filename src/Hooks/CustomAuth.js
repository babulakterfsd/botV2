import { useState } from 'react';

const CustomAuth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({ name: 'babul' });

    const getUername = (e) => {
        setUsername(e?.target?.value);
    };
    const getPass = (e) => {
        setPassword(e?.target?.value);
    };

    const HandleCustomLogin = (e) => {
        e.preventDefault();

        fetch('http://54.75.119.70:8080/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            })
            .catch((err) => console.log(err.message));
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        user,
        setUser,
        getUername,
        getPass,
        HandleCustomLogin,
    };
};

export default CustomAuth;
