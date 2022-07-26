import React from 'react';
import CardResto from "../components/cardResto";

function Restaurant() {
	// const [isAuth, setIsAuth] = useState(false);  


  //   useEffect(() => {
  //       if (localStorage.getItem('token') !== null) {

  //         setIsAuth(true);         
  //       }       
  //     }, []);
    
    return ( <>
      {/* { isAuth === true ? */}
        (<div className="relative container mx-auto md:my-8">
            <h1 className="text-2xl font-semibold text-mygreen font-poppins text-center p-4">RESTAURANT</h1> 
			      <CardResto />
                      
	    </div>)
        {/* :(<></>)} */}
        </>
        )
	}
	
export default Restaurant;