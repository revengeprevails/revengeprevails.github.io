import { RichText } from 'prismic-reactjs'
import React from 'react'

const GetType = ({ documents }) => {
  return (
    <div className='docs-main'>
      {/* Working from the array of all blog posts, we process each one */}
      {documents.map((doc) => {
        /* Store the date as a Date object so we can format it to whatever we need */
        let docDate = Date(doc.data.date)
        /* Default title when post has no title set */
        const defaultLocation = [<h1 key='title'>Hell</h1>]
        return (
          <div className='blog-post' data-wio-id={doc.id} key={doc.id} >
            <h2>
              {/* We render a link to a particular post using the linkResolver for the url and its title */}
                {doc.data.title.length !== 0
                  ? <RichText render={doc.data.title} />
                  : defaultLocation}
            </h2>
            <p className='blog-post-meta'>
              <p className='created-at'>
                {/* Format the date to M d, Y */}
                {docDate ? new Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                }).format(docDate) : ''}
              </p>
            </p>
    
            {RichText.asText(doc.data.city)}
          </div>
        )
      })}
    </div>
  )
}

export default GetType
