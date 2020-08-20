import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import { Redirect } from 'react-router-dom'



const ProjectDetails = (props) => {
    const { project, auth } = props
        if(!auth.uid) return <Redirect to='/signin'/>
  return (
    <>
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-container">
                    <span className="card-title">{project && project.title}</span>
                    <p>{project && project.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{ project && `${project.authorFirstName} ${project.authorLastName}`}</div>
                    <div> { project && project.createdAt && moment(project.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    </>
  )
}

const mapStateToPros = (state, ownProps) => {
    const { id } = ownProps.match.params
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToPros),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)
