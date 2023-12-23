import './App.css';
import { Sidebar } from './sidebar/sidebar';
import { Tasks } from './tasks/tasks';
import { MdMoreHoriz } from "react-icons/md";
import { Important} from './important/important'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Completed } from './completed/completed';
import {Incomplete} from './incomplete/incomplete'
import { Logout } from './logout/logout';

function App() {
  const ShowMore = () => {
      let sidebar = document.querySelector('.sidebar');
      if(String(sidebar.style.width) ===  '0px'){
        sidebar.style.width = '200px';
      } else {
        sidebar.style.width = '0px';
      }
      
  }
  return (
    <div class="App">
      <div className="more">
                <button onClick={ShowMore}><MdMoreHoriz style={{height:'50',width:'50',color:'white'}}/></button>
      </div>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks />}/>
            <Route index element={<Tasks />} />
            <Route path="important" element={<Important />} />
            <Route path="completed" element={<Completed />} />
            <Route path="incomplete" element={<Incomplete />} />
            <Route path="logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
