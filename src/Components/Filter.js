

import React, {Component} from 'react';
class Filter extends Component {
   
    render() {
        return (
            <div className="filter">
                <div className="fliter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                    Sort by
                    <select value={this.props.sort} onChange={this.props.sortProduct}>
                            <option>Latest</option>
                            <option value="L">Lowest</option>
                            <option value="H">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Size
                    <select value={this.props.size} onChange={this.props.sortSize}>
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    </select>
                </div>
            </div>
            
        );
    }
}

export default Filter;