import Link from 'next/link'

export type TocItemProps = {
  readonly anchor: string
  readonly title: string
}

export function TocItem({ anchor, title }: TocItemProps): JSX.Element {
  return (
    <li>
      <Link href={`#${anchor}`} shallow={true}>
        {/*Turn off checking required anchor attributes due to Next API*/}
        {/*Known Issue: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md#case-i-use-nextjs-and-im-getting-this-error-inside-of-links*/}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>{title}</a>
      </Link>
    </li>
  )
}
