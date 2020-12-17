import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
import GetType from '../components/getType';
import Prismic from 'prismic-javascript'
import { client } from '../prismic-configuration'

const Contact = () => { 
  
  const [docs, setDocsData] = useState(null)

  // Get the page document from Prismic
  useEffect(() => {
    const fetchData = async () => {
      const response = await client.query(Prismic.Predicates.at('document.type', 'gig'))

      if (response) {
        return setDocsData(response.results)
      } else {
        // Otherwise show an error message
        console.warn('Page document not found. Make sure it exists in your Prismic repository')
      }
    }
    fetchData()
  }, [])
  
  return( 
    <Container>
      <GetType gigs={docs}/>
    </Container>
  )
  
}

export default Contact;