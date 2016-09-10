'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

// require('../../../css/component/common/MainBoard.css')

import './MainBoard.css'

class MainBoard extends React.Component {

    constructor(props) {
        super(props);

        // 设置 state 初始属性
        this.state = {};

    }
    render() {
        return <div className="main-board">
            {this.props.children}
        </div>;
    }

    componentDidMount() {
    }
}
// 设置属性默认值
MainBoard.defaultProps = {
}
// 限制属性类型
MainBoard.propTypes = {
}
MainBoard.contextTypes = {
    store:React.PropTypes.object.isRequired
}
export default MainBoard
