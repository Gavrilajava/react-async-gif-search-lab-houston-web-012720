import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default class GifListContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      gifList: []
    }
  }

  componentDidMount(){
    this.fetchAndSave("memes")
  }

  fetchAndSave = (keyword) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(json => this.setState({gifList: json.data.slice(0,3)}))
  }

  render(){
    return (
      <div>
        <GifList gifList = {this.state.gifList} />
        <GifSearch fetchAndSave = {this.fetchAndSave}/>
      </div>
    )
  }
}