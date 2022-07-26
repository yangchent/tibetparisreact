import React, { useState, useEffect } from 'react';
import Button from '../components/button';
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/login/');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
      password: password
    };

    fetch('http://127.0.0.1:8000/api/v1/dj-rest-auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/');
        } else {
          setUsername('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

 
  return (
    <div className='relative container mx-auto my-16'>
      <div className='w-full flex justify-center font-fredoka'>
        <div className="w-96 px-16 py-12 shadow-xl rounded-lg -space-y-2">
          <h2>N'est pas nécessaire de se connecter ou de créer un compte, c'est juste pour le développement futur et à des fins éducatives pour le moment.</h2>

        {loading === false && 
        <h1 className="font-poppins text-mygreen font-semibold text-lg text-center p-2">Login</h1>}
        {errors === true && 
        <p className='text-xs text-red-500 p-2'>Impossible de se connecter avec les informations d'identification fournies</p>}

        {loading === false && (
          <form onSubmit={onSubmit} autoComplete="off" >
            <div className='p-2'>
              <label htmlFor='username'>Nom d'utilisateur</label> 
              <input name='username' type='username' value={username}  required placeholder="nom d'utilisateur"
                onChange={e => setUsername(e.target.value)} 
                className={
                  username
                    ?
                    "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                    : "appearance-none rounded relative block w-full px-3 py-2 border border-red-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                }
                />
                
            </div>
            <div className='p-2'>
              <label htmlFor='password'>Mot de passe</label> 
              <input name='password' type='password' value={password} required placeholder="Mot de passe"
                onChange={e => setPassword(e.target.value)}
                className={
                  password.length > 8
                    ?
                    "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    : "appearance-none rounded relative block w-full px-3 py-2 border border-red-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                }
              />
             
            </div>
            <div className="flex flex-col justify-center mt-2">                
              <Button type='submit' value='Login' children="LOGIN" classAdd="mt-2 tracking-widest"/>
            </div>
            <div className='text-center font-semibold m-4'>OU</div>
            <div className="flex flex-col justify-center mt-2">                
              <Button children="S'incrire" classAdd="tracking-widest">
              <Link to="/register">S'inscrire</Link>
              </Button>
            </div>
                       
          </form>
        )}
        </div>
      </div>
    </div>
  );
};

export default Login;