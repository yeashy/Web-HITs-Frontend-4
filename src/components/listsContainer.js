import { connect } from "react-redux";
import React from "react";
import Wrapper from "./Tab";
import { getToDoThunk } from "./store/todoReducer";
import ItemForm from "./Create-Item";

class innerListsContainer extends React.Component {
    componentDidMount() {
        console.log('lists did mount');
        this.props.getToDoThunk();
    }

    render() {
        return (<div>
            <ItemForm {...this.props} />
            <Wrapper {...this.props} />
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todoLists: state.todoSection.todoLists,
    }
}

const ListsContainer = connect(mapStateToProps, { getToDoThunk })(innerListsContainer);
export default ListsContainer;