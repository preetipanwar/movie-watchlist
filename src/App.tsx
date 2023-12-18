import { useState } from 'react';
import { movies } from './movies';

function App() {
  const [watchList, setWatchList] = useState<any>([]);

  return (
    <div className="flex flex-col justify-center">
      <header className="flex h-28 px-12 z-10 items-center justify-between backdrop-blur-sm bg-black/50 w-full fixed top-0 text-2xl font-semibold text-gray-300 text-left">
        <p className="text-pink-500 italic">Watched movies</p>
        <p className="p-2 text-pink-300 bg-pink-900 rounded-lg">
          {watchList.length}
          <span className="text-pink-200 font-medium"> / </span>
          {movies.length}
        </p>
      </header>
      <div className="grid grid-cols-8 gap-6 m-6 mt-32">
        {movies.map((movie) => (
          <div
            onClick={() => {
              const clone = [...watchList];

              const result = clone.find((item) => {
                return item.id === movie.id;
              });

              // if (result) {
              //   // do nothing
              // } else {
              //   setWatchList([...watchList, movie]);
              // }

              if (!result) {
                setWatchList([...watchList, movie]);
              }
            }}
            className="flex flex-col justify-between p-3 w-42 h-78 rounded-xl backdrop-blur-sm bg-black/30 opacity-40 hover:opacity-100 hover:scale-110 transition ease-in-out delay-75"
          >
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
