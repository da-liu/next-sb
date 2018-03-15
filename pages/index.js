import { Component } from 'react'
import Counter from '../components/Counter'

export class App extends Component {

  render() {
    return (
      <div>
        <h1>Test</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Counter title="test" />
        <div className='img'></div>
        <img src="/static/small.png" width="300" alt=""/>
      </div>
    )
  }
}

export default App
