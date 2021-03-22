import ReactMarkdown from 'react-markdown/with-html'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import styles from './definition.module.scss'

export type DefinitionProps = {
  readonly id: string
  readonly question: string
  readonly answer: string
}

// Take 'code' node type and render it through 'SyntaxHighlighter'
const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
}

export function Definition({ id, question, answer }: DefinitionProps): JSX.Element {
  return (
    <article id={id} className={styles.definition}>
      <header className={styles.definitionHeader}>
        <p>{question}</p>
      </header>
      <section className={styles.definitionContent}>
        <ReactMarkdown source={answer} renderers={{ code: CodeBlock }} />
      </section>
    </article>
  )
}
