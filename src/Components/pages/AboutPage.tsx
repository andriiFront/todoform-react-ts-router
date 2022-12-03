import { useNavigate } from 'react-router-dom'

export const AboutPage = () => {
  const history = useNavigate()

  return (
    <>
      <h1>Information</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Fugit, ea distinctio? 
        Dicta dignissimos repellat unde dolore 
        ad cupiditate nisi quia.
      </p>
      <button
        className="btn"
        onClick={() => history('/')}
      >
          Back to the todo list..
        </button>
    </>
  )
}
