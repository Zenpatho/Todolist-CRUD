import React from 'react'

export const Input = (props) => {
  return ( <>
    <div className="form-outline">
                <div className="col-12">
                  <input type="text" id="form1" className="form-control" onChange={(e) => props.handleChange(e)}/>               
                </div>
              </div>

              <div className="col-12">
                
                <button type="submit" className="btn btn-primary" onClick={() => props.handleClick()}>Save</button>
              </div> </>
  )
}
