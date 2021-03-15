import Link from 'next/link'

export type TocItemProps = {
  readonly anchor: string
  readonly title: string
}

export default function TocItem({anchor, title}: TocItemProps ) {
  return (
    <li>
      <Link href={`#${anchor}`} shallow={true}>
        <a>{title}</a>
      </Link>
    </li>
  )
}