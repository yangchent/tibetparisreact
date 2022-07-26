import React from "react";
import { Link } from "react-router-dom";



function Footer() {
  return (
    <footer>
      <div className="fixed inset-x-0 bottom-0">
        <div className="px-5 flex sm:flex-row font-poppins bg-white justify-center text-sm">
          <div>
            <p >© 2021 littleTibetParis.</p>
          </div>
          
            <div >
              <Link to="/faq" className="p-1 ml-4 font-poppins text-myorange font-semibold hover:text-mygreen">FAQ</Link>             
            </div>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;