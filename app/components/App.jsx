import React from 'react'

import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: [
        {
          name: 'John',
          age: 30,
          bio: 'enjoys swimming and biking',
          hobbies: ['swimming', 'biking', 'talking']
        },
        {
          name: 'Mark',
          age: 22,
          bio: 'enjoys reading',
          hobbies: ['gardening', 'sleeping']
        }
      ]
    }
    this.addUser = this.addUser.bind(this)
  }
  addUser(e) {
    let user = {
      name: 'Tom',
      age: 18,
      bio: 'enjoys sports',
      hobbies: ['basketball', 'baseball']
    }
    this.setState({
      profiles: this.state.profiles.concat(user)
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
