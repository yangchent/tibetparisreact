import React from "react";
import { Link } from 'react-router-dom';

function Error404() {

    return (
        <div className="relative container mx-auto my-16">
            <h2 className="text-4xl text-red-400">Not found- 404 </h2>
            <Link to="/">Home</Link>
        </div>
    );
}
export default Error404;