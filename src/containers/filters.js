import React, { Component } from 'react';
import FilterOption from '../components/filterOption';

class Filters extends Component {
  render() {
    return (
        <div className="filters">
            <FilterOption
                setFilterHandler={this.props.setFilterHandler}
                currentSetting={this.props.currentSetting}
                filter="SHOW_ALL"
                text="All"
            />
            <FilterOption
                setFilterHandler={this.props.setFilterHandler}
                currentSetting={this.props.currentSetting}
                filter="SHOW_INPROGRESS"
                text="In progress"
            />
            <FilterOption
                setFilterHandler={this.props.setFilterHandler}
                currentSetting={this.props.currentSetting}
                filter="SHOW_COMPLETED"
                text="Completed"
            />
        </div>
    );
  }
}

export default Filters;
