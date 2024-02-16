import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    firstNameError: false,
    lastNameError: false,
    isFormSubmitted: false,
  }

  onBlurLastName = () => {
    const isLastNameValid = this.validateLastName()
    this.setState({lastNameError: !isLastNameValid})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({lastNameInput: value})
  }

  renderLastName = () => {
    const {lastNameInput, lastNameError} = this.state
    const className = lastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="label" htmlFor="input">
          LAST NAME
        </label>
        <input
          type="text"
          id="input"
          className={className}
          value={lastNameInput}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isFirstNameValid = this.validateFirstName()
    this.setState({firstNameError: !isFirstNameValid})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({firstNameInput: value})
  }

  renderFirstName = () => {
    const {firstNameInput, firstNameError} = this.state
    const className = firstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="label" htmlFor="input">
          FIRST NAME
        </label>
        <input
          type="text"
          id="input"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastNameInput} = this.state
    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state
    return firstNameInput !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isFirstNameValid = this.validateFirstName()
    const isLastNameValid = this.validateLastName()

    if (isFirstNameValid && isLastNameValid) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameError: !isFirstNameValid,
        lastNameError: !isLastNameValid,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationFrom = () => {
    const {firstNameError, lastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstName()}
        {firstNameError && <p className="error-msg">Required</p>}
        {this.renderLastName()}
        {lastNameError && <p className="error-msg">Required</p>}
        <button
          type="button"
          className="submit-btn"
          onClick={this.onSubmitForm}
        >
          Submit
        </button>
      </form>
    )
  }

  onclickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmissionSuccess = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success-icon"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onclickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="container">
        <h1 className="heading">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccess()
            : this.renderRegistrationFrom()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
