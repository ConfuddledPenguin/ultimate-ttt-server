import { PlayerNumber, PlayerOrTie } from "@socialgorithm/ultimate-ttt/dist/model/constants";
import Player from '../../model/Player';
import GameOptions from './GameOptions';
import GameEvents from './GameEvents';
export default class Game {
    private players;
    private options;
    private events;
    private log;
    private game;
    private currentPlayerIndex;
    private gameStart;
    private gamePromise;
    private resolve;
    winnerIndex: PlayerOrTie;
    gameTime: number;
    constructor(players: Player[], options: GameOptions, events: GameEvents, log: any);
    playGame(): Promise<boolean>;
    handlePlayerMove(player: Player, playerIndex: number): (data: string) => void;
    handleGameWon(winnerIndex: PlayerNumber): void;
    handleGameTied(): void;
    private handleGameEnd;
    private parseMove;
    private writeMove;
    private switchPlayer;
    private playerZero;
    private playerOne;
}