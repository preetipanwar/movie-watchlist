import { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  return (
    <>
      <div className="grid grid-cols-10 gap-4 p-12 w-screen">
        {numbers.map((number) => (
          <div className="flex justify-center items-center h-20 w-20 bg-blue-200 text-black text-xl font-bold">
            {number}
          </div>
        ))}
        <button
          className="flex justify-center items-center h-20 w-20 bg-blue-700 text-white text-xl font-bold"
          onClick={() => {
            const completeArray = [...numbers];
            completeArray.pop();
            setNumbers(completeArray);
          }}
        >
          -
        </button>
        <button
          className="flex justify-center items-center h-20 w-20 bg-blue-700 text-white text-xl font-bold"
          onClick={() =>
            setNumbers((numbers) => [...numbers, numbers.length + 1])
          }
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
