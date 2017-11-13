import React from 'react'

export default class AddProfile extends React.Component {
  render() {
    return (
      <div>
        <p>Add a new profile</p>
        <button onClick={this.props.add}> Add</button>
      </div>
    )
  }
}
