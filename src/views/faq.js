import React from 'react';
import "../css/faq_page.css"

const Faq=()=>{

    return (
        <main className="relative w-3/5 p-8 mx-auto my-12">
        <h1 className="font-semibold text-center font-poppins text-2xl font-heading text-mygreen pb-2 m-3">Les questions les plus fréquentes</h1>
        <h3 className="m-12 text-center font-fredoka text-gray-400 text-base">Vous avez une question ? Voici les réponses aux questions les plus fréquemment posées.
            N'hésitez pas à nous contacter par mail pour toute autre question.</h3>

        <section className="shadow row font-fredoka">
            <div className="tabs">
                <div className="border-b tab">
                    <div className="border-l-2 border-transparent relative">
                        <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                        <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                            <span className="text-grey-darkest font-thin text-xl">
                                Qu'est-ce que le Tibet ?
                            </span>
                            <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                {/* icon by feathericons.com */}
                                <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9">
                                    </polyline>
                                </svg>
                            </div>
                        </header>
                        <div className="tab-content">
                            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                <div className="pl-4">
                                    <p className="pb-3">
                                        Le Tibet est un pays, dans la ceinture de l'Himalaya, situé sur le plus haut plateau du monde. En fait, la carte du Tibet ressemble à une chaussure. Si vous regardez la carte du monde d'un point de vue géographique, vous verrez que la hauteur du plateau est visible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b tab">
                    <div className="border-l-2 border-transparent relative">
                        <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2" />
                        <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck2">
                            <span className="text-grey-darkest font-thin text-xl">
                                Pourquoi les tibétains sont-ils en France ?
                            </span>
                            <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                {/* icon by feathericons.com */}
                                <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9">
                                    </polyline>
                                </svg>
                            </div>
                        </header>
                        <div className="tab-content">
                            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                <p className="pb-3">La majorité des tibétains en France sont des réfugiés du Tibet et quelques-uns sont apatrides car ils sont nés en Inde et au Népal (sans papier de réfugié ou de citoyenneté) </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b tab">
                    <div className="border-l-2 border-transparent relative">
                        <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3" />
                        <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck3">
                            <span className="text-grey-darkest font-thin text-xl">
                            Pourquoi ce projet ?
                            </span>
                            <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                {/* <!-- icon by feathericons.com --> */}
                                <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9">
                                    </polyline>
                                </svg>
                            </div>
                        </header>
                        <div className="tab-content">
                            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                <p className="pb-3 pl-4">
                                Parce que je vis dans un pays libre et que je peux m'exprimer. C'est l'expression de mes devoirs que je pense être capable de contribuer un peu à ce pays que j'appelle mon pays.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b tab">
                    <div className="border-l-2 border-transparent relative">
                        <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2" />
                        <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck2">
                            <span className="text-grey-darkest font-thin text-xl">
                                L'avenir de ce site ?
                            </span>
                            <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                {/* icon by feathericons.com */}
                                <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9">
                                    </polyline>
                                </svg>
                            </div>
                        </header>
                        <div className="tab-content">
                            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                   
                                <p className="pl-4">
                                J'espère un avenir meilleur, plus informatif et plus d'interaction. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>            
                
            </div>
        </section>
    </main>
    )}
export default Faq;