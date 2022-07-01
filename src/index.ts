import { Location } from './Itens/Location'
import GameLocation from './Itens/GameLocation'
import MovieLocation from './Itens/MovieLocation'

declare var process

let location: Location

if(process.argv.includes('game')){
    location = new GameLocation()
} else if(process.argv.includes('movie')){
    location = new MovieLocation()
} else{
    console.error('Selecione um item!')
}

if(location!){
    location.startItem()
}