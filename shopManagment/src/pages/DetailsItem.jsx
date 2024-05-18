import React from 'react'
import { useLocation } from 'react-router'

const DetailsItem = () => {
  const item = useLocation()?.state?.item
  console.log(item);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">blance</th>
          <th scope="col">comments</th>
          <th scope="col">title</th>
          <th scope="col">views</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{item?.blance}</td>
          <td>{item?.comments}</td>
          <td>{item?.title}</td>
          <td>{item?.views}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default DetailsItem