import { movies } from './movies';

function App() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-6 gap-6 m-6">
        {movies.map((movie) => (
          <div className="flex flex-col justify-between p-3 w-48 h-90 rounded-xl backdrop-blur-sm bg-black/30 ">
            <img
              className="rounded-lg"
              src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
            />
            <p className="mt-2 text-center font-semibold text-sm py-2">
              {movie.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
