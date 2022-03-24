import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <div className='container'>
        <form>
          <div className='mb-3'>
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className='mb-3'>
            <label htmlfor="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlfor="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}



