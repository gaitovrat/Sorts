'use client';

import { useEffect, useState } from "react";

function generateArray(n: number = 100): number[] {
  const arr = [];
  for (let index = 0; index < n; index++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }

  return arr;
}

function bubbleSort(arr: number[], i: number): number[] {
  if (i >= arr.length) {
    return arr;
  }

  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      const tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
    }
  }

  return arr;
}

function Home() {
  const [arr, setArr] = useState<number[]>([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (arr.length === 0) {
      setArr(generateArray());
    }

    setTimeout(() => {
      setArr(prevArr => bubbleSort(prevArr, i));
      setI(prevI => prevI + 1);
    }, 100);
  }, [i]);

  return (
    <div className="flex flex-row h-full">
      {arr.map((el, index) => {
        const color = index == i ? 'bg-green-500' : 'bg-red-500';
        return <div key={index} className="flex-grow flex flex-col justify-end">
          <div className={`${color} m-1 text-black`} style={{ height: `${el}%` }}></div>
        </div>
      })}
    </div >
  )
}

export default Home;
