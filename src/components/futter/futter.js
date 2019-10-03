import React, { Component } from 'react'
import axios from 'axios'
import './futter.css'
export default class Futter extends Component {
    state = {
        name:'',
        firstname:'',
        email:'',
        telefoon:''

    }
    handelChange =  (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handelSubmit =  (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error);    
        })
        this.setState({
            name:'',
            firstname:'',
            email:'',
            telefoon:''
        })
    }
    render(){

        return(
            <div className = 'futter'>
                <div>
                    <div className = 'futter-title'>
                        <h5>CONTACTFORMULIER</h5>
                        <p>Neem contact met mij op</p> 
                    </div>
                    <form onSubmit = {this.handelSubmit}>
                    <label>name:
                       <input type = 'text' id ='name' onChange = {this.handelChange} value = {this.state.name}/> 
                    </label>
                    <label>Bedrijfsnaam:
                      <input type = 'text' id = 'firstname' onChange = {this.handelChange} value = {this.state.firstname}/>  
                    </label> 
                    <label>E-mail:
                       <input type ='mail' id = 'email' onChange = {this.handelChange} value = {this.state.email}/> 
                    </label>
                    <label>Telefoon:
                       <input type ='text' id = 'telefoon' onChange = {this.handelChange} value = {this.state.telefoon}/> 
                    </label>
                    <button className = 'button'>
                         >
                    </button>
                </form>  
                </div>     
            </div>
        )
    }
}