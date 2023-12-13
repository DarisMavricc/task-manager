import './tasks.css'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export const Tasks = () => {
    return (
        <div className="tasks">
            <div className="create-task">
                <h1>All Tasks</h1>
                <button>+</button>
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
        </div>
    )
}