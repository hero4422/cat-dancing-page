function AnimationControls({ isAnimating, onToggle }) {
  return (
    <div className="animation-controls">
      <button onClick={onToggle} className="control-button">
        {isAnimating ? '⏸️ 일시정지' : '▶️ 댄스 시작'}
      </button>
      <p className="control-description">
        {isAnimating ? '고양이가 신나게 춤추고 있어요! 🎵' : '버튼을 눌러 고양이 댄스를 시작해보세요!'}
      </p>
      <p className="keyboard-hint">
        💡 키보드 스페이스바로도 제어할 수 있어요!
      </p>
    </div>
  )
}

export default AnimationControls