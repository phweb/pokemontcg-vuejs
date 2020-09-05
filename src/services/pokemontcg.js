import { http } from './config'

export default {
  listPokemon:() => {
    return http.get()
  }
}