import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Movie extends Component {
  toggleRented = () => {
        this.props.toggleRented(this.props.movie.id)
    }
    render() {

        const movie = this.props.movie
        const isRented = movie.isRented
        return (
            <div >
                {!isRented ?
                    <div className='movie'>
                        <div> <Link to={'/movies/' + movie.id}>
                            <img src={movie.img} className='imgMovie'></img>
                        </Link></div>
                        <div className='btnCon'> <button className='btn' onClick={this.toggleRented}>+</button></div>
                        
                    </div>
                    :
                    <div className='movie'>
                        <div> <Link to={'/movies/' + movie.id}>
                            <img src={movie.img} className='imgMovie'></img>
                        </Link></div>
                        <div className='btnCon'> <button className='btn' onClick={this.toggleRented}>-</button></div>
                    </div>
                }

            </div>
        );
    }
}

export default Movie;