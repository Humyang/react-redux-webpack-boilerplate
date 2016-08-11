import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';



class Home extends React.Component {

    constructor(props) {
        super(props);

        // 设置 state 初始属性
        this.state = {};

    }
    render() {
        return <div >3232222222121222</div>;
    }

    componentDidMount() {
    }
}
// 设置属性默认值
Home.defaultProps = {
}
// 限制属性类型
Home.propTypes = {
};

import { connect } from 'react-redux'
//import { setVisibilityFilter } from '../actions'
//import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    //active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      //dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const HomeWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeWrap
