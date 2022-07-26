import { useRef, useEffect, useState} from 'react';
import "../css/form.css"
import Button from '../components/button';
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const MAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/ ;
const REGISTER_URL = 'http://127.0.0.1:8000/api/v1/dj-rest-auth/registration/';

const Form = () => {
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
        userRef.current.focus()
    },[])

    useEffect(() => {
        const result = USER_REGEX.test(username);
       
        setValidName(result);
    },[username]);

    useEffect(() => {
        const result = MAIL_REGEX.test(email);
        setValidEmail(result);
    },[email]);

    useEffect(() => {
        const result = PWD_REGEX.test(password1);
        setValidPwd(result);
        const match = password1 === password2;
        setValidMatch(match)
    },[password1, password2]);
 
    useEffect(() => {
        setErrMsg('');
    },[username, email, password1, password2]);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setSuccess(true);
            // window.location.replace('http://localhost:3000/login');
        } 
      }, []);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password1,password2);
        const v3 = MAIL_REGEX.test(email);

        if (!v1 || !v2 || !v3 ){
            setErrMsg("Invalid Entry");
            return
        }
        const user = {
            username: username,
            email: email,
            password1: password1,
            password2: password2
          };
         try {
            fetch(REGISTER_URL, {
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
             
                window.location.replace('http://localhost:3000/login');
              } else {
                setUsername('');
                setEmail('');
                setPassword1('');
                setPassword2('');
                localStorage.clear();
              }
            });
            
         } catch (err) {
            if (!err?.res) {
                setErrMsg('No Server Response');
            } else if (err.res?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
        };

  
    return (
        <>
        {success ? (
            <section>
                <h1>success</h1>
                <a href="#">Login</a>
            </section>

        ) : (
        <div className='relative container mx-auto mt-4 sm:mt-24'>
            <div className='w-full flex justify-center font-fredoka'>
                <div className="w-96 px-16 py-12 shadow-xl rounded-lg -space-y-2">
                    <p ref={errRef} className ={errMsg ? "errmsg" : "offscreen"} aria-live= "assertive">{errMsg}</p>
                    <h1 className="font-poppins text-mygreen font-semibold text-lg text-center">S'inscrire</h1>
                        <form onSubmit={handleSubmit} autoComplete="off">
            
                        <div className='p-2'>
                            <label htmlFor='username'>Username:
                                <span className={validName ? "valid" : "hide"}>
                                    <FontAwesomeIcon icon={faCheck} className='text-green-500'/>
                                </span>
                                <span className={validName || !username ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon={faTimes} className='text-red-500'/>
                                </span>
                            </label>
                            <input 
                                type='text'
                                id='username'
                                ref={userRef}
                                placeholder="nom d'utilisateur"
                                value={username}
                                onChange={e => setUsername(e.target.value)} required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby ="uidnote"
                                onFocus={()=> setUserFocus(true)}
                                onBlur={()=> setUserFocus(false)}
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"                                        
                            />
                             <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
                                <span className="text-xs text-green-500 indent-0">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 24 characters.
                                    Must begin with a letter.
                                    Letter, numbers, underscores, hyphens allowed.
                                </span>
                            </p>
                        </div>
                        <div className='p-2'>
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
                        </div>
                        <div className='p-2'>
                            <label htmlFor='password1'>Mot de passe
                            <span className={validPwd ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} className='text-green-500'/>
                            </span>
                            <span className={validPwd || !password1 ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} className='text-red-500' />
                            </span>
                            </label> 
                            <input 
                                id='password1' 
                                type='password' 
                                required
                                value={password1}
                                onChange={e => setPassword1(e.target.value)} placeholder="Mot de passe"
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby ="pwdnote"
                                onFocus={()=> setPwdFocus(true)}
                                onBlur={()=> setPwdFocus(false)}
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
                                />
                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                <span className="text-xs text-green-500 indent-0">
                                <FontAwesomeIcon icon={faInfoCircle} />
                                8 to 24 characters. Must include a letter and a number.</span> 
                            </p>
                        </div>
                        <div className='p-2'>
                            <label htmlFor='password2'>Confirmez le mot de passe
                                <span className={validMatch && password2 ? "visible" : "hidden"}>
                                    <FontAwesomeIcon icon={faCheck} className='text-green-500'/>
                                </span>
                                <span className={validMatch || !password2 ? "hidden" : "visible"}>
                                    <FontAwesomeIcon icon={faTimes} className='text-red-500' />
                                </span>
                             </label>

                            <input 
                                id='password2' 
                                type='password' placeholder="Confirmez le mot de passe"
                                required
                                value={password2}
                                onChange={e => setPassword2(e.target.value)}
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby ="confirmnote"
                                onFocus={()=> setMatchFocus(true)}
                                onBlur={()=> setMatchFocus(false)}
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
                            />
                            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                <span className="text-xs text-green-500 indent-0">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Password do not match
                                </span>
                            </p>
                        </div>
                        <div className='flex flex-col justify-center m-2'>    
                            <Button disabled={!validName || !validEmail || !validPwd || !validMatch ? true : false } type='submit' value='SignUp' children="S'incrire" classAdd="mt-2 tracking-widest text-xl" />                   
                        </div>
                    </form>
                </div>
            </div>
        </div>)}
        </>
      );
}
export default Form;