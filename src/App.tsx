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
          {/* Histórias */}
          <Route path='/historia/1029_1' element={<Story storyId='1029_1'/>} />
          <Route path='/historia/1032_1' element={<Story storyId='1032_1'/>} />

          {/* Personagens */}
          <Route path='/personagem/laximit' element={<Character characterId='ally1' characterTag='#laximit' />} />
          <Route path='/personagem/lenora' element={<Character characterId='ally2' characterTag='#lenora' />} />
          <Route path='/personagem/seraphine' element={<Character characterId='ally3' characterTag='#seraphine' />} />
          <Route path='/personagem/aera' element={<Character characterId='ally4' characterTag='#aera' />} />
          <Route path='/personagem/fubuki' element={<Character characterId='ally5' characterTag='#fubuki' />} />
          <Route path='/personagem/haruna' element={<Character characterId='ally6' characterTag='#haruna' />} />
          <Route path='/personagem/hiyou' element={<Character characterId='ally7' characterTag='#hiyou' />} />
          <Route path='/personagem/kouji' element={<Character characterId='ally8' characterTag='#kouji' />} />
          <Route path='/personagem/nagael' element={<Character characterId='ally9' characterTag='#nagael' />} />
          <Route path='/personagem/raiya' element={<Character characterId='ally10' characterTag='#raiya' />} />
          <Route path='/personagem/umbraza' element={<Character characterId='ally11' characterTag='#umbraza' />} />
          <Route path='/personagem/drakzor' element={<Character characterId='enemy1' characterTag='#drakzor' />} />
          <Route path='/personagem/duskbane' element={<Character characterId='enemy2' characterTag='#duskbane' />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
