import Strike from './Strike';
import Tile from './Tile';

const Board = ({ tiles, onClickTile, playerTurn, strikeClass }) => {
	return (
		<div className="board">
			<Tile
				playerTurn={playerTurn}
				onClick={() => onClickTile([0])}
				value={tiles[0]}
				className="right-border bottom-border"
			></Tile>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onClickTile([1])}
				value={tiles[1]}
				className="right-border bottom-border"
			></Tile>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onClickTile([2])}
				value={tiles[2]}
				className="bottom-border"
			></Tile>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onClickTile([3])}
				value={tiles[3]}
				className="right-border bottom-border"
			></Tile>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onClickTile([4])}
				value={tiles[4]}
				className="right-border bottom-border"
			></Tile>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onClickTile([5])}
				value={tiles[5]}
				className="bottom-border"
			></Tile>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onClickTile([6])}
				value={tiles[6]}
				className="right-border"
			></Tile>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onClickTile([7])}
				value={tiles[7]}
				className="right-border"
			></Tile>
			<Tile
				playerTurn={playerTurn}
				onClick={() => onClickTile([8])}
				value={tiles[8]}
				className=""
			></Tile>
			<Strike className={strikeClass}></Strike>
		</div>
	);
};

export default Board;
