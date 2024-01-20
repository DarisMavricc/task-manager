import './tasks.css'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { TiDelete } from "react-icons/ti";
import { Sidebar } from '../sidebar/sidebar';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AuthContext } from '../context/Auth';
import { useContext, useState } from 'react';

export const Tasks = () => {

    const [title,setTitle] = useState('');
    const [bio,setBio] = useState('');
    const [date,setDate] = useState('');
    const [completed,setCompleted] = useState(false);
    const [important,setImportant] = useState(false);
    const [err,setErr] = useState(null);
    const [id,setId] = useState(null);

    const {currentUser} = useContext(AuthContext);

    const queryClient = useQueryClient();
    
    const {data,isLoading} = useQuery({
        queryFn: async() => await axios.get('http://localhost:8080/api/tasks/getTasks',{params: { email: currentUser?.email }}).then(res => {return res.data}),
        queryKey: ["tasks"],
    });


    const mutation = useMutation({
        mutationFn: async(changes) => {
          await axios.post('http://localhost:8080/api/tasks/updateTask',changes)
        },
        onSuccess: ()=> {
            return queryClient.invalidateQueries(["tasks"]);
        }
      })

      const deleteTask = useMutation({
        mutationFn: async(id) => {
            await axios.delete(`http://localhost:8080/api/tasks/deleteTask/${id}`);
        },
        onSuccess: ()=> {
            return queryClient.invalidateQueries(["tasks"]);
        }
      })

      const TaskCreation = useMutation({
        mutationFn: async(task) => {
            await axios.post("http://localhost:8080/api/tasks/addTask", task, {
                withCredentials: true,
            });
        },
        onSuccess: ()=> {
            return queryClient.invalidateQueries(["tasks"]);
        }
      })

      const EditTask = useMutation({
        mutationFn: async(task) => {
            await axios.post("http://localhost:8080/api/tasks/editTask", task, {
                withCredentials: true,
            });
        },
        onSuccess: ()=> {
            return queryClient.invalidateQueries(["tasks"]);
        }
      })


    const addTask = () => {
        document.querySelector('.new-task').style.display = 'block';
    }

    const closeTask = () => {
        document.querySelector('.new-task').style.display = 'none';
    }

    const closeEditTask = () => {
        document.querySelector('.edit-task').style.display = 'none';
    }

    const createTask = async() => {
        if(title && bio && date){
            const task = {
                email: currentUser?.email,
                name: title,
                bio: bio,
                date: date,
                important: important,
                completed: completed
            }
            try {
                TaskCreation.mutate(task);
            }catch(err){
                console.log(err);
            }
            document.querySelector('.new-task').style.display = 'none';
            document.querySelector('.task-created').style.display = 'flex';
                setTimeout(() => {
                    document.querySelector('.task-created').style.display = 'none';
            }, 1500); 
        }else {
            setErr('You should fill all fields!');
        }
    }

    const updateTask = async(e) => {
        const changes = {
            id: e._id,
        }

        try {
            mutation.mutate(changes);
            document.querySelector('.alert').style.display = 'flex';
            setTimeout(() => {
                document.querySelector('.alert').style.display = 'none';
            }, 1500); 
        }catch(err){
            console.log(err);
        }
    }

    const editTask = () => {

        const newTitle = document.querySelector('#edit-task-title').value;
        const newBio = document.querySelector('#edit-task-bio').value;
        const newDate = document.querySelector('#edit-task-date').value
        const newCompleted = document.querySelector('.edit-task-completed').checked;
        const newImportant = document.querySelector('.edit-task-important').checked;
            const task = {
                id: id,
                email: currentUser?.email,
                name: newTitle,
                bio: newBio,
                date: newDate,
                important: newImportant,
                completed: newCompleted
            }
            try {
                EditTask.mutate(task);
            }catch(err){
                console.log(err);
            }
            document.querySelector('.edit-task').style.display = 'none';
    }

    const changeTask = (task) => {
        setId(task._id);
        document.querySelector('.edit-task').style.display = 'block';
        document.querySelector('#edit-task-title').value = task.name;
        document.querySelector('#edit-task-bio').value = task.bio;
        document.querySelector('#edit-task-date').value = task.date;
        document.querySelector('.edit-task-completed').checked = task.completed;
        document.querySelector('.edit-task-important').checked = task.important;
    }

    const DeleteTask = async(e) => {
        try {
            deleteTask.mutate(e._id);
            document.querySelector('.task-deleted').style.display = 'flex';
            setTimeout(() => {
                document.querySelector('.task-deleted').style.display = 'none';
            }, 1500); 
        }catch(err){
            console.log(err);
        }
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
                {data?.map((task) => {
                    return (
                        <div className="task">
                            <h1>{task?.name}</h1>
                            <p>{task?.bio}</p>
                            <p className='date'>{task?.date}</p>
                            <div className="buttons">
                                <button onClick={() => updateTask(task)} className={task?.completed ? 'complete' : 'incomplete'}>{task?.completed ? 'Completed' : 'Incomplete'}</button>
                                <button onClick={() => DeleteTask(task)} className='delete'><MdDelete/></button>
                                <button onClick={() => changeTask(task)} className='edit'><CiEdit/></button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="new-task">
                <div className="task-elements">
                    <button class="closeTask" onClick={closeTask}>X</button>
                    <h1>Create a task</h1>
                    {err && <p style={{marginTop: '2px',marginBottom: '5px',color: 'red'}}>{err}</p>}<br/>
                    <label for="Title">Title</label>
                    <input type="text" placeholder='Tittle of your task' onChange={(e) => setTitle(e.target.value)}/>
                    <label for="Description">Description</label>
                    <textarea class="description" placeholder='Write some description about your task' onChange={(e) => setBio(e.target.value)}/>
                    <label for="Date">Date</label>
                    <input type="date" onChange={(e) => setDate(e.target.value)}/>
                    <div className="toggle">
                        <div className="toggle-completed">
                            <p>Toggle Completed</p>
                            <input type="checkbox" onChange={(e) => setCompleted(e.target.checked)}/>
                        </div>
                        <div className="toggle-important">
                            <p>Toggle Important</p>
                            <input type="checkbox" onChange={(e) => setImportant(e.target.checked)}/>
                        </div>
                    </div>
                    <button class="create-task-btn" onClick={(e) => createTask()}>+ Create Task</button>
                </div>
            </div>
            <div className="edit-task">
                <div className="task-elements">
                    <button class="closeTask" onClick={closeEditTask}>X</button>
                    <h1>Edit task</h1>
                    {err && <p style={{marginTop: '2px',marginBottom: '5px',color: 'red'}}>{err}</p>}<br/>
                    <label for="Title">Title</label>
                    <input type="text" id="edit-task-title"/>
                    <label for="Description">Description</label>
                    <textarea class="description" id="edit-task-bio"/>
                    <label for="Date">Date</label>
                    <input type="date" id="edit-task-date"/>
                    <div className="toggle">
                        <div className="toggle-completed">
                            <p>Toggle Completed</p>
                            <input type="checkbox" className="edit-task-completed"/>
                        </div>
                        <div className="toggle-important">
                            <p>Toggle Important</p>
                            <input type="checkbox" className="edit-task-important"/>
                        </div>
                    </div>
                    <button class="create-task-btn" onClick={() => editTask()}>+ Edit Task</button>
                </div>
            </div>
            <div className="alert">
                <ImCheckboxChecked style={{color: 'green',width: '20',height: '20',padding: '15'}}/>
                <p>Task Updated</p>
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