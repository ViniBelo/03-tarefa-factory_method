import { Location } from './Location'
import Game from "./Catergorias/Game";
import IItem from "./Catergorias/Interfaces/IItem";

export default class GameLocation extends Location{
    protected CreateItem(): IItem{
        return new Game()
    }
}