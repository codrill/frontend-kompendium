import ReactMarkdown from 'react-markdown/with-html'

export type DefinitionProps = {
  readonly slug: string
  readonly meta: DefinitionMeta
  readonly content: string
}

type DefinitionMeta = {
  readonly question: string
}

export default function Definition({slug, meta: { question }, content}: DefinitionProps) {
  return (
    <article id={ slug }>
      <header>
        <h3>{ question }</h3>
      </header>
      <section>
        <ReactMarkdown source={ content }/>
      </section>
    </article>
    )
}