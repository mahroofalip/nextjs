import Link from "next/link"

export default function Home() {
  return (
    <div >
      <h1 align="center">Next js Pre-rendering </h1>
      <Link align="center" href={'/users'}><a>users</a></Link> 
      <Link align="center" href={'/posts'}><a>posts </a></Link> 
    </div>
  )
}
