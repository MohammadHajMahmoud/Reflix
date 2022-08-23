import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Catalog from './components/Catalog'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users : [{ name : 'sami' ,color : 'red' } , {name : 'Mohammad' , color : 'yellow'} , {name : 'mostafa' , color : 'aqua'},{ name : 'susy', color : 'lime' } ],
      movies:[
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "Joker", year: 2019, img: "https://i.pinimg.com/564x/e9/6f/7f/e96f7f3bddb137cf3d7afdc88cb1b68f.jpg", descrShort: "A mentally troubled standup comedian embarks on a downward spiral that leads to the creation of an iconic villain , He keeps blaming society for what he has become +ratio" },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      budget: 10,
      
    }
    
  }
  toggleRented =(movieId) => {
    const movies = [...this.state.movies]
    let budget = this.state.budget
    if (movies.find(m => m.id === movieId).isRented) {
      budget += 3
    } else {
      if (budget < 3) {
        alert('your budget is not enough')
        return
      }
      budget -= 3
    }
    movies.find(m => m.id === movieId).isRented = !movies.find(m => m.id === movieId).isRented
    this.setState({
      movies,
      budget
    })

  }
  render() {
  return (
   <Router>
     <div>
    <div className='home-catalog'>
    <Link to="/" ><p className='header'>Home</p></Link>
     <Link to="/catalog" ><p className='header'>Catalog</p></Link>
    </div>
      
      <span className='header' id='reflix'>REFLIX</span>
      <Route exact path="/" render={() => <Home users={this.state.users} />} /> 
      <Route exact path='/movies/:id' render={({ match }) => < MovieDetail match={match} movies={this.state.movies} />} />
      <Route exact path='/catalog' render={()=> <Catalog movies={this.state.movies}  toggleRented={this.toggleRented} budget={this.state.budget}/>}/> 
      </div>
    </Router>
  
   
    
  );
}
}
export default App;