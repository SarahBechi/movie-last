const YearInputReducer = (state = 0, action) => {

    switch (action.type) {
        case "CHANGE-YEAR-INPUT":

            return action.yea

        default: return state
    }
}

export default YearInputReducer;


