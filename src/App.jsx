import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './App.css'

function App() {
  const { isAnimating, toggleAnimation } = useAnimation(true)

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 댄싱 고양이</h1>
        <p>귀여운 고양이의 신나는 댄스를 감상해보세요!</p>
      </header>

      <main className="app-main">
        <DancingCat isAnimating={isAnimating} />
        <AnimationControls
          isAnimating={isAnimating}
          onToggle={toggleAnimation}
        />
      </main>
    </div>
  )
}

export default App
