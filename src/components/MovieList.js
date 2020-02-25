import { connect } from 'react-redux';
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
class MovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {}

    }




    render() {

        console.log(this.props.StarsReducer)
        return (



            < div >
                <div className="searchArea">

                    <div className="stars">

                        <i className="far fa-star" onClick={() => this.props.changeStar(1)} ></i>
                        <i className="far fa-star" onClick={() => this.props.changeStar(2)}></i>
                        <i className="far fa-star" onClick={() => this.props.changeStar(3)}></i>
                        <i className="far fa-star" onClick={() => this.props.changeStar(4)}></i>
                        <i className="far fa-star" onClick={() => this.props.changeStar(5)}></i> </div>


                    <input placeholder="search..." className="searchBar" onChange={(e) => this.props.changeInput(e)}></input>


                </div>



                <div className="movieCon">

                    {this.props.stateR.filter(el => el.rating <= this.props.StarsReducer || el.name.toUpperCase().includes(this.props.SearchFilterReducer.toUpperCase())
                    )


                        .map((el, i) => {
                            return (

                                <div key={i} className="movieContainer">

                                    <img src={el.src} alt="img-movie" className="moviePoster" />

                                    <p className="name">{el.name}</p>
                                    <p className="year">   {el.year}</p>
                                    <p className="rate">{"".padEnd(el.rating, "*")}</p>

                                    <div className="btns">




                                        <Link to={/description/ + el.description} className="moreBtn">Movie Description</Link>
                                        <span className="removeBtn" onClick={this.props.deleteList}>Remove</span>


                                        <Link to={/edit/ + el.id} className="editBtn">Edit</Link>




                                    </div>
                                    <div>
                                    </div>
                                </div>)
                        }
                        )}
                </div>






            </div >




        )









    }


}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteList: (i) => {
            dispatch({ type: 'DELETE-MOVIE', i })

        },

        editList: (i, kk) => {
            dispatch({
                type: 'Edit-MOVIE', i, newi: kk
            })

        },






        changeInput: (e) => {
            dispatch({ type: "CHANGE-INPUT", search: e.target.value })

        },

        changeStar: (x) => {
            dispatch({ type: "CHANGE-STAR", starSearch: x })

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


    }
}





const mapStateToProps = ({ stateR, StarsReducer, SearchFilterReducer, ModalReducer, NameInputReducer, ImgInput, RatingInputReducer, YearInputReducer }) => {
    return {
        stateR: stateR,
        StarsReducer: StarsReducer,
        SearchFilterReducer: SearchFilterReducer,
        ModalReducer: ModalReducer,
        NameInputReducer: NameInputReducer,
        ImgInput: ImgInput,
        RatingInputReducer: RatingInputReducer,
        YearInputReducer: YearInputReducer,

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(MovieList)



