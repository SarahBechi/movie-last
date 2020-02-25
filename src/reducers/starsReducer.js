
const StarsReducer = (state = 5, action) => {

    switch (action.type) {
        case "CHANGE-STAR":

            return action.starSearch      //x : unkonw number of stars

        default: return state
    }
}

export default StarsReducer;


