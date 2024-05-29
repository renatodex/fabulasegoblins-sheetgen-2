import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Spell from 'src/components/spell'
import { useRouter } from 'next/router'
import PdfButton from 'src/components/download_pdf';
import PdfSpells from 'src/components/pdf_spells';

export default function Print({ apiHostUrl }) {
  const title = 'Poderes'

  const [spells, setSpells] = useState([])
  const router = useRouter()

  let ids = router.query['q[id_in][]']

  useEffect(() => {
    const permalinkSet = new Set()

    async function loadSpells(page) {
      // Build Params to get multiple Spells
      const queryParams = new URLSearchParams();

      if (typeof(ids) !== 'object') {
        ids = [ids]
      }
      ids.forEach(id => queryParams.append('q[id_in][]', id));

      // Make the request and handle the json
      const result = await fetch(`${apiHostUrl}/api/spells?${queryParams.toString()}&page=${page}`)
      const response = await result.json()

      // Filter spells with the same permalink (in case the same API call executes twice)
      const filteredSpells = response.filter(spell => {
        if (!permalinkSet.has(spell.permalink)) {
          permalinkSet.add(spell.permalink)
          return true
        }
        return false
      })

      // Get the headers and save content
      setSpells(prevSpells => [...prevSpells, ...filteredSpells])
      const lastPage = result.headers.get('X-LastPage')

      // Loop recurviely over next pages.
      if (!JSON.parse(lastPage)) {
        loadSpells(page + 1)
      }
    }

    if (router.query['q[id_in][]']) {
      loadSpells(1)
    }
  }, [ids])

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className="mx-3 md:mx-6 mt-4">
        <div className='flex flex-wrap gap-6'>
          {spells.map(spell => {
            return (
              <div key={spell.permalink} className="w-[600px]">
                <Spell spell={spell} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      apiHostUrl: process.env.CORE_HOST_URL
    }
  }
}
