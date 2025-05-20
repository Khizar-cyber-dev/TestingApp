import React from 'react'

interface Props {
  name?: string
}

const Greet = ({ name }: Props) => {
  return (
    <div>Greet {name}</div>
  )
}

export default Greet;