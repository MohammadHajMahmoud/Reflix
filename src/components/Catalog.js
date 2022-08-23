import React, { Component } from 'react';
import Movie from '../components/Movie'
import '../styles/catalog.css'
class Catalog extends Component {
    constructor(props) {
        super();
        this.state = {
          searchInput: "",
          movies: [...props.movies],
        };
      }
    
      handleInput = (event) => {
        this.setState({ searchInput: event.target.value }, () => {
          let movies = [...this.props.movies];
          movies = movies.filter((movie) => movie.title.toLowerCase().includes(this.state.searchInput));
          this.setState({ movies });
        });
      };
    render() {
        const budget = this.props.budget
        return (
            <div>
                
                <div id='budget'>Budget: {budget}&#36;</div>
                <input className="search" placeholder="Search..." type="text" onChange={(event) => this.handleInput(event)} value={this.state.searchInput} />
                <hr>
                </hr>
                <div id='rented'>
                    <p>Rented:</p>
                    {this.state.movies.map((m, i) => {
                        return (
                            m.isRented ?
                                <div key={i}>
                                    <Movie movie={m} toggleRented={this.props.toggleRented} />
                                </div>
                                : null
                        )
                    })}
                </div><hr></hr>
                <div id='catalog'>
                    <p>Catalog:</p>

                    {this.state.movies.map((m, i) => {
                        return (
                            <div key={i}>
                                <Movie movie={m} toggleRented={this.props.toggleRented} />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Catalog;