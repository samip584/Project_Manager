import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as registerAction from '../../action/registerAction';
import { Redirect } from 'react-router-dom';


function Register (props) {
  console.log('redirect', props);
    if (props.redirectFromRegister || window.localStorage.getItem('role') !== 'admin') {
      return <Redirect to = '/'></Redirect>
    }
    return (<div className="row">
            <div className = "col-md-offset-5 col-md-4 text-center">
            <h1 className='text-white'>Register</h1>
            <div className="form-register"><br />
            {props.registerError && <label>{props.registerError}</label>}
            <form 
              onSubmit = { event => {
                event.preventDefault();
                props.userRegister(props.registerFname, props.registerLname, props.registerUsername, props.registerPassword, props.registerRole, props.cookies);
              }}>
              <input 
                onChange = {event => {
                  props.setFname(event.target.value)
                }}
                placeholder = 'Enter First Name'
                type        = "text" 
                value       = {props.registerFname} 
              />
              <br />
              <input 
                onChange = {event => {
                  props.setLname(event.target.value)
                }}
                placeholder = 'Enter LastName'
                type        = "text" 
                value       = {props.registerLname} 
              />
              <br />
              <input 
                onChange = {event => {
                  props.setUsername(event.target.value)
                }}
                placeholder = 'Enter Username'
                type        = "text" 
                value       = {props.registerUsername} 
              />
              <br />
              <input 
                onChange = {event => {
                  props.setPassword(event.target.value)
                }}
                placeholder = 'Enter Password'
                type        = "password" 
                value       = {props.registerPassword} 
              />
              <br />
              <select
              className = "type" 
              id       = "type" 
              name     = "type"
              onChange = {event => { 
                props.setRole(event.target.value)
              }}
            >
              <option key="project manager" value = "project manager">Project Manager</option>
              <option key="team lead" value = "team lead">Team Lead</option>
              <option key="engineer" value = "engineer">Engineer</option>
            </select>
              <button type="submit"></button>
            </form>
            </div>
          </div>
          </div>
        );
}

function mapStateToProps (state) {
  return ({
    registerFname : state.register.registerFname,
    registerLname : state.register.registerLname,
    registerRole : state.register.registerRole,
    registerUsername : state.register.registerUsername,
    registerPassword : state.register.registerPassword,
    registerError    : state.register.registerError, 
    redirectFromRegister : state.register.redirectFromRegister
  });
}

function mapDispatchToProps (dispatch) {
  return {
    setUsername: registerUsername => {
      dispatch(registerAction.setUsername(registerUsername));
    },
    
    setPassword: registerPassword => {
      dispatch(registerAction.setPassword(registerPassword));
    },

    setFname: fname => {
      dispatch(registerAction.setFname(fname));
    },

    setLname: lname => {
      dispatch(registerAction.setLname(lname));
    },

    setRole: role => {
      dispatch(registerAction.setRole(role));
    },

    userRegister: (fname, lname, username, password, role, cookie) => {
      dispatch(registerAction.userRegister(fname, lname, username, password, role, cookie))
    },

    redirect: () => {
      dispatch(registerAction.redirect(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);