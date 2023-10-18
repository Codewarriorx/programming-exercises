/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
export default function (words, maxWidth) {
    let lines = [];
    let lineWords = [];
    let lineLength = 0;

    // Split words into lines and greedy pack them
    do {
        let word = words.shift();

        /**
         * Determine if the word can fit by adding line length, length of the
         * word, and the number of 1 space gaps required for the words
         */
        if (lineLength + (word.length) + (lineWords.length) <= maxWidth) {
            lineWords.push(word);
            lineLength += word.length;
        } else {
            // word didn't fit, push the line and start a new one
            lines.push(lineWords);
            lineWords = [word];
            lineLength = word.length;
        }
    } while(words.length > 0);
    lines.push(lineWords); // Push the last line

    // Justify the lines
    for (let i = 0; i < lines.length; i++) {
        // Determine total word length to calculate spaces to add
        let totalWordLength = 0;
        lines[i].forEach(word => totalWordLength += word.length);
        let spacesToAdd = maxWidth - totalWordLength;

        // Determine how many spaces to add between words
        let spacePerWord = 0;
        if (lines[i].length > 1) {
            spacePerWord = spacesToAdd / (lines[i].length - 1);
        }

        // If last line, we want to left justify, add 1 space between words
        if (i == lines.length - 1) {
            spacePerWord = 1;
        }

        // Build the line
        let line = '';
        do {
            line += lines[i].shift();

            // Check if there are more words to add
            if (lines[i].length > 0) {
                let spaceCount = Math.ceil(spacePerWord); // Deal with floats
                spacesToAdd -= spaceCount;

                /**
                 * If not last line, and line has more than 1 word left,
                 * recalculate the space to add between each word going forward.
                 * This is to deal with odd number of spaces to add.
                 */
                if (i !== lines.length - 1 && lines[i].length > 1) {
                    spacePerWord = spacesToAdd / (lines[i].length - 1);
                }

                line += new Array(spaceCount + 1).join(' ');
            } else {
                // This is the last word, if space exists, fill it
                line += new Array(maxWidth - line.length + 1).join(' ');
            }
        } while(lines[i].length > 0);

        lines[i] = line;
    }

    return lines;
};