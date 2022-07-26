import React, { useState, useEffect } from 'react';


function Home() {  

  //<<<UnComment only if the user needs to be login (not today)>>>
  // const [username, setUsername] = useState(false);
  // const [loading, setLoading] = useState(true);  

  // useEffect(() => {
    
  //       if (localStorage.getItem('token') === null) {
  //         window.location.replace('http://localhost:3000/login/');
  //       } else {
  //         fetch('http://127.0.0.1:8000/api/v1/dj-rest-auth/user/', {
  //           method: 'GET',
  //           headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Token ${localStorage.getItem('token')}`
  //         }
  //       })
  //         .then(res => res.json())
  //         .then(data => {
  //           setUsername(data.username)
  //           setLoading(false);
  //           console.log(data.username)
  //         });
  //     }
  // }, []);

  return (
  <div className="relative container font-poppins mx-auto ">
    {/* <h2 className='flex justify-center text-myorange '>Hello! {username}</h2>
    {loading === false && ( */}
      <div className="mt-36 flex items-center justify-center">
          <h1 className="text-5xl sm:text-8xl font-bold text-mygreen">TIBET  </h1>
          <h1 className="text-5xl sm:text-8xl font-bold text-myorange">PARIS  </h1> 
      
      </div>
    {/* )} */}
  </div>
  );
}
export default Home;