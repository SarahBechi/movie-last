import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }


    editer2 = () => {


        this.props.editList2(this.props.match.params.idf, this.props.ImgInput, this.props.NameInputReducer, this.props.YearInputReducer, this.props.RatingInputReducer)
        this.props.history.push('/')


    }


    render() {

        return (<div >


            <div className={this.props.ModalEditReducer}>
                <span className="close-button" onClick={this.props.hideModal} >&times;</span>


                <span>Please edit movie information</span>
                <span className="movieName">Movie Name</span>
                <input className="searchByName" onChange={(n) => this.props.changeNameInput(n.target.value)}></input>
                <span className="movieRate">Rating</span>
                <input className="searchByRate" onChange={(r) => this.props.changeRatingInput(r.target.value)}></input>
                <span className="MovieYear">Year</span>
                <input className="searchByYear" onChange={(y) => this.props.changeYearInput(y.target.value)}></input>
                <span className="MovieSource">Movie Source</span>
                <input className="searchBySource" onChange={(i) => this.props.changeImgInput(i.target.value)}></input>
                <span className="editBtn" onClick={() => this.editer2()}>Edit</span>



            </div>
        </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {


        editList2: (id, src, name, year, r) => {
            dispatch({
                type: 'Edit-MOVIE2', id: id, newi: {

                    src: src,
                    name: name, year: year, rating: r
                },
            });


        },



        changeImgInput: (i) => {
            dispatch({
                type: "CHANGE-IMG-INPUT", im: i
            })
        },

        changeNameInput: (n) => {
            dispatch({
                type: "CHANGE-NAME-INPUT", na: n
            })
        },

        changeRatingInput: (r) => {
            dispatch({
                type: "CHANGE-RATING-INPUT", ra: r
            })
        },

        changeYearInput: (y) => {
            dispatch({
                type: "CHANGE-YEAR-INPUT", yea: y
            })
        },

        hideModal: () => {
            dispatch({
                type: "HIDDEN-MODAL", hiddenModal: "modal",
            })
        },



    }
}





const mapStateToProps = ({ NameInputReducer, ImgInput, RatingInputReducer, YearInputReducer, stateR, ModalEditReducer }) => {
    return {
        NameInputReducer: NameInputReducer,
        ImgInput: ImgInput,
        RatingInputReducer: RatingInputReducer,
        YearInputReducer: YearInputReducer,
        stateR: stateR,
        ModalEditReducer: ModalEditReducer,

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(EditForm)



