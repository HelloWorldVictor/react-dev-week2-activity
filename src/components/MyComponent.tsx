import './MyComponent.css'

function MyComponent() {
  return (
    <section className="welcome-card" aria-labelledby="welcome-heading">
      <p className="eyebrow">Week 2 • React and TypeScript</p>
      <h1 id="welcome-heading">Hello, React!</h1>
      <p className="intro">
        This page is built with a reusable React component, TypeScript, and Vite.
        Small, typed components make an application easier to understand and
        grow.
      </p>
      <div className="card-footer">A first step toward building with confidence.</div>
    </section>
  )
}

export default MyComponent
