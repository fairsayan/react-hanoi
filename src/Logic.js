import _ from 'lodash'

function next(steps, numOfDiscsToMove, from, to, support) {
    const newState = _.cloneDeep(steps[steps.length - 1])
    const fromPeg = newState[from]
    const toPeg = newState[to]

    if (numOfDiscsToMove === 1) {
        const disc = fromPeg.shift()
        toPeg.unshift(disc)
        steps.push(newState)
        console.info(`Moving disc ${disc} from position ${from} to ${to}`)
        return
    }

    next(steps, numOfDiscsToMove - 1, from, support, to)
    next(steps, 1, from, to, support)
    next(steps, numOfDiscsToMove - 1, support, to, from)
}

export default function getStates(numOfDiscs) {
    let discs = []
    for (let i = 1; i <= numOfDiscs; i++) discs.push(i)

    const steps = [
        [
            discs,
            [],
            []
        ]
    ]
    
    next(steps, numOfDiscs, 0, 2, 1)
    return steps
}