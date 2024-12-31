import { useState } from 'react'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Story from './components/stories/Story';
import Character from './components/characters/Character';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(prevState => !prevState);
  };

  return (
    <Router>
      <div>
        <Header toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible}/>
        <Sidebar isVisible={isSidebarVisible}/>

        <Routes>
          <Route path='/historia/1029_1' element={<Story storyId='1029_1'/>} />
          <Route path='/historia/1029_2' element={<Story storyId='1029_2'/>} />
          <Route path='/historia/1029_3' element={<Story storyId='1029_3'/>} />
          <Route path='/personagem/laximit' element={
            <Character 
              characterId='ally1' characterTag='#laximit' 
            />
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
