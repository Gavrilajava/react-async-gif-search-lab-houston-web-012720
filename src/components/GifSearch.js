import React from 'react' 

export default class GifSearch extends React.Component {

  constructor() {
    super()
    this.state = {
      searchString: ""
    }
  }

  changeInput = (e) => this.setState({searchString: e.target.value})
  
  submitHandler = (e) => {
    e.preventDefault()
    this.props.fetchAndSave(this.state.searchString)
  }


  render() {
    return(
      <div className = "searchForm">
        <form onSubmit = {this.submitHandler}>
          <input onChange={this.changeInput} type="text" placeholder = "Type here..."></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}