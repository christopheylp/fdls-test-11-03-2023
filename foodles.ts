
type WordOccurrences = { [key: string]: number };
export function getWordsOccurrences(sentence: string, n: number): {} | WordOccurrences {
    if (sentence.length === 0 || n <= 0) return {}

    let allWordArray: string[] = sentence.split(' ')
    let wordsToCount: string[] = allWordArray.filter((word, index) => allWordArray.indexOf(word) === index).sort().reverse()

    let wordsOccurrences: WordOccurrences = initialiseWordOccurrenceObject(wordsToCount)

    allWordArray.forEach(word => {
        if (wordsToCount.includes(word)) {
            wordsOccurrences[word] += 1;
        }
    })

    let sortedWordsOccurrences: WordOccurrences = sortWordsOccurrences(wordsOccurrences)

    return splitWordOccurrence(sortedWordsOccurrences,n)
}

function initialiseWordOccurrenceObject(wordsToCount: string[]): WordOccurrences {
    let wordsOccurrences: WordOccurrences = {};
    wordsToCount.forEach(word => wordsOccurrences[word] = 0)
    return wordsOccurrences
}

function sortWordsOccurrences(wordsOccurrences: WordOccurrences): WordOccurrences {
    return Object.keys(wordsOccurrences).sort((a, b) => wordsOccurrences[b] - wordsOccurrences[a]).reduce((r, k) => (r[k] = wordsOccurrences[k], r), {});
}

function splitWordOccurrence(wordOcc : WordOccurrences, n:number) : WordOccurrences {
    return Object.fromEntries(Object.entries(wordOcc).slice(0, n))
}

module.exports = getWordsOccurrences;
