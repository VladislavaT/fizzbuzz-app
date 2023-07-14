import { useState } from 'react'
import './styles/style.scss'

export const App = () => {
  const [count, setCount] = useState(1);

  const getFizzBuzz = (num) => {
    return (num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz') || num.toString()
  };

  return (
    <div className="App">
      <div
        className="modal modal-sheet position-static d-block p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSheet"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header border-bottom-0 text-center">
              <h1 className="modal-title fs-5">FizzBuzz</h1>
            </div>
            <div className="modal-body py-0">
              <p>{`Count: ${getFizzBuzz(count)}`}</p>
            </div>
            <div className="modal-footer d-flex justify-content-center border-top-0">
              <button
                type="button"
                className="btn btn-lg btn-secondary"
                onClick={() => setCount(count > 1 ? count - 1 : count)}
              >
                Decrease
              </button>
              <button
                type="button"
                className="btn btn-lg btn-primary"
                data-bs-dismiss="modal"
                onClick={() => setCount(count + 1)}
              >
                Increase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
