import React from 'react'

export const Test = (props) => {
  return (
    <>            
    <tbody>
    <tr>
    <th scope="row">{props.id}</th>
    <td>{props.taskName}</td>
    <td>In progress</td>
    <td>
      <button type="submit" className="btn btn-danger" onClick={() => props.deleteTask(props.id)}>Delete</button>
    </td>
  </tr>
  </tbody>
  </>
  )
}
