import Link from 'next/link'

export type TocItemProps = {
  readonly anchor: string
  readonly title: string
}

export function TocItem({ anchor, title }: TocItemProps): JSX.Element {
  return (
    <li>
      <Link href={`#${anchor}`} shallow={true}>
        {title}
      </Link>
    </li>
  )
}
