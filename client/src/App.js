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
                                    {this.getSkills()}
                                </div>
                            </li>


                            <li id="id-contact">
                                <div className="timeline-badge default"><i className="fa fa-envelope"></i></div>
                                <h1 className="timeline-head">CONTACT</h1>
                            </li>
                            <li>
                                <div className="timeline-badge primary"></div>
                                <div className="timeline-panel">
                                    <h1>Contact Me</h1>
                                    <div className="hr-left"></div>
                                    <p>
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control input-lg" placeholder="Name..."/>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control input-lg" placeholder="E-mail..."/>
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control input-lg" placeholder="Subject..."/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <textarea className="form-control input-lg" rows="7" placeholder="Messages..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-lg btn-primary btn-block">SEND</button>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-badge primary"></div>
                                <div className="timeline-panel">
                                    <h1>Contact Info</h1>
                                    <div className="hr-left"></div>
                                    <div className="row" id="contact">
                                        <div className="col-md-6">
                                            <address>
                                                <strong>Jonathan, Inc.</strong><br/>
                                                795 Folsom Ave, Suite 600<br/>
                                                San Francisco, CA 94107<br/>
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>

                                            <address>
                                                <strong>JONATHAN DOE</strong><br/>
                                                <a href="mailto:#">name@company.com</a>
                                            </address>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                        </div>
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

    getSkills(){
        const profileItems = this.props.Skills.map((profile) =>
            <div key={profile.id} className="skillbar clearfix" data-percent={profile.value+"%"}>
                <div className="skillbar-title"><span>{profile.name}</span></div>
                <div className="skillbar-bar" style={{"width" : profile.value+"%"}}></div>
                <div className="skill-bar-percent">{profile.value}%</div>
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
        Education: state.Education,
        Skills: state.Skills
    }
}

const ConnectedCVPage = connect(mapStateProps)(CVPage);

export default ConnectedCVPage
