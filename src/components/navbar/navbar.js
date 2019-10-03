import React,{ Component } from 'react'
import './navbar.css'

export default class Navbar extends Component{
    render(){
        return(
            <div className = 'navbar'>
                <ul>
                    <li>HORECA APARATURE</li>
                    <li>GROOTKEUKENINRICHTING</li>
                    <li>SERVICE & ONDERHOUD</li>
                    <li>KEUKENPROJECTEN</li>
                    <li>OVER ONS</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>  
                </ul>
                
            </div>
        )
    }
}