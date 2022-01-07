import React, { Component } from 'react'

export default class Todo extends Component {
   constructor(){
      super();
      this.state={
         tasks: [{task:'This is',id:1},{task:'Simple Todo App',id:2},{task:'Made using ReactJs',id:3}],
         currTask:''
      };
   }
   handleInput= (e) => {
      this.setState({currTask:e.target.value});
   }
   handleSubmit= () => {
      this.setState({
         tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
         currTask:''
      });
   }
   handleDelete=(id) =>{
     let narr = this.state.tasks.filter((taskObj) =>{
        return taskObj.id!==id
     })
     this.setState({
        tasks:[...narr]
     })
   }
   render() {
      return (
         <div>
            <h1>Todo App</h1>
            <input type='text' value={this.state.currTask} onChange={this.handleInput}></input>
            <button onClick={this.handleSubmit}>Submit</button>
            <ul>
               {
                  this.state.tasks.map((taskObj) =>(
                     <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
                     </li>
                  ))
               }
            </ul>
         </div> 
      )
   }
}
