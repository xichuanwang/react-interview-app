/**
 * Pluralizes a word based on the count.
 * 
 * Function will need to be support irregular plural words like "person" -> "people" in the future.
 *  
 * @param count number of items.
 * @param word the word to pluralize
 * @returns 
 */
export const pluralizeWord = (count: number, word: string)=> {
  return count === 1 ? word : `${word}s`;
}