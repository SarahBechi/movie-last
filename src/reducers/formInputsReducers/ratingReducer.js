const RatingInputReducer = (state = 0, action) => {

    switch (action.type) {
        case "CHANGE-RATING-INPUT":

            return action.ra

        default: return state
    }
}

export default RatingInputReducer;