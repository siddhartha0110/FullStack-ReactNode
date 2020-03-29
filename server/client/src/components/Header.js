import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    checkAuth() {
        switch (this.props.auth) {
            case null:
                return
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                )
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="2" style={{ margin: '0 10px' }}>
                        Credits:{this.props.auth.credits}
                    </li>,
                    <li key="3"><a href="/api/logout"> Logout </a></li>
                ]
        }
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link to={this.props.auth ? '/surveys' : '/'}
                            className="brand-logo">
                            Know Ur Prdct
                     </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.checkAuth()}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Header);
