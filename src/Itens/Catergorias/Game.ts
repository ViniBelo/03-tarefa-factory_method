import IItem from './Interfaces/IItem'

export default class Game implements IItem{
    start(): void{
        console.log('Locação de jogo iniciada!')
    }
    getDescription(): void {
        console.log('É um jogo.')
    }
}