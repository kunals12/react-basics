import React from "react"

const Card = ({children}) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px',
      margin: '10px',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)'
    }}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is some conternt inside card</p>
      </Card>
      <Card>
        <h2>Another Title</h2>
        <p>This is some conternt inside card</p>
      </Card>
    </div>

  )
}



export default App
