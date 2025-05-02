# Дополнительный урок 01 для спринта 04

- [Swagger документация](https://api.flashcards.andrii.es/docs)
- [Пример готового проекта](https://04-sprint-01-add-lesson-flashcards.vercel.app/)

### 1. Install dependencies:

```bash
yarn
```

### 2. Start app:

```bash
yarn run dev
```

# Задание

### Задание 1 (пишем get-запрос)

Написать get-запрос за decks и протипизировать ответ (fetchDecks). (Параметры указывать и типизировать не надо) Отправить запрос при монтировании компонента DecksList

### Задание 2 (redux flow)

отрисовать колоды, используя redux state Написать action creator (setDecksAC) Написать case в reducer для этоrо action Задиспатчить action в компоненте DecksList Получить decks из redux state в компоненте DecksList Отрендерить decks, используя компонент Deckitem

### Задание 3

(async redux flow) Вынести асинхронную логику из компонента DecksList Написать fetchDecksTC (файл decks-thunks.ts) Использовать fetchDecksThunk в компоненте DecksList

### Задание 4 (post-запрос)

Написать post-запрос в decksAPI (addDeck) - будем работать только с name
Написать addDeckTC и addDeckAC (+case в decksReducer)
Задиспатчить thunk при отправке формы в компоненте AddNewDeckForm (функция onSubmit, name берём из data)
