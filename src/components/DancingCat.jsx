import { useState } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

function DancingCat({ isAnimating }) {
  return (
    <div className="cat-container">
      <div className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}>
        <img src={catSvg} alt="귀여운 고양이" className="cat-image" />
      </div>

      <div className="stage">
        <div className="spotlight"></div>
        <div className="music-notes">
          {isAnimating && (
            <>
              <span className="note note-1">♪</span>
              <span className="note note-2">♫</span>
              <span className="note note-3">♪</span>
              <span className="note note-4">♫</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DancingCat