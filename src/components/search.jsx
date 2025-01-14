import React, { Component } from "react";

class Search extends Component {

    state = {
        search: '',
        type: 'all'
    }
    
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }


    handleFilter = (event) => {
        this.setState (()=>({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        });
    }




    render() {
        return <div className="row">

            <div className="input-field">
                <input
                    placeholder="search..."
                    type="search"
                    className="validate"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.handleKey}
                />
                <p>
                    <label>
                        <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type="all"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type="movie"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'movie'} 
                        />
                        <span>Movie</span>
                    </label>
                    <label>
                        <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type="series"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'series'}
                         />
                        <span>Series</span>
                    </label>

                </p>
                <button className='btn' onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
            </div>
        </div>
    }
}

export { Search }