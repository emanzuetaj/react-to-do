import React, { Component } from 'react';

class FilterOption extends Component {
    changeFilter = () => {
        if (this.props.currentSetting !== this.props.filter) {
            this.props.setFilterHandler(this.props.filter);
        }
    }
    render() {
        if (this.props.currentSetting === this.props.filter) {
            return (
                <button onClick={this.changeFilter} disabled>{this.props.text}</button>
            );
        } else {
            return (
                <button onClick={this.changeFilter}>{this.props.text}</button>
            );
        }
    }
}

export default FilterOption;
