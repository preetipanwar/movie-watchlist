interface Prop {
  movie: any;
  handleClick: any;
  watchList: any;
}

export default function Movie({ movie, handleClick, watchList }: Prop) {
  const clone = [...watchList];

  const result = clone.find((item) => {
    return item.id === movie.id;
  });

  return (
    <div
      className="flex flex-col justify-between p-3 w-42 h-78 rounded-xl backdrop-blur-sm bg-black/30 opacity-40 hover:opacity-100 hover:scale-110 transition ease-in-out delay-75"
      style={
        result ? { borderWidth: 4, borderColor: 'brown', opacity: 100 } : {}
      }
      onClick={() => handleClick(movie)}
    >
      <img
        className="rounded-lg"
        src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
      />
      <p className="mt-2 text-center font-semibold text-sm py-2">
        {movie.title}
      </p>
    </div>
  );
}
