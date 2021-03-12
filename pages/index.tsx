import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'

import Layout from '../components/layout'
import Definition, { DefinitionProps } from '../components/definition/definition'
import { PATHS } from '../utils/const/paths'

type Props = {
  readonly definitions: DefinitionProps[]
}

export default function Home({ definitions }: Props) {
  const generateDefinitionList = () => {
    return definitions.map( (definition) => {
      return <Definition key={ definition.slug } {...definition} />
    })
  }

  return (
    <>
      <Head>
        <title>Frontend - Kompendium</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Layout>
        <div className="definitionsList">
          { generateDefinitionList() }
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/${PATHS.DEFINITIONS}`)

  const definitions = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(`${PATHS.DEFINITIONS}/${filename}`).toString()
    const { data: meta, content } = matter(markdownWithMeta)

    return {
      slug: filename.replace('.md', ''),
      meta,
      content,
    }
  })

  return {
    props: {
      definitions,
    }
  }
}
