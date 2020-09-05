import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://api.pokemontcg.io/v1/cards',
});