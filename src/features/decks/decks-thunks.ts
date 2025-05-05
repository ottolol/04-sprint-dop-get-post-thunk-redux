import { Dispatch } from 'redux'
import { AddDecksParams, decksAPI } from './decks-api'
import { addDeckAC, setDecksAC } from './decks-reducer'
import { AppDispatch } from '../../app/store'

// Асинхронный thunk для загрузки колод
// Санка - функция, которая будет принимать dispatch из Redux
export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeckTC = (params: AddDecksParams) => (dispatch: Dispatch) => {
  // пишем return, Для того, чтобы можно было вернуть промис
  return decksAPI.addDeck(params).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}
