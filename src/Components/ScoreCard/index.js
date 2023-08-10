const ScoreCard = props => {
  const {score, restartGame} = props

  const restartTheGame = () => {
    restartGame(true)
  }
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <p>{score}</p>
      <button type="button" onClick={restartTheGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default ScoreCard
