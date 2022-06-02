using Microsoft.AspNetCore.Mvc;
using MovieApp.Models;

namespace MovieApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : ControllerBase
    {
        MovieAPIContext db = new MovieAPIContext();

        [HttpGet("SearchByTitle/{title}")]
        public List<Movie> SearchByTitle(string title)
        {
            List<Movie> movies = db.Movies.Where(x => x.Title.Contains(title)).ToList();
            return movies;
        }
        [HttpGet("GetMovies")]
        public List<Movie> GetMovies()
        {
            return db.Movies.ToList();
        }
        [HttpGet("GetMovieById/{id}")]
        public Movie GetMovieById(int id)
        {
            Movie m = db.Movies.Where(x => x.Id == id).First();
            return m;

        }
        [HttpPut("CreateMovie/")]
        //The movie come from the URl, URLs can only do a few properties at a time
        //SO to create a new movie object we need to add JSON representing movie to our request body
        public string CreateMoive(Movie m)
        {
            db.Movies.Add(m);
            db.SaveChanges();
            return m.Title + "has been successfully added to the database";
        }
        [HttpDelete("DeleteMovie/{id}")]
        public string DeleteMovie(int id)
        {
            Movie m = db.Movies.Find(id);
            db.Movies.Remove(m);
            db.SaveChanges();
            return $"movie at id {id} has been deleted successfully";
        }
        [HttpPost("UpdateMovie/{id}")]

        public string UpdateMovie(int id, Movie updatedinfo) {
            Movie m = db.Movies.Find(id);
            m.Title = updatedinfo.Title;
            m.ReleaseYear = updatedinfo.ReleaseYear;
            m.Genre = updatedinfo.Genre;
            db.Movies.Update(m);
            db.SaveChanges();
            return $"The Movie {m.Title} has been updated at {m.Id} Id";


        }
    }
}
