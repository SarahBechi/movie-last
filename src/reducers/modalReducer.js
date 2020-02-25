const ModalReducer = (classModal = "modal-content", action) => {

    switch (action.type) {

        case "SHOW-MODAL":




            return action.visibleModal


        case "HIDDEN-MODAL":
            return action.hiddenModal           //modal => default : hidden


        default: return classModal
    }
}

export default ModalReducer;
