import React, { Component } from 'react'
import Navbar from '../navbar'
import './heder.css'
 export default class Heder extends Component {
     render(){
         return(
             <div className = 'heder'>
                 <div className = 'heder-name'>
                     <div>
                        <div className = 'company'>
                            <h1>Hakvoort</h1>
                            <p>Profesinal</p>                        
                        </div>                        
                        <input type ='text' placeholder = "search" className='search' />
                     </div>    
                 </div>
                 <Navbar/>
             </div>
         )
     }
 }