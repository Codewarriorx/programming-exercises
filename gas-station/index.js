/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
export default function(gas, cost) {
    let circuitLength = gas.length;

    /**
     * Lets first check if there is enough gas to complete the circuit.
     */
    let totalGas = gas.reduce((a, b) => a + b, 0);
    let totalCost = cost.reduce((a, b) => a + b, 0);

    if (totalGas < totalCost) {
        return -1;
    }

    // Work through starting points
    for (let startingIdx = 0; startingIdx < circuitLength; startingIdx++) {
        let currentFuel = gas[startingIdx];
        let circuitCompleted = true;

        // Is there enough fuel to get to the next stop?
        if (currentFuel >= cost[startingIdx]) {
            let lastCost = cost[startingIdx];

            circuit: // loop through the circuit
            for (let i = 1; i <= circuitLength; i++) {
                let stop = (startingIdx + i);

                // handle wrap around
                if (stop >= circuitLength) {
                    stop -= circuitLength;
                }

                if (currentFuel < lastCost) {
                    circuitCompleted = false;
                    break circuit;
                }

                currentFuel += gas[stop] - lastCost;
                lastCost = cost[stop];
            }
        } else {
            circuitCompleted = false;
        }

        if (circuitCompleted) {
            return startingIdx;
        }
    }

    return -1;
};