import React, { Component } from 'react'
import TVT_EventForm1 from './components/TVT_EventForm1'
import TVT_EventForm2 from './components/TVT_EventForm2'
import TVT_EventForm3 from './components/TVT_EventForm3'
import TVT_EventForm4 from './components/TVT_EventForm4'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event form demo</h1>
        <TVT_EventForm1 />
        <TVT_EventForm2 />
        <TVT_EventForm3 />
        <TVT_EventForm4 name="tạ văn thắng"/>
      </div>
    )
  }
}