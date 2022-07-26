import React from 'react';

function Contact() {
    
    return (
    <div className="relative container mx-auto my-6">
        <h1 className="text-2xl font-semibold text-center text-mygreen font-poppins p-2">CONTACTEZ-NOUS</h1> 
        <h3 className="m-4 text-center font-fredoka text-gray-400 text-base">Vous avez une question ? Voici les réponses aux questions les plus fréquemment posées.
            <br />  N'hésitez pas à nous contacter par mail pour toute autre question.</h3>
            {/* <div className=' flex justify-center'>
                <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Nom prenom
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                E-mail
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                            <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Message
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                            <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Send
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div> */}
         <div className="flex flex-col items-center justify-center">
            {/* <img src="./img/tibetParis.jpg" className='w-1/3 h-auto rounded shadow-xl' alt="ByNorbuWangyal"/>  */}
            <div className='flex m-4 pt-8'>
            <a href="mailto:urbantibet@gmail.com?subject=Mail from Our Site"><img src="./img/contact.png" className='w-12 h-12' alt="email"/></a>  
                
            </div>
            
        </div>
    </div>
    );
}
export default Contact;