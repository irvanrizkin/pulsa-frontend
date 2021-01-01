import React, { Component } from 'react';

class LeaderboardItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.operator}</td>
                <td>{this.props.number}</td>
            </tr>
        );
    }
}

export default LeaderboardItem;