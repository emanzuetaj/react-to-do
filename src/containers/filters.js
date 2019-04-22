import React, { Component } from 'react';
import FilterOption from '../components/filterOption';

class Filters extends Component {
  render() {
    return (
        <div>
            <FilterOption
                setFilterHandler={this.props.setFilterHandler}
                filter="SHOW_ALL"
                text="All"
            />
            <FilterOption
                setFilterHandler={this.props.setFilterHandler}
                filter="SHOW_INPROGRESS"
                text="In progress"
            />
            <FilterOption
                setFilterHandler={this.props.setFilterHandler}
                filter="SHOW_COMPLETED"
                text="Completed"
            />
        </div>
    );
  }
}

export default Filters;
