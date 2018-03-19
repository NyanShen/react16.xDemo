import React    from 'react';

/*import MMUtile  from 'util/mm.jsx';
import User     from 'service/user.jsx';

const _mm       = new MMUtile();
const _user     = new User();*/

class NavTop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }
    /*componentDidMount(){
        let userInfo = _mm.getStorage('userInfo');
        if(userInfo){
            this.setState({
                userName : userInfo.username || ''
            });
        }
    }
    onLogout(){
        _user.logout().then(res => {
            window.location.href = '/login';
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    }*/
    render() {
        return (
            <div className="navbar navbar-default top-navbar" role="navigation">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#/"><b>HAPPY </b>MMALL</a>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                            <i className="fa fa-user fa-fw"></i>
                            {
                                this.state.userName ?
                                    <span>欢迎，{this.state.userName}</span> :
                                    <span>欢迎</span>
                            }
                            <i className="fa fa-caret-down"></i>
                        </a>

                        <ul className="dropdown-menu dropdown-user">
                            <li className="dropdown-item">
                                <a onClick={this.onLogout}>
                                    <i className="fa fa-sign-out fa-fw"></i> 退出登录
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavTop;