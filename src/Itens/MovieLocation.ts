import { Location } from './Location'
import Movie from "./Catergorias/Movie";
import IItem from "./Catergorias/Interfaces/IItem";

export default class GameLocation extends Location{
    protected CreateItem(): IItem{
        return new Movie()
    }
}