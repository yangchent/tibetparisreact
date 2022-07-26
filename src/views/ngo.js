import React from "react";
import CardNgo from "../components/cardNgo";

function Ngo() {

    return (
        <div className="relative container mx-auto my-4 md:my-8">
            <h1 className="text-2xl font-semibold text-mygreen font-poppins text-center p-4">ASSOCIATIONS</h1> 
            <CardNgo />
        </div>
        );
    }

export default Ngo;