'use strict';

export function commonCharsInSentences (sentences: string): { [k: string]: number } {
  let counted: { [k: string]: number } = {};
  for (let i = 0; i < sentences.length; i++) {
	  let currentChar: string = sentences[i];
	  if (counted.hasOwnProperty(currentChar)) {
		  counted[currentChar] += 1;
	  } else {
		  counted[currentChar] = 1;
	  }
  }
  return counted;
}