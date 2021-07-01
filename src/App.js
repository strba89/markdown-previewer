import React from "react";
import './App.css';
import MainPage from "./pages/Main.page";
import {getText} from "./store/text/actions";
import ReactFCCtest from 'react-fcctest';
import {connect} from "react-redux";

class App extends React.Component{
  componentDidMount() {
    this.props.getText()
  }

  render() {
    return [
        <MainPage/>,
        <ReactFCCtest/>
    ];
  }
}

const mapDispatchToProps = dispatch => ({
  getText: (prop) => dispatch(getText(prop))
});
export default connect(
    null,
    mapDispatchToProps
)(App)
