import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {

        return (
            <StripeCheckout
                name="Emailyyy"
                description="Add 50 Credits to send 50 emails"
                amount={50000}
                currency="INR"
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);