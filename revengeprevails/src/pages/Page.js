// In src/pages/Page.js
import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../prismic-configuration'
import NotFound from './NotFound'
import Prismic from 'prismic-javascript'

const Page = ({ }) => {
  const [doc, setDocData] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  //const uid = match.params.uid

  // Get the page document from Prismic
  useEffect(() => {
    const fetchData = async () => {
      // We are using the function to get a document by its UID
      const result = await client.query(Prismic.Predicates.at('document.type', 'gig'))

      if (result) {
        // We use the State hook to save the document
        return setDocData(result)
      } else {
        // Otherwise show an error message
        console.warn('Page document not found. Make sure it exists in your Prismic repository')
        toggleNotFound(true)
      }
    }
    fetchData()
  }) // Skip the Effect hook if the UID hasn't changed

  if (doc) {
    return (
      <div className="page">
        {/* This is how to render a Rich Text field as plain text */}
        <h1>{RichText.asText(doc.results[0].data.city)}</h1>
        {/* This is how to render a Rich Text field into your template as HTML */}
        <RichText render={doc.results[0].data.location} linkResolver={linkResolver} />
      </div>
    )
  } else if (notFound) {
    return <NotFound />
  }
  return null
}

export default Page