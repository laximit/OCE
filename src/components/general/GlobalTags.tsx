import { characters } from "../characters/Characters";
import { stories } from "../stories/Stories";

export const characterTags = characters.flatMap((character) => character.tags);
export const storyTags = stories.flatMap((story) => story.tags);

const uniqueTags = Array.from(new Set([...characterTags, ...storyTags]));

export const globalTags = uniqueTags;