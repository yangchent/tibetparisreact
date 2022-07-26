import React, { useState, useEffect } from 'react';
import Button from '../components/button';

const Logout = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('http://localhost:3000/login/');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/v1/dj-rest-auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace('http://localhost:3000/login/');
      });
  };

  return (
  <div className='relative container mx-auto my-16'>
    <div className='w-full flex justify-center font-fredoka'>
      <div className="w-96 px-16 py-12 shadow-xl rounded-lg -space-y-2">
      {loading === false && (
        
            <div className="flex flex-col justify-center ">
              <h1>Vous voulez vous déconnecter ?</h1>
               <Button type='submit' children='LOG-OUT' value='Logout' onClick={handleLogout} classAdd="mt-2 tracking-widest"/>
            </div>
        
      )}
    </div>
    </div>
    </div>
  );
};

export default Logout;