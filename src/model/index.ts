import {createEvent, createStore} from "effector";
import {CARDS} from "../cards";
import {Card} from "../types";

export const $cards = createStore<Card[]>(CARDS);
export const $pickedCards = createStore<Card[]>([]);

export const start = createEvent<any>();
export const shuffle = createEvent<any>();
export const pickOneCard = createEvent<any>();
export const reset = createEvent<any>();
