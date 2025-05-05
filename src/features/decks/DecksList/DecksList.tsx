import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem'
import { useFetchDeck } from './useFetchDecks'

export const DecksList = () => {
  // Вынесли логику получения decks в собственный ХУК - useFetchDeck
  const { decks } = useFetchDeck()

  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
