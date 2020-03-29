import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';

function SurveyFormReview({ onCancel, formValues, submitSurvey, history }) {

    const reviewFields = _.map(formFields, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        )
    })

    return (
        <div style={{ textAlign: "center" }}>
            <h3 style={{ marginBottom: "20px" }} >Confirm Your Survey Information</h3>
            <br />
            {reviewFields}
            <button
                className="yellow darken-3 btn-flat left"
                onClick={onCancel}
                style={{ marginTop: "20px" }}
            >
                Back
            </button>
            <button
                onClick={() => submitSurvey(formValues, history)}
                className="green btn-flat right white-text"
                style={{ marginTop: "20px" }}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));