import {$cards, $pickedCards, pickOneCard, reset, shuffle} from "./index";
import {sample} from "effector";

$cards.on(shuffle, (cards, _) => cards
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value));

$pickedCards
  .on(sample({
    source: [$cards, $pickedCards],
    clock: pickOneCard,
    fn: ([source, picked]) => source.slice(picked.length, picked.length + 1)
  }), (picked, newPicked) => [...picked, ...newPicked])
  .reset(reset);
