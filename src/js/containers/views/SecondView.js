import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux'

class SecondView extends React.Component {

    static defaultProps = {}
    static propTypes = {}

    constructor(props) {
        super(props);
    }
    render() {
        return <div id="container">
            <h1>Hello!</h1>
            </div>;
    }
    componentDidMount() {
        alert('bbb');
    }
}
SecondView.contextTypes = {
    store:React.PropTypes.object.isRequired
};
export default connect()(SecondView);
