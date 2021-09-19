import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { resetFlash } from '../actions/index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const FlashMessage = ({ duration, resetFlash, flash }) => {

    useEffect(() => {
      setTimeout(() => {
        resetFlash()
      }, duration);
     }, [resetFlash, duration]);
    
    const pick = () => {
      switch (flash.type) {
        case 'ERROR':
          return(
            <div className='flash__error'>
              <FontAwesomeIcon className="flash__icon" icon={faExclamationCircle} />
              <p>{flash.message}</p>
            </div>
          )
        case 'SUCCESS':
          return(
            <div className='flash__success'>
              <FontAwesomeIcon className="flash__icon" icon={faCheckCircle} />
              <p>{flash.message}</p>
            </div>
          )  
        default:
          return(
            <div className='flash__unknown'>
               <h1>Unknown error</h1>
            </div>
          )  
      }
    }
  
    return (
      <div className="flash">
        {
            flash? pick() : null
        }
      </div>
    );
  };
  
  const mapStateToProps = ({ flash }) => ({ flash }) 
  
  const mapDispatchToProps = dispatch => ({
    resetFlash: () =>
      dispatch(resetFlash()),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);