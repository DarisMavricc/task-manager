
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { TiDelete } from "react-icons/ti";
import { Sidebar } from "../sidebar/sidebar";


export const Completed = () => {

    const addTask = () => {
        document.querySelector('.new-task').style.display = 'block';

    }

    const closeTask = () => {
        document.querySelector('.new-task').style.display = 'none';
    }

    async function createTask(){
        console.log('createed');
    }

    async function CompleteTask(e) {
        /* e.target.style.backgroundColor = 'red';
        e.target.innerText = 'Incomplete'; */
    }

    async function DeleteTask(e) {

    }

    return (
        <div className="page">
        <Sidebar />
            <div className="tasks">
                <div className="create-task">
                    <h1>All Tasks</h1>
                    <button onClick={addTask}>+</button>
                </div>
                <div className="all-tasks">
                    <div className="task">
                        <h1>Hello World</h1>
                        <p>Hello World here</p>
                        <p className='date'>12/3/2023</p>
                        <div className="buttons">
                            <button className='complete'>Complete</button>
                            <button className='delete'><MdDelete/></button>
                            <button className='edit'><CiEdit/></button>
                        </div>
                    </div>
                </div>
                <div className="new-task">
                    <div className="task-elements">
                        <button class="closeTask" onClick={closeTask}>X</button>
                        <h1>Create a task</h1>
                        <label for="Title">Title</label>
                        <input type="text" placeholder='Tittle of your task'/>
                        <label for="Description">Description</label>
                        <textarea class="description" placeholder='Write some description about your task'/>
                        <label for="Date">Date</label>
                        <input type="date"/>
                        <div className="toggle">
                            <div className="toggle-completed">
                                <p>Toggle Completed</p>
                                <input type="checkbox" onChange={(e) => console.log(e.target.checked)}/>
                            </div>
                            <div className="toggle-important">
                                <p>Toggle Important</p>
                                <input type="checkbox" onChange={(e) => console.log(e.target.checked)}/>
                            </div>
                        </div>
                        <button class="create-task-btn" onClick={(e) => createTask()}>+ Create Task</button>
                    </div>
                </div>
                <div className="alert">
                    <ImCheckboxChecked style={{color: 'green',width: '20',height: '20',padding: '15'}}/>
                    <p>Task Completed</p>
                </div>
                <div className="task-created">
                    <ImCheckboxChecked style={{color: 'green',width: '20',height: '20',padding: '15'}}/>
                    <p>New Task Created</p>
                </div>
                <div className="task-deleted">
                    <TiDelete style={{color: 'red',width: '20',height: '20',padding: '15'}}/>
                    <p>Task Deleted</p>
                </div>
            </div>
        </div>
    )
}