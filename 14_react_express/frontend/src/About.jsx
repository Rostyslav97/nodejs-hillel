import { useEffect, useState } from "react"
import parse from 'html-react-parser';


export default function Home() {
  const [page, setPage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3700/data2')
      .then(data => data.text())
      .then(data => setPage(data))
  }, [])

  return (
    <>
      {parse(page)}
    </>
  )
}