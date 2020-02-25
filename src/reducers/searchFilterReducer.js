const SearchFilterReducer = (state = "", action) => {

    switch (action.type) {
        case "CHANGE-INPUT":
            return action.search //newState (no predefined vlaue => depends on the user)

        default:
            return state
    }
}

export default SearchFilterReducer;