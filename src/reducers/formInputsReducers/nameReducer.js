const NameInputReducer = (state = "", action) => {

    switch (action.type) {
        case "CHANGE-NAME-INPUT":

            return action.na

        default: return state
    }
}

export default NameInputReducer;