import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queryString: '',
    }
    this.handleChangeSearch=this.handleChangeSearch.bind(this);
    this.handleButtonClick=this.handleButtonClick.bind(this);
  }

  handleChangeSearch(event){
    this.setState({
      queryString: event.target.value
    })
  }

  handleButtonClick(){
    this.props.handleButtonClick(this.state.queryString);
  }

  render(){
    return(
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleChangeSearch}/>
        <button className="btn hidden-sm-down" onClick={this.handleButtonClick}>
          검색
        </button>
      </div>
    );
  }
};

export default Search;
