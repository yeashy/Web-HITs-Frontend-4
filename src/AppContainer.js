import { connect } from "react-redux";
import App from "./App";
import React from "react";
import { loginThunk } from "./components/store/todoReducer";

class AppInnerContainer extends React.Component{
    componentDidMount(){
        console.log("App did mount");
        this.props.loginThunk();
    }
    render(){
        return <App/>
    }

}

const AppContainer = connect((state)=>{}, {loginThunk})(AppInnerContainer);

export default AppContainer;