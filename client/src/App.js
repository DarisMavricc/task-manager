import './App.css';
import { Sidebar } from './sidebar/sidebar';
import { Tasks } from './tasks/tasks';
import { MdMoreHoriz } from "react-icons/md";

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
      <Tasks />
    </div>
  )
}

export default App;
