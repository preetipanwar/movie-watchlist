import { useState } from 'react';

export default function Square1() {
  const [numbers, setNumbers] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ]);

  return (
    <>
      <div className="flex gap-3 bg-blue-600 p-2 justify-center">
        <button
          className="flex justify-center items-center h-20 w-1/2 bg-blue-700 text-white text-3xl font-medium"
          onClick={() => {
            const copiedNumbers = [...numbers];
            copiedNumbers.pop();
            setNumbers(copiedNumbers);
          }}
        >
          -
        </button>
        <button
          className="flex justify-center items-center h-20 w-1/2 bg-blue-700 text-white text-3xl font-medium"
          onClick={() =>
            setNumbers((numbers) => [...numbers, numbers.length + 1])
          }
        >
          +
        </button>
      </div>
      <div className="grid grid-cols-12 wrap gap-4 p-4 w-screen">
        {numbers.map((number) => (
          <div className="flex justify-center items-center h-20 w-20 bg-blue-200 text-black text-xl font-bold">
            {number}
          </div>
        ))}
      </div>
    </>
  );
}
