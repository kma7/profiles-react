import React from 'react'

import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
    this.addUser = this.addUser.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3000/profiles')
      .then(res => res.json())
      .then(data => {
        this.setState({
          profiles: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addUser(newProfile) {
    this.setState({
      profiles: this.state.profiles.concat(newProfile)
    })
  }

  render() {
    let profiles = this.state.profiles.map( (profile) => {
      return (
        <div>
          <Profile
            name = {profile.name}
            age = {profile.age}
            bio = {profile.bio}
            hobbies = {profile.hobbies} />
        </div>
      )
    })

    return (
      <div>
        {profiles}
        <AddProfile add={this.addUser} />
      </div>
    )
  }
}
