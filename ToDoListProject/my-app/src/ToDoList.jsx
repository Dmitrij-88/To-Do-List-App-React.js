import React, {useState} from "react"


function ToDoList(){



    const [tasks,setTasks] = useState(["Eat Breakfast", "Shower", "Brush Teeth", "Hoover the house", "Take out the bin"]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){


        setNewTask(event.target.value);

    }

    function addTask(){


        if(newTask.trim() !== ""){
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_,index1) => index1 !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);

        }

    }

    function moveTaskDown(index){

        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);

        }

    }




    return(

        <div className = "to-do-list">

            <h1>To Do List Application</h1>

            <div>
                <input
                type = "text"
                placeholder="Enter a task..."
                value = {newTask}
                onChange = {handleInputChange}
                />

                <button className = "add-button" onClick={addTask}>Add To Tasks</button>




            </div>

            <ol>
                {tasks.map((task,index) => 
                <li key = {index}>
                    <span className = "text">{task}</span>
                    <button className = "move-button"
                    onClick = {() => moveTaskUp(index)}>
                        ⬆️
                    </button>
                    <button className = "move-button"
                    onClick = {() => moveTaskDown(index)}>
                        ⬇️
                    </button>
                    <button className = "delete-button"
                    onClick = {() => deleteTask(index)}>
                        ✅
                    </button>


                </li>
                
                )}

            </ol>


        </div>
    
    
    
    
    
    );

}
export default ToDoList