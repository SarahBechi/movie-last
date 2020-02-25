const ModalEditReducer = (classModal = "editMovieForm", action) => {

    switch (action.type) {


        case "HIDDEN-MODAL":
            return action.hiddenModal


        default: return classModal
    }
}

export default ModalEditReducer;