import ReactMarkdown from 'react-markdown/with-html'

export type DefinitionProps =  {
  readonly id: string
  readonly question: string
  readonly answer: string
}

export default function Definition({id, question, answer}: DefinitionProps) {
  return (
    <article id={ id }>
      <header>
        <h3>{ question }</h3>
      </header>
      <section>
        <ReactMarkdown source={ answer }/>
      </section>
    </article>
    )
}