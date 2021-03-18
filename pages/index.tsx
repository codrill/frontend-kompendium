import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'

import Layout from '../components/layout'
import { PATHS } from '../utils/const/paths'
import TableOfContent from '../components/tableOfContent/tableOfContent'
import DefinitionsList from '../components/definitionsList/definitionsList'

type Props = {
  readonly definitions: {
    readonly slug: string
    readonly meta: DefinitionMeta
    readonly content: string
  }[]
}

type DefinitionMeta = {
  readonly question: string
}

export default function Home({ definitions }: Props) {
  const generateDefinitionList = () => {
    return (
      definitions.map( ( {slug, meta, content} ) => {
        const { question } = meta
        return {
          id: slug,
          question,
          answer: content
        }
      })
    )
  }

  const generateTableOfContent = () => {
    return definitions.map( ({ slug, meta } ) => {
      const { question: title } = meta
      return {
        anchor: slug,
        title,
      }
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
        <TableOfContent toc={generateTableOfContent()} />
        <DefinitionsList definitions={generateDefinitionList()} />
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
