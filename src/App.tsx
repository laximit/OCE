import { useState } from 'react'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Story from './components/stories/Story';

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
          <Route path='/story1' element={<Story storyId='1029_1'/>} />
          <Route path='/story2' element={<Story storyId='1029_2'/>} />
          <Route path='/story3' element={<Story storyId='1029_3'/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
