import { useState, useEffect } from "react"

export function Child() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  
  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`)}, [name, age]
)

  useEffect(() => {
    console.log("Render")
  })
  
  useEffect(() => {
    console.log("Hi")
    return () => {
      console.log("Bye")
    }
  }, [])
  useEffect(() => {
    document.title = name
    
    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`)
    }, 500)

    return() => {
      clearTimeout(timeout)
    }
  }, [name])

  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  })
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight)
    })
  })
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge(a => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge(a => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
      <br />
      This is the Width of the Window : {width} 
      <br />
      This is the Height of the Window : {height}
    </div>
  )
}
