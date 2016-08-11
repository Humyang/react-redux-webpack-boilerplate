import React from 'react'
import { connect } from 'react-redux'

import NavLink from '../../component/common/NavLink.js'
import MainBoard from '../../component/common/MainBoard.js'

class Tabs extends React.Component {

    constructor(props) {
        super(props);

        // 设置 state 初始属性
        this.state = {};

    }
    render() {
        return <div>
            <ul>
                {/*<li><NavLink to="/" onlyActiveOnIndex={true}>home page</NavLink></li>
                <li><NavLink to="/secondview" >to secondview</NavLink></li>
                <li><NavLink to="/thirdlyview" >to thirdlyview</NavLink></li>
                <li><NavLink to="/repos" >to repos</NavLink></li>
                <li><NavLink to="/tabs" >tabs</NavLink></li>*/}
                <li><NavLink to='/tabs/wordlist'>WordList</NavLink></li>
                <li><NavLink to='/tabs/datapanel'>DataPanel</NavLink></li>
                <li><NavLink to='/tabs/datapanel/add'>InputWord</NavLink></li>
            </ul>
            <MainBoard>
                 {this.props.children}
            </MainBoard>

        </div>;
    }

    componentDidMount() {
    }
}
// 设置属性默认值
Tabs.defaultProps = {
}
// 限制属性类型
Tabs.propTypes = {
};

//
// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }



const TabsContainer = connect()(Tabs)

export default TabsContainer
