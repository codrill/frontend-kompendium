import ReactMarkdown from 'react-markdown/with-html'

import styles from './definition.module.scss'

export type DefinitionProps = {
  readonly id: string
  readonly question: string
  readonly answer: string
}

export function Definition({ id, question, answer }: DefinitionProps): JSX.Element {
  return (
    <article id={id} className={styles.definition}>
      <header className={styles.definitionHeader}>
        <p>{question}</p>
      </header>
      <section className={styles.definitionContent}>
        <ReactMarkdown source={answer} />
      </section>
    </article>
  )
}
