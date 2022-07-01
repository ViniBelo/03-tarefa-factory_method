import IItem from "./Catergorias/Interfaces/IItem";

export abstract class Location{
    startItem(){
        const item = this.CreateItem()
        item.start()
    }
    protected abstract CreateItem(): IItem
}