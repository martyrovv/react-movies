import React, { Component } from "react"
import { Movies } from "../components/movies"
import { Preloader } from "../components/preloader"
import { Search } from "../components/search"


const API_KEY = process.env.REACT_APP_API_KEY;


class Main extends Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false })) 
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true })
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    render() {
        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {
                this.state.loading.length ?
                    (<Preloader />) :
                    (<Movies movies={this.state.movies} />)

            }
        </main>

    }
  
}

export { Main }