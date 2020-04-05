import React from 'react'

export default class GifList extends React.Component {

  render(){
    return(
      <div>
        {this.props.gifList.map(gif => <img id = {gif.id} src = {gif.images.original.url} alt = {gif.slug}/>)}
      </div>
    )
  }
}