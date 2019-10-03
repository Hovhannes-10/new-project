import React,{ Component } from 'react'
import Futter from '../futter'
import Heder from '../heder'

export default class App extends Component {
    render() {
     return(
         <div className = 'App'>
             <Heder/>
             <Futter/>
         </div>
     )
        
    }
}