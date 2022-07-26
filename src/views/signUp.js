// import React, { useState } from 'react';
// import Form from './form';

// const SignUp = () => {
    
//   return (
//       <div>          
//           <Form />
//       </div>
//   )
  
// };

// export default SignUp;

import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/form.css"

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const MAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://127.0.0.1:8000/api/v1/dj-rest-auth/registration/';

const SignUp = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password1, setPassword1] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [password2, setPassword2] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        const result = MAIL_REGEX.test(email);
        setValidEmail(result);
    },[email]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password1));
        setValidMatch(password1 === password2);
    }, [password1, password2])

    useEffect(() => {
        setErrMsg('');
    }, [username, email, password1, password2])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password1, password2);
        const v3 = MAIL_REGEX.test(email);

        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        const user = {
            username: username,
            email: email,
            password1: password1,
            password2: password2,
          };
        try {
            fetch(REGISTER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept : 'application/json'
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
                setEmail('');
                setPassword1('');
                setPassword2('');
                setSuccess(true);
                localStorage.clear();
                }
            });
            } catch (err) {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 409) {
                    setErrMsg('Username Taken');
                } else {
                    setErrMsg('Registration Failed')
                }
                errRef.current.focus();
            }
        }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                  
          
                <div className="w-96 px-16 py-12 shadow-xl rounded-lg -space-y-2">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !username ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        
                            <label htmlFor='email'>Email
                                <span className={validEmail ? "valid" : "hide"}>
                                    <FontAwesomeIcon icon={ faCheck} className='text-green-500' />
                                </span>
                                <span className={validEmail || !email ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon={faTimes} className='text-red-500'/>
                                </span>
                            </label> 
                            <input 
                                id="email" 
                                type='email' 
                                placeholder="Email" 
                                onChange={e => setEmail(e.target.value)}
                                required
                                value={email}
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby ="emailnote"
                                onFocus={()=> setEmailFocus(true)}
                                onBlur={()=> setEmailFocus(false)}
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                            />
                            <p id="emailnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
                                <span className="text-xs text-green-500">
                                <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 24 characters.
                                    Must begin with a letter.
                                    Letter, numbers, underscores, hyphens allowed.
                                </span>
                            </p>
                        
                        <label htmlFor="password1">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !password1 ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password1"
                            onChange={(e) => setPassword1(e.target.value)}
                            value={password1}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="password2">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && password2 ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !password2 ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password2"
                            onChange={(e) => setPassword2(e.target.value)}
                            value={password2}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign In</a>
                        </span>
                    </p>
                    </div>
                  
                </section>
            )}
        </>
    )
}

export default SignUp;
