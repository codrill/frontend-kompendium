import ReactMarkdown from 'react-markdown/with-html'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { DefinitionMeta } from '../../pages'

import styles from './definition.module.scss'

export type DefinitionProps = DefinitionMeta & {
  readonly id: string
  readonly answer: string
}

type CodeBlockProps = {
  language: string
  value: string
  node: Record<string, unknown>
  children: unknown
}

// Take 'code' node type and render it through 'SyntaxHighlighter'
const CodeBlock = ({ language, value }: CodeBlockProps) => {
  return (
    <div className={styles.codeBlock}>
      <span className={styles.codeBlock__language}>{language}</span>
      <SyntaxHighlighter className="border border-gray-300" language={language}>
        {value}
      </SyntaxHighlighter>
    </div>
  )
}

export function Definition({ id, question, category, answer }: DefinitionProps): JSX.Element {
  return (
    <article id={id} className={styles.definition}>
      <header className={styles.definition__header}>
        <p>{question}</p>
        {category && <p className={styles.definition__category}>{category}</p>}
      </header>
      <section className={styles.definition__content}>
        <ReactMarkdown source={answer} renderers={{ code: CodeBlock }} />
      </section>
    </article>
  )
}
