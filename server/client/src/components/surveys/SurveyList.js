import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
        console.log("SURVEY LIST MOUNTED ");
        console.log("PROPS ARE: ", this.props);
        console.log("SURVEY LIST IS:", this.props.surveys)
    }

    renderSurveys() {
        return this.props.surveys.map(survey => {
            console.log("MAPPING SURVEYS");
            return (
                <div className="card darken-1" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent On:{new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            )
        })
    }

    render() {
        if (this.props.surveys && this.props.surveys.length) {
            console.log("SURVEY OUTPUTS")
            return (
                <div>
                    {this.renderSurveys()}
                </div>
            )
        }
        else {
            console.log("NO SURVEY OUTPUTS")
            return (
                <div></div>
            )
        }
    }
}

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
