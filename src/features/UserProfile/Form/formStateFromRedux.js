import React from 'react'
import { connect } from 'react-redux'
import { getFormState } from '../../../store/modules/user/actions'

const FormStateFromRedux = ({ state }) => (
  <pre></pre>
)

export default connect((state, ownProps) => ({
  state: getFormState(state, ownProps.form)
}))(FormStateFromRedux)
