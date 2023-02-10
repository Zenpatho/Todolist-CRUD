import { useState, useEffect } from "react";
import { Test } from "./Test";
import { Input } from "./Input"; 

function Index() {
  
  const [todolist, setTodoList] = useState([])

  const [newtask, setNewTask] = useState("")

   
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleClick = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
     taskName: newtask,
    }
    setTodoList([...todolist, task])
  }

  const handleDelete = (id) => { 
    setTodoList(todolist.filter((task) => task.id !== id))
  }

  return (
    <section className="vh-100" style={{backgroundColor: "#eee"}}>
     <div className="container py-5 h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
      <div className="col-12">
      <div className="card rounded-3">
      <div className="card-body p-4">
      <h4 className="text-center my-3 pb-3">To Do App</h4>
        <div className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                <Input 
                handleChange={handleChange}
                handleClick={handleClick}
                />
              </div>        
      </div>
   
        <table className="table">
              <thead>
                <tr scope="row">
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                  
                </tr>
              </thead>
              {todolist.map((task) => {
                return <Test 
                taskName={task.taskName}
                id={task.id}
                deleteTask={handleDelete}
                />
              })}
            </table>
      
     </div>
     </div>
     </div>
     </div>
     </div>

     </section>
  )  
}

export default Index;
