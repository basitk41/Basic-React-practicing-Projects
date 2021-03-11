import React , { Component } from 'react';
import { getMovies } from './Starter Code/services/fakeMovieService';
class Movies extends Component{
  state = {
      movies: getMovies()
  };
//   renderMoviesTitle = ()=> {
//       if(this.state.movies.length===0) return "There in no movie in database.";
//       return ; 
//   }
    
  handleDelete = (movie) =>{
       const movies = this.state.movies.filter(n=>n._id!==movie._id);
       //this.setState({movies:movies});
       this.setState({movies});
  };

  render(){
    if(this.state.movies.length===0) return <h2 align="center" className="text text-danger">There is no movie in database.</h2>;
    return (
    <React.Fragment>
    <h2 align="center" className="text text-primary">showing {this.state.movies.length} movies in database.</h2>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            { this.state.movies.map(movie=> 
           (<tr key={movie._id}>
                 <td>{movie.title}</td>
                 <td>{movie.genre.name}</td>
                 <td>{movie.numberInStock}</td>
                 <td>{movie.dailyRentalRate} </td>
                 <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-block">Delete</button></td>
            </tr>)
                ) }
           
        </tbody>
        
      
    </table>
    </React.Fragment>
  );
  }
}
export default Movies;