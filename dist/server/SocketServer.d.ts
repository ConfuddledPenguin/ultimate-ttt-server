import Player from "../tournament/model/Player";
import { Lobby } from '../tournament/model/Lobby';
import { TournamentOptions } from '../tournament/Tournament';
export interface SocketEvents {
    onPlayerConnect(player: Player): void;
    onPlayerDisconnect(player: Player): void;
    onLobbyKick(lobbyToken: string, playerToken: string): Lobby;
    onLobbyBan(lobbyToken: string, playerToken: string): Lobby;
    onLobbyCreate(player: Player): Lobby;
    onLobbyJoin(player: Player, lobbyToken: string, spectating: boolean): Lobby;
    onLobbyTournamentStart(lobbyToken: string, options: TournamentOptions, players: Array<string>): Lobby;
    onLobbyTournamentContinue(lobbyToken: string): Lobby;
    updateStats(): void;
}
export default class SocketServer {
    private io;
    private socketEvents;
    constructor(port: number, socketEvents: SocketEvents);
    emit(type: string, data: {
        type: string;
        payload: any;
    }): void;
    emitInLobby(lobby: string, type: string, data: any): void;
    emitPayload(emitType: string, type: string, payload: any): void;
    private handler;
}
