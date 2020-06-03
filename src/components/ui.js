import React, { Component } from 'react'
import './ui.css'
export default class Ui extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo : this.props.name,
            name : this.props.aziz,
            
        }
    }
    deletetodo = (e) =>{
        console.log(e.target.id)
        let id = e.target.id
        let todos = this.state.todo
        todos.splice(id,1)
        this.setState({
        todo : todos,
        })
    }

    render() {
        
        var ele = this.props.name.map((element, index) =>
        <li className="li" key={index} >{element}<span id="span"><button  className="btn" onClick={this.deletetodo} id={index}>delete</button></span></li>
        )
        return (
            <div>
               <ul id="ul" >
                    {ele}
               </ul>
            </div>
        )
    }
}
