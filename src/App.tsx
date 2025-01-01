import { useState } from 'react'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Story from './components/stories/Story';
import Character from './components/characters/Character';
import Homepage from './components/general/Homepage';
import Magic from './components/magics/Magic';

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
          <Route path='/OCE/historia/1029_1' element={<Story storyId='1029_1'/>} />
          <Route path='/OCE/historia/1032_1' element={<Story storyId='1032_1'/>} />

          {/* Personagens */}
          <Route path='/OCE/personagem/laximit' element={<Character characterId='ally1' characterTag='#laximit' />} />
          <Route path='/OCE/personagem/lenora' element={<Character characterId='ally2' characterTag='#lenora' />} />
          <Route path='/OCE/personagem/seraphine' element={<Character characterId='ally3' characterTag='#seraphine' />} />
          <Route path='/OCE/personagem/aera' element={<Character characterId='ally4' characterTag='#aera' />} />
          <Route path='/OCE/personagem/fubuki' element={<Character characterId='ally5' characterTag='#fubuki' />} />
          <Route path='/OCE/personagem/haruna' element={<Character characterId='ally6' characterTag='#haruna' />} />
          <Route path='/OCE/personagem/hiyou' element={<Character characterId='ally7' characterTag='#hiyou' />} />
          <Route path='/OCE/personagem/kouji' element={<Character characterId='ally8' characterTag='#kouji' />} />
          <Route path='/OCE/personagem/nagael' element={<Character characterId='ally9' characterTag='#nagael' />} />
          <Route path='/OCE/personagem/raiya' element={<Character characterId='ally10' characterTag='#raiya' />} />
          <Route path='/OCE/personagem/umbraza' element={<Character characterId='ally11' characterTag='#umbraza' />} />
          <Route path='/OCE/personagem/drakzor' element={<Character characterId='enemy1' characterTag='#drakzor' />} />
          <Route path='/OCE/personagem/duskbane' element={<Character characterId='enemy2' characterTag='#duskbane' />} />

          {/* Magias */}
          <Route path='/OCE/magia/memorathis' element={<Magic magicId='light1' />} />

          {/* Paginas Gerais */}
          <Route path='/' element={<Homepage/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
