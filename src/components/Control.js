import React from 'react';
import Search from './Search';
import Sort from './Sort';
import Add from './Add';
import { connect } from "react-redux";
import store from './../redux';


class Control extends React.Component {
	constructor(props) {
	    super(props);
    	this.handleToggleShow = this.handleToggleShow.bind(this);
    	this.handleSearchControl = this.handleSearchControl.bind(this);
    	console.log("store:", store.getState());
  	}

  	handleToggleShow() {
  		//this.props.onClickToggleHandle();
  	}

  	handleSearchControl(value) {
  		//this.props.onClickSearch(value);
  	}

	render() {
	    return (
	        <div className="row">
	            {/* SEARCH : START */}
	            <Search onClickSearchControl = {this.handleSearchControl}/>
	            {/* SEARCH : END */}
	            {/* SORT : START */}
	     		<Sort />
	            {/* SORT : END */}
	            {/* ADD : START */}
	        	<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
			        <button type="button" className="btn btn-info btn-block" onClick={this.handleToggleShow}>Add Task</button>
			    </div>
	            {/* ADD : END */}
	        </div>
	    );
	}
}

export default Control;

