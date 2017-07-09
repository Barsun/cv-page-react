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
                                <li className="page-scroll"><a href="#id-resume">// Resume</a></li>
                                <li className="page-scroll"><a href="#id-blog">// Blog</a></li>
                                <li className="page-scroll"><a href="#id-contact">// Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="page-scroll"><a href="#id-resume">
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

                            <li id="id-resume">
                                <div className="timeline-badge default"><i className="fa fa-file"></i></div>
                                <h1 className="timeline-head">RESUME</h1>
                            </li>
                            <li id="resume">
                                <div className="timeline-badge warning"></div>
                                <div className="timeline-panel">
                                    <h1>Work Experience</h1>
                                    <div className="hr-left"></div>

                                    {this.getWorkExperience()}

                                </div>
                            </li>
                            <li id="resume">
                                <div className="timeline-badge warning"></div>
                                <div className="timeline-panel">
                                    <h1>Education</h1>
                                    <div className="hr-left"></div>
                                    {this.getEducation()}
                                </div>
                            </li>



                            <li>
                                <div className="timeline-badge warning"></div>
                                <div className="timeline-panel">
                                    <h1>Skills</h1>
                                    <div className="hr-left"></div>
                                    <div className="skillbar clearfix " data-percent="90%">
                                        <div className="skillbar-title" ><span>HTML5</span></div>
                                        <div className="skillbar-bar" ></div>
                                        <div className="skill-bar-percent">90%</div>
                                    </div>

                                    <div className="skillbar clearfix " data-percent="85%">
                                        <div className="skillbar-title" ><span>CSS3</span></div>
                                        <div className="skillbar-bar" ></div>
                                        <div className="skill-bar-percent">85%</div>
                                    </div>

                                    <div className="skillbar clearfix " data-percent="70%">
                                        <div className="skillbar-title" ><span>jQuery</span></div>
                                        <div className="skillbar-bar" ></div>
                                        <div className="skill-bar-percent">70%</div>
                                    </div>

                                    <div className="skillbar clearfix " data-percent="50%">
                                        <div className="skillbar-title"><span>PHP</span></div>
                                        <div className="skillbar-bar" ></div>
                                        <div className="skill-bar-percent">50%</div>
                                    </div>


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

    getWorkExperience(){
        const profileItems = this.props.WorkExperience.map((profile) =>
            <div className="work-experience" key={profile.id}>
                <h3>{profile.position}</h3>
                <small><i className="fa fa-calendar"></i> {profile.date_start} - {profile.date_end}</small>
                <p>{profile.description}</p>
            </div>
        );

        return profileItems;
    }

    getEducation(){
        const profileItems = this.props.Education.map((profile) =>
            <div className="work-experience" key={profile.id}>
                <h3>{profile.institution_name}</h3>
                <small><i className="fa fa-calendar"></i> {profile.date}</small>
                <p>{profile.description}</p>
            </div>
        );

        return profileItems;
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
        Personal: state.Personal,
        WorkExperience: state.WorkExperience,
        Education: state.Education
    }
}

const ConnectedCVPage = connect(mapStateProps)(CVPage)

export default ConnectedCVPage
