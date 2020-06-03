import React,{Component} from 'react'
import Ui from './ui'
import './todo.css'
class Todo extends Component{
    constructor(){
        super()
        this.state = {
            name : "",
            todo : []
        }
        
    }
    changehandler = (e) =>{
        this.setState({
            name: e.target.value
        })
    }
    clickhandler = ()=> {
        let input = this.state.name
        let todo = this.state.todo
        todo.push(input)
        this.setState({
            todo : todo,
            name: ""
        })
        // console.log(this.state.todo)
    }
    render(){
        // var ele = this.state.todo.map((element, index) =>
        // <li key={index}>{element}<button>delete</button></li>
        // )
        return(
            <div>
                <h1 id="heading">Todos App</h1>
                <input id="inp" type="text" placeholder="Enter you text here" value={this.state.name} onChange={this.changehandler}/>
                <br />
                <input id="btn" type="submit" value="submit" onClick={this.clickhandler}/>
                {/* <ul>
                    {ele}
                </ul> */}
                <Ui name={this.state.todo} aziz={this.state.name}/>
            
            </div>
        )
    }
}
export default Todo