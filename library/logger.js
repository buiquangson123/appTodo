export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log("Prev State: ", prevState)
        console.log("Action Arguments: ", args)
        // eslint-disable-next-line no-unused-expressions
        arguments
        const nextState = reducer(prevState, action, args)
        console.log("Next State: ", nextState)

        console.groupEnd()

        return nextState
    }
}