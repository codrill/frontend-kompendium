import { Definition, DefinitionProps } from '../definition/definition'

type Props = {
  definitions: DefinitionProps[]
}

export function DefinitionsList({ definitions }: Props): JSX.Element {
  return (
    <div className="definitionsList">
      {definitions.map((definition) => (
        <Definition key={definition.id} {...definition} />
      ))}
    </div>
  )
}
