import React from "react"

//The children prop allows you to pass elements or components as props to other components.
const Card = ({ children }) => {
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

function Card1() {
  // Error boundaries used when something goes wrong and crashes. 
  // At that time istead of crashing whole app, it will show error message for specific component only
  // throw new Error("Something went wrong"); 

  return <Card>
    <h2>Card Title</h2>
    <p>This is some conternt inside card</p>
  </Card>
}

function App() {
  return (
    <div>
      <ErrorBoundary><Card1 /></ErrorBoundary>

      <Card>
        <h2>Another Title</h2>
        <p>This is some conternt inside card</p>
      </Card>
    </div>

  )
}

// Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.
// Error boundaries only exist in class based components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}


export default App
