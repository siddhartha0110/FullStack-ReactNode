import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Welcome to Emaily!!!!!</h1>
                Collect feedback from users about your product!!!

                <div className="row" style={{ marginTop: '100px' }}>
                    <div className="col s12 m6 l4">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.i8NWQuQEfi35zHuxFGLpVQHaHa%26pid%3DApi&f=1"
                            style={{ maxHeight: "12em" }} alt="Lightning"
                        />
                        <h3>Speeds up development</h3>
                        <p>We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.</p>
                    </div>
                    <div className="col s12 m6 l4">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lNba4yW6B_osX7xVzkU_tQHaHa%26pid%3DApi&f=1"
                            style={{ maxHeight: "12em" }} alt="Users"
                        />
                        <h3>User Experience Focused</h3>
                        <p>By utilizing elements and principles of Material Design, we were able to create a framework that focuses on User Experience.</p>
                    </div>
                    <div className="col s12 m6 l4">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Ficonlicious%2Fmisc%2F512%2FSettings-icon.png&f=1&nofb=1"
                            style={{ maxHeight: "12em" }} alt="Support"
                        />
                        <h3>Easy to work with</h3>
                        <p>We have provided detailed documentation as well as specific code examples to help new users get started.</p>
                    </div>

                </div>

                <div style={{ margin: "20px", backgroundColor: "grey" }}>
                    <Link to="/surveys" className="blue btn-flat white-text">
                        Go to Surveys Dashboard
                </Link>
                </div>

                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col l6 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright" style={{ margin: "5px 5px" }}>
                        © 2020 Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Landing;
