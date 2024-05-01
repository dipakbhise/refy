import React from 'react'

const Title = ({title}) => {
  return (
    <div className="flex justify-center items-center my-4">
    <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      {title}
    </h1>
  </div>
  )
}

export default Title