import GameState from './GameState';

const Reset = ({ gameState, onResetGame }) => {
	if (gameState === GameState.inProgress) return;
	return (
		<button className="reset-button" onClick={onResetGame}>
			Play Again
		</button>
	);
};

export default Reset;
