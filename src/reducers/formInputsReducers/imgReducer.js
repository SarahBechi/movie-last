const ImgInput = (state = "", action) => {

    switch (action.type) {
        case "CHANGE-IMG-INPUT":

            return action.im

        default: return state
    }
}

export default ImgInput;