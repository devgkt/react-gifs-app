import React from 'react'

//This component received the Item Object and destructure it to get title and url
export const GifItem = ({title, url}) => {
  return (
    <>
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>

        </div>
    </>
  )
}
