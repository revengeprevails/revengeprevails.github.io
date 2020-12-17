import { RichText } from 'prismic-reactjs'
import React from 'react'

const GetType = ({ gigs }) => {
  return (
    <div className='gig-main'>
      {/* Working from the array of all blog posts, we process each one */}
      {gigs.map((gig) => {
        /* Store the date as a Date object so we can format it to whatever we need */
        let gigDate = Date(gig.data.date)
        /* Default title when post has no title set */
        const defaultLocation = [<h1 key='title'>Hell</h1>]
        return (
          <div className='blog-post' data-wio-id={gig.id} key={gig.id} >
            <h2>
              {/* We render a link to a particular post using the linkResolver for the url and its title */}
                {gig.data.title.length !== 0
                  ? <RichText render={gig.data.title} />
                  : defaultLocation}
            </h2>
            <p className='blog-post-meta'>
              <p className='created-at'>
                {/* Format the date to M d, Y */}
                {gigDate ? new Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                }).format(gigDate) : ''}
              </p>
            </p>
    
            {RichText.asText(gig.data.city)}
          </div>
        )
      })}
    </div>
  )
}

export default GetType
