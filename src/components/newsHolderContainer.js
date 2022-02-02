import { connect } from "react-redux";
import NewsHolder from "./News-holder";
import { getNews, requestNewsThunk } from "./store/newsReducer";
import React from "react";

class InnerNewsContainer extends React.Component {
    componentDidMount() {
        this.props.requestNewsThunk();
    }
    render() {
        return (<NewsHolder {...this.props} />)
    }
}

function mapStateToProps(state) {
    return {
        news: state.newsSection.news,
        isLoaded: state.newsSection.isLoaded
    }
}

const GetNewsContainer = connect(mapStateToProps, { getNews, requestNewsThunk })(InnerNewsContainer);

export default GetNewsContainer;