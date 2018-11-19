import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => ({
  res: state
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({type: 'ADD'}),
  remove: () => dispatch({type: 'REMOVE'}),
  addten: () => dispatch({type: 'ADDTEN'}),
  removeten: () => dispatch({type: 'REMOVETEN'}),
  reset: () => dispatch({type: 'RESET'})
});

class Counter extends Component {
  render() {
    return (
      <div> 
          <p>{this.props.res}</p>
        <button id="add" onClick={()=> this.props.add()}>+</button>
        <button id="remove" onClick={()=> this.props.remove()}>-</button>
        <button id="addten" onClick={()=> this.props.addten()}>+ 10</button>
        <button id="removeten" onClick={()=> this.props.removeten()}>- 10</button>
        <button id="reset" onClick={()=> this.props.reset()}>reset</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);