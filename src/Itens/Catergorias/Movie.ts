import IItem from './Interfaces/IItem'

export default class Movie implements IItem{
    start(): void{
        console.log('Locação de filme iniciada!')
    }
    getDescription(): void {
        console.log('É um filme.')
    }
}