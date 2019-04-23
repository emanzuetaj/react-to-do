import React, { Component } from 'react';

class FilterOption extends Component {
    changeFilter = () => {
        if (this.props.currentSetting !== this.props.filter) {
            this.props.setFilterHandler(this.props.filter);
        }
    }
    render() {
        return (
            <button onClick={this.changeFilter} className={this.props.currentSetting === this.props.filter ? 'active' : ''}>{this.props.text}</button>
        );
    }
}

export default FilterOption;
