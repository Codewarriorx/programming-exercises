/**
 * @param {number[]} ratings
 * @return {number}
 */
export default function(ratings) {
    let candyCount = 0;

    let iCandies = [];
    let jCandies = [];

    let j = ratings.length - 1;
    for (let i = 0; i < ratings.length; i++) {
        let tmpICandy = 1;
        let tmpJCandy = 1;

        // If we can look back and check if it's less than the current one
        if (i > 0 && ratings[i] > ratings[i-1]) {
            /**
             * Because they need to get more candy than the previous child,
             * add the previous child's candy count
             */
            tmpICandy += iCandies[iCandies.length - 1];
        } else {
            /**
             * If we can, look forward and check if it's less than the current
             * one then add 1 candy
             */
            if (i < ratings.length && ratings[i] > ratings[i+1]) {
                tmpICandy++;
            }
        }

        // This is a repeat of above, but for the other direction
        if (j < ratings.length - 1 && ratings[j] > ratings[j+1]) {
            tmpJCandy += jCandies[0];
        } else {
            if (j > 0 && ratings[j] > ratings[j-1]) {
                tmpJCandy++;
            }
        }

        iCandies.push(tmpICandy);
        jCandies.unshift(tmpJCandy);

        j--;
    }

    /**
     * This is a greedy approach, but it works because the child will always
     * get more candy than the prior one if they have a higher rating
     */
    for (let i = 0; i < ratings.length; i++) {
        candyCount += Math.max(iCandies[i], jCandies[i]);
    }

    return candyCount;
};