import { useEffect, useState } from "react"

export default function Home() {

  const [page, setPage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3700/data')
      .then(data => data.text())
      .then(data => setPage(data))
  }, []);


  return (
    <>
      <h1>Home Page</h1>
      <div>{page}</div>
    </>
  );
}