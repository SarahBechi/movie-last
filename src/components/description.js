import { connect } from 'react-redux';
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="movieDescription">
            {this.props.match.params.description}
        </div>);
    }
}

export default Description;