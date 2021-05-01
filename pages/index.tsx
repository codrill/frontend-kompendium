import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import React from 'react'

import { Layout } from '../components/layout'
import { PATHS } from '../utils/const/paths'
import { TableOfContent } from '../components/tableOfContent/tableOfContent'
import { DefinitionsList } from '../components/definitionsList/definitionsList'
import { TocVisibilityController } from '../state/tocVisibility.context'

type DefinitionsProps = {
  readonly definitions: Definition[]
}

type Definition = {
  readonly slug: string
  readonly meta: DefinitionMeta
  readonly content: string
}

export type DefinitionMeta = {
  readonly question: string
  readonly category: string
}

export default function Home({ definitions }: DefinitionsProps): JSX.Element {
  const generateDefinitionList = () => {
    return definitions.map(({ slug, meta, content }) => {
      const { question, category } = meta

      return {
        id: slug,
        question,
        category,
        answer: content,
      }
    })
  }

  const generateTableOfContent = () => {
    return definitions.map(({ slug, meta }) => {
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TocVisibilityController>
        <Layout>
          <TableOfContent toc={generateTableOfContent()} />
          <DefinitionsList definitions={generateDefinitionList()} />
        </Layout>
      </TocVisibilityController>
    </>
  )
}

export async function getStaticProps(): Promise<{ props: DefinitionsProps }> {
  const files = fs.readdirSync(`${process.cwd()}/${PATHS.DEFINITIONS}`)

  const definitions = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(`${PATHS.DEFINITIONS}/${filename}`).toString()
    const { data: meta, content } = matter(markdownWithMeta)

    return {
      slug: filename.replace('.md', ''),
      meta: meta as DefinitionMeta,
      content,
    }
  })

  return {
    props: {
      definitions,
    },
  }
}
