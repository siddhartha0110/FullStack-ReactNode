import React, { Component } from 'react'
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

    state = {
        showReview: false
    }

    renderContent() {
        if (this.state.showReview) {
            return <SurveyFormReview
                onCancel={() => this.setState({ showReview: false })}
            />
        }
        return (
            <div>
                <h2 style={{ textAlign: "center", marginBottom: "10px" }}> New Survey</h2>
                <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <br />
                <div>
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
