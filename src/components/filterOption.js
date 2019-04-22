import React, { Component } from 'react';
class FilterOption extends Component {
    changeFilter = () => {
        this.props.setFilterHandler(this.props.filter)
    }
    render() {
        return (
            <button onClick={this.changeFilter}>{this.props.text}</button>
        );
    }
}

export default FilterOption;
