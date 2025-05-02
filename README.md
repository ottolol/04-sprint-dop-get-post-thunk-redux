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

Написать get-запрос за `decks` и протипизировать ответ (`fetchDecks`). (Параметры указывать и типизировать не надо).<br>
Отправить запрос при монтировании компонента `DecksList`.

### Задание 2 (redux flow)

Отрисовать колоды, используя `redux state`.<br>
Написать `action creator` (`setDecksAC`).<br>
Написать `case` в `reducer` для этоrо `action` .<br>
Задиспатчить `action` в компоненте `DecksList`.<br>
Получить `decks` из `redux state` в компоненте `DecksList`.<br>
Отрендерить `decks`, используя компонент `Deckitem`.

### Задание 3 (async redux flow)

Вынести асинхронную логику из компонента `DecksList`.<br>
Написать `fetchDecksTC` (файл `decks-thunks.ts`).<br>
Использовать `fetchDecksThunk` в компоненте `DecksList`.

### Задание 4 (post-запрос)

Написать `post-запрос` в `decksAPI` (`addDeck`) - будем работать только с `name`.<br>
Написать `addDeckTC` и `addDeckAC` (+`case` в `decksReducer`).<br>
Задиспатчить `thunk` при отправке формы в компоненте `AddNewDeckForm` (функция `onSubmit`, `name` берём из `data`).
