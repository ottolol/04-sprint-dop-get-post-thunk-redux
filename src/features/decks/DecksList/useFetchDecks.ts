import { useEffect } from 'react'
import { fetchDecksTC } from '../decks-thunks'
import { useAppDispatch, useAppSelector } from '../../../app/store'

export const useFetchDeck = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector((state) => state.decksReducer.decks)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])

  return {
    decks,
  }
}
