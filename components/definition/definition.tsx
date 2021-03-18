import ReactMarkdown from 'react-markdown/with-html'

import styles from './definition.module.scss'

export type DefinitionProps =  {
  readonly id: string
  readonly question: string
  readonly answer: string
}

export default function Definition({id, question, answer}: DefinitionProps) {
  return (
    <article id={ id } className={ styles.definition }>
      <header className={ styles.definitionHeader }>
        <p>{ question }</p>
      </header>
      <section className={ styles.definitionContent }>
        <ReactMarkdown source={ answer }/>
      </section>
    </article>
    )
}