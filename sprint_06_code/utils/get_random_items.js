export function getRandomItems(array, count) {
  try {
    return Array.from(
      { length: count },
      () => array[Math.floor(Math.random() * array.length)]
    );
  } catch (error) {
    console.error(error);
    return Array(count).fill(null);
  }
}