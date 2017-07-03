import React, { Component } from 'react';
import { connect } from 'react-redux'


class CVPage extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e)
    {
        //prevents full page reload
        e.preventDefault();
    }

    renderFullForm(){
        let fullForm = (
                <div id="content">
                    <nav className="navbar navbar-default navbar-static-top" role="navigation">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-left">
                                <li className="page-scroll"><a href="#id-profile">// Profile</a></li>
                                <li className="page-scroll"><a href="#id-work">// Work</a></li>
                                <li className="page-scroll"><a href="#id-resume">// Resume</a></li>
                                <li className="page-scroll"><a href="#id-blog">// Blog</a></li>
                                <li className="page-scroll"><a href="#id-contact">// Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="page-scroll"><a href="#id-work">
                                    <i className="fa fa-angle-double-down"></i>
                                </a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="main-content">
                        <ul className="timeline">
                            <li id="id-profile">
                                <div className="timeline-badge default"><i className="fa fa-user"></i></div>
                                <h1 className="timeline-head">PROFILE</h1>
                            </li>
                                {this.getProfile()}

                            <li id="personal-info">
                                <div className="timeline-badge primary"></div>
                                <div className="timeline-panel">
                                    <h1>Personal Info</h1>
                                    <div className="hr-left"></div>

                                    {this.getPersonal()}

                                </div>
                            </li>


                        </ul>
                    </div>
                </div>


        );
        return fullForm
    }

    getProfile(){
        const profilesItems = this.props.Profiles.map((profile) =>
                <li key={profile.id} id="profile" dangerouslySetInnerHTML={{__html: profile.data}} />
        );

        return profilesItems;
    }

    getPersonal(){
        const profilesItems = this.props.Personal.map((info) =>
            <div className="btn-group" key={info.id}>
                <button type="button" disabled className="btn btn-primary">{info.info_type}</button>
                <button type="button" disabled className="btn btn-default">{info.info_text}</button>
            </div>

        );

        return profilesItems;
    }

    render() {
            return (
                this.renderFullForm()
            );

    }
}

function mapStateProps(state){
    return {
        Profiles: state.Profiles,
        Personal: state.Personal
    }
}

const ConnectedCVPage = connect(mapStateProps)(CVPage)

export default ConnectedCVPage
