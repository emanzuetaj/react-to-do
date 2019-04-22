import React, { Component } from 'react';

class FilterOption extends Component {
    changeFilter = () => {
        if (this.props.currentSetting !== this.props.filter) {
            this.props.setFilterHandler(this.props.filter);
        }
    }
    render() {
        return (
            <button onClick={this.changeFilter} disabled={this.props.currentSetting === this.props.filter}>{this.props.text}</button>
        );
    }
}

export default FilterOption;
