import { connect } from 'react-redux';
import React, { Component } from 'react';
import './App.css';

class MovieAdd extends Component {







    render() {


        return (
            <div className="MovieAdd">
                <span className="AddBtn trigger" onClick={this.props.showModal}>+</span>
                <div className={this.props.classModal}>
                    <div className={this.props.ModalReducer}>
                        <span className="close-button" onClick={this.props.hideModal} >&times;</span>


                        <span>Please enter movie information</span>
                        <span className="movieName">Movie Name</span>
                        <input className="searchByName" onChange={(n) => this.props.changeNameInput(n)} ></input>
                        <span className="movieRate">Rating</span>
                        <input className="searchByRate" onChange={(r) => this.props.changeRatingInput(r)}></input>
                        <span className="MovieYear">Year of release</span>
                        <input className="searchByYear" onChange={(y) => this.props.changeYearInput(y)}></input>
                        <span className="MovieSource">Movie Source</span>
                        <input className="searchBySource" onChange={(i) => this.props.changeImgInput(i)}></input>
                        <button className="addMovie" onClick={() => this.props.addMovie(this.props.NameInputReducer, this.props.ImgInput, this.props.YearInputReducer)} >+</button>




                    </div>
                </div>
            </div >)

    }
}


const mapDispatchToProps = (dispatch) => {
    return {



        changeImgInput: (i) => {
            dispatch({
                type: "CHANGE-IMG-INPUT", im: i.target.value
            })
        },

        changeNameInput: (n) => {
            dispatch({
                type: "CHANGE-NAME-INPUT", na: n.target.value
            })
        },

        changeRatingInput: (r) => {
            dispatch({
                type: "CHANGE-RATING-INPUT", ra: r.target.value
            })
        },

        changeYearInput: (y) => {
            dispatch({
                type: "CHANGE-YEAR-INPUT", yea: y.target.value
            })
        },

        addMovie: (nn, ns, ny, nr) => {
            dispatch({
                type: "ADD-MOVIE", newName: nn, srcnew: ns, newYear: ny, newRating: nr,
            })
        },

        showModal: () => {
            dispatch({
                type: "SHOW-MODAL", visibleModal: "show",
            })
        },


        hideModal: () => {
            dispatch({
                type: "HIDDEN-MODAL", hiddenModal: "modal",
            })
        },

        addMovie: (nn, ns, ny, nr) => {
            dispatch({
                type: "ADD-MOVIE", newName: nn, srcnew: ns, newYear: ny, newRating: nr,
            })
        },


    }
}







const mapStateToProps = ({ ModalReducer, ImgInput, NameInputReducer, RatingInputReducer, YearInputReducer, stateR }) => {
    return {

        ModalReducer: ModalReducer,
        NameInputReducer: NameInputReducer,
        ImgInput: ImgInput,
        RatingInputReducer: RatingInputReducer,
        YearInputReducer: YearInputReducer,
        stateR: stateR

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(MovieAdd)