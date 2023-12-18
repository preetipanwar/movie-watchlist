import { useState } from 'react';
import { movies } from './movies';
import Movie from './components/Movie';

export default function App() {
  const [watchList, setWatchList] = useState<any>([]);

  const handleClick = (movie) => {
    const clone = [...watchList];

    // index, -1
    const index = clone.findIndex((item) => {
      return item.id === movie.id;
    });

    if (index === -1) {
      // item is not in array
      setWatchList([...watchList, movie]);
    } else {
      // item
      clone.splice(index, 1);
      setWatchList(clone);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <header className="flex h-28 px-12 z-10 items-center justify-between backdrop-blur-sm bg-black/50 w-full fixed top-0 text-2xl font-semibold text-gray-300 text-left">
        <p className="text-pink-500 italic">Watched Movies</p>
        <p className="p-2 text-pink-300 bg-pink-900 rounded-lg">
          {watchList.length}
          <span className="text-pink-200 font-medium"> / </span>
          {movies.length}
        </p>
      </header>
      <div className="grid grid-cols-8 gap-6 m-6 mt-32">
        {movies.map((movie) => (
          <Movie
            movie={movie}
            handleClick={handleClick}
            watchList={watchList}
          />
        ))}
      </div>
    </div>
  );
}
