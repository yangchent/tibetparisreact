import axios from "axios";
import React, { Component } from 'react';
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/spinner";

class CardResto extends Component {
    constructor() {
        super();
        this.state = {
            restaurants: [], 
			loading: false,
			selectedId: [null]
        };
    }
	
	componentDidMount() {
		axios.get(`http://127.0.0.1:8000/restaurants/?format=json`).then((response) => {
			this.setState({loading : true })
			const data = response.data
			this.setState({restaurants : data});
			this.setState({selectedId : data.id ,
				loading : false })
			console.log({data})
	}).catch((err) =>{
		console.log(err);
	})
	}
	
	render(){
		
        return (
            <>
			{this.state.loading && <Spinner />}
        	{this.state.restaurants.map( item => (
	    		<div key={item.id} className="relative flex flex-col md:flex-row md:space-x-4 md:space-y-2 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl 	mx-auto bg-white m-2">
					<div className="w-26 h-26 md:w-1/3 bg-white grid place-items-center">
						<img src={item.image} alt="resto" className="rounded-lg" />
					</div>
					
			    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 ">
				<div className="grid grid-cols-4 grid-rows-1 col-gap-2 row-gap-10 ">

					<div className="row-start-1 text-4xl flex justify-center items-center">
						{item.deliveroo ? (
							<a href={item.deliveroo} target="_blank"  rel="noreferrer" className="text-blue-600 font-medium hidden md:block hover:text-blue-400">
								<svg xmlns="http://www.w3.org/2000/svg" className='w-16' viewBox="-22.8 232.4 490.8 131.6" >
									<path d="M156.5 330.9h11.2l-1.9-8.7v-51.7h-10.7v23.6c-3.2-3.7-7.7-5.9-12.9-5.9-10.7 0-19 8.9-19 21.8 0 13 8.3 21.8 19 21.8
									5.3 0 9.9-2.3 13.1-6.2zm211.6-31.1c2.2 0 4.2.6 6 1.9l5.1-11.4c-2.4-1.5-5.1-2.1-7.8-2.1-4.8 0-8.9 2.2-11.4 6.3l-1.1-5.3h-11l1.8
									8.2V331h10.7v-26.7c1.4-2.8 4.1-4.5 7.7-4.5zm31.3 20.8c-6.2 0-10.8-4.1-10.8-10.5 0-6.5 4.6-10.5 10.8-10.5 6.3 0 10.8 4 10.8 10.5 
									0 6.3-4.5 10.5-10.8 10.5zM133.6 310c0-6.5 4.6-10.5 10.8-10.5 6.3 0 10.8 4 10.8 10.5 0 6.4-4.5 
									10.5-10.8 10.5-6.2.1-10.8-4.1-10.8-10.5zm313.3 10.6c-6.2 0-10.8-4.1-10.8-10.5 0-6.5 4.6-10.5 10.8-10.5 6.3 0 
									10.8 4 10.8 10.5-.1 6.3-4.6 10.5-10.8 10.5zm-253.2-21.7c5.5 0 9.1 2.6 10.3 7.4h-20.6c1.1-4.9 4.8-7.4 10.3-7.4zm127.9 0c5.5 
									0 9.1 2.6 10.3 7.4h-20.6c1.3-4.9 4.9-7.4 10.3-7.4zm-52.2 32h17.2l11.2-41.9h-11.7l-8.1 34-8.2-33.9h-11.5zm-27.5 0h10.7V289h-10.7zm-46.6.8c6 
									0 11.8-1.7 16.7-4.8l-4.1-9.2c-3.8 2.1-8.2 3.2-12.5 3.2-5.6 0-9.5-2.2-11.3-6.3h30.2c.3-1.6.5-3 .5-4.9 0-13-9-21.6-20.9-21.6-12.1 0-20.9 8.8-20.9
									21.8-.1 13.3 8.7 21.8 22.3 21.8zM468 310c0-13-9-21.8-21.1-21.8-12.2 0-21.1 8.9-21.1 21.8s9 21.8 21.1 21.8S468 323 468 310zm-144.9 21.8c6 0 
									11.8-1.6 16.7-4.8l-4.1-9.2c-3.8 2.1-8.2 3.2-12.5 3.2-5.6 0-9.5-2.2-11.3-6.3h30.2c.3-1.6.5-3 .5-4.9 0-13-9-21.6-20.9-21.6-12.1 0-20.9 8.8-20.9
									21.8 0 13.4 8.7 21.8 22.3 21.8zm76.3 0c12.2 0 21.1-8.9 21.1-21.8s-9-21.8-21.1-21.8c-12.2 0-21.1 8.9-21.1 21.8s8.9 21.8 21.1 
									21.8zm-177.8-.9h10.7v-60.4h-10.7zm25.7-47.6c3.7 0 6.7-3 6.7-6.8s-2.9-6.8-6.7-6.8-6.8 3-6.8 6.8 2.9 6.8 6.8 6.8zM63.4 232.4l-6.1 58-10.4-48.9-32.8 6.9 
									10.3 48.9-47.2 10 8.4 39L68.7 364l19-42.5 9-85.6zm-26.3 84.2c-1.7 1.6-3.9 1.4-6.4.6-2.4-.8-3.4-3.6-2.6-7.2.7-2.6 3.8-3 5.5-3 .6 0 1.2.1 1.8.4 1.1.5 3
									1.6 3.4 3.2.6 2.4 0 4.4-1.7 6zm24.1 2.6c-1.3 2.2-4.5 2.5-7.8.9-2.2-1.1-2.2-3.7-1.9-5.4.1-.9.5-1.8 1.1-2.5.8-1 2.1-2.3 3.5-2.3 2.5-.1 4.5 1 5.7 3s.6 
									4.2-.6 6.3z" fill="#00ccbc"/>
								</svg>
							</a>
						) : null
						}
					</div>
					<div className="row-span-1 text-4xl flex justify-center items-center">
					{item.uber ? (
								<a href={item.uber} target="_blank"  rel="noreferrer" className="text-blue-600 font-medium hidden md:block hover:text-blue-400">
									<svg xmlns="http://www.w3.org/2000/svg" className='w-16' viewBox="-.5 .2 1052.9 169.6" >
										<path d="m787.3 105.2c0-21-16.8-37.5-38-37.5-20.9 0-38 16.5-38 37.5s17.1 37.5 38 37.5c21.2 0 38-16.5 38-37.5m31-61.4v122.9h-31.6v-11.1c-11 9.1-24.9 
										14.2-40 14.2-37.4 0-66.6-28.7-66.6-64.6 0-35.8 29.3-64.6 66.6-64.6 15.1 0 29 5.1 40 14.2v-11zm105 95h-23.8c-7.2 
										0-11.9-3.1-11.9-9.7v-57.5h35.6v-27.8h-35.6v-35h-31.9v35h-24v27.9h24v65.3c0 16.5 11.9 29.6 33.3 29.6h34.2v-27.8zm72 31c36.5 0 57.1-17.1 57.1-40.7 
										0-16.8-12.2-29.3-37.7-34.7l-27-5.4c-15.6-2.8-20.6-5.7-20.6-11.4 0-7.4 7.5-11.9 21.4-11.9 15.1 0 26.1 4 29.3 17.6h31.6c-1.7-25.6-20.6-42.7-58.8-42.7-33 0-56.2 
										13.4-56.2 39.3 0 17.9 12.8 29.6 40.3 35.3l30.1 6.8c11.9 2.3 15.1 5.4 15.1 10.2 0 7.7-9 12.5-23.5 12.5-18.2 0-28.7-4-32.7-17.6h-31.9c4.7 25.6 24.1 42.7 63.5 
										42.7m-442.7-169.6h119.1v28.4h-86.9v40.7h84.6v27.6h-84.6v41.2h86.9v28.4h-119.1z" fill="#06c167"/>
										<path d="m496 66.7v-22.3h-8.5c-13.5 0-23.5 6.2-29.5 15.9v-15h-24.2v121.1h24.4v-68.8c0-18.8 11.6-30.9 27.6-30.9zm-175.6 28c4.4-18.5 19.6-30.9 
										37.7-30.9s33.4 12.3 37.5 30.9zm38.2-51.7c-36 0-63.4 28.7-63.4 62.9 0 36.1 28.5 63.2 65.6 63.2 22.5 0 40.9-9.7 53.2-25.9l-17.7-12.8c-9.2 12.1-21.3 
										17.8-35.6 17.8-20.8 0-37.5-14.7-40.9-34.4h100.4v-7.8c.1-36.2-26-63-61.6-63m-139.6 105.2c-23.7 0-42.6-18.8-42.6-42 0-23.5 19.1-42 42.6-42 23.2 0 
										42.3 18.5 42.3 42 .1 23.2-19 42-42.3 42m-66.5 18.3h24.2v-15.2c11.1 11.2 26.9 18 44 18 36.3 0 64.8-28.3 64.8-63.2 0-35.1-28.5-63.4-64.8-63.4-17.2 0-32.7 
										6.9-43.8 18v-60.5h-24.4zm-85.9-19.5c23.5 0 41.6-17.8 41.6-44.2v-102.6h25.4v166.2h-25.2v-15.4c-11.4 11.6-27.1 18.3-44.8 18.3-36.3 0-64.1-25.9-64.1-65.1v-104h25.5v102.6c0
										26.9 17.9 44.2 41.6 44.2" fill="#142328"/>
									</svg>
								</a>
							) : null
							}
					</div>
					<div className=" text-4xl flex justify-center items-center">
							
						{item.link ? (
							<a href={item.link} target="_blank"  rel="noreferrer" className="text-blue-600 text-sm md:block hover:text-blue-400">
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-4 h-4 inline-block mr-1" viewBox="0 0 52 52" enable-background="new 0 0 52 52">
									<path fill="#2563eb" d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M26,7C26,7,26,7,26,7C26,7,26,7,26,7 
									C26,7,26,7,26,7z M28,7.1c-0.1,0-0.1,0-0.2,0C27.9,7.1,28,7.1,28,7.1z M26,45C15.5,45,7,36.5,7,26c0-1,0.1-2.1,0.3-3  
									c1.3,0.2,2.9,0.7,3.7,1.5c1.7,1.8,3.6,3.9,5.4,4.3c0,0-0.2,0.1-0.4,0.4c-0.2,0.3-0.4,0.9-0.4,1.9c0,4.7,4.4,1.9,4.4,6.6 
									c0,4.7,5.3,6.6,5.3,2.8s3.5-5.6,3.5-8.5s-2.7-2.8-4.4-3.8c-1.8-0.9-2.7-2.4-6.1-1.9c-1.8-1.7-2.8-3.1-2-4.7c0.9-1.7,4.6-2,4.6-4.6
									s-2.5-3.1-4.3-3.1c-0.8,0-2.5-0.6-3.9-1.3c1.7-1.7,3.8-3.1,6-4.1c1.6,0.7,4.3,1.8,6.6,1.8c2.7,0,4.1-1.9,3.7-3.1 
									c4.5,0.7,8.5,3,11.4,6.2c-1.5,0.9-3.5,1.9-7,1.9c-4.6,0-4.6,4.7-1.9,5.6c2.8,0.9,5.6-1.8,6.5,0c0.9,1.8-6.5,1.8-4.6,6.4
									c1.9,4.6,3.7-0.1,5.6,4.5c1.9,4.6,5.6-0.7,2.8-4.3c-1.2-1.6-0.9-6.5,1.9-6.5h0.9c0.4,1.6,0.7,3.3,0.7,5C45,36.5,36.5,45,26,45z"/>
								</svg>{item.name}</a>
							) : null
							}
					</div>
					<div className="row-span-1 text-4xl flex justify-center items-center">
						<div className="bg-orange-100 hover:bg-myorange hover:text-white px-3 py-1 rounded text-xs font-medium text-gray-800 hidden md:block">
							
							<Link className="restoCard" to={`/restaurant/${item.id}`}> Détails</Link>
						</div>				
					</div>
				</div>
				<div className="p-4 bg-gray-50 rounded font-poppins">
				    <h3 className="font-semibold text-gray-600 text-xl">{item.name}</h3>
				    <p className="md:text-lg text-gray-500 text-base">{item.address}</p>
				    <p className="text-lg text-gray-600">{item.city} {item.Zip_code}</p>
				</div>
			    </div>
				
				</div>         
			))}
        </>
    )
}}
export default CardResto;