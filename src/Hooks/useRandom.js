import { useState, useEffect } from 'react';

export default function useRandom(min = 1, max = 732) {
  const [numberRandom, setNumberRandom] = useState(1);

  useEffect(() => {
    setNumberRandom(Math.floor(Math.random() * (max - min) + min));
  }, []);

  return numberRandom;
}
