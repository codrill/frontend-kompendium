import Definition, { DefinitionProps } from '../definition/definition'

type Props = {
  definitions: DefinitionProps[]
}

export default function DefinitionsList({definitions}: Props) {
  return (
    <div className="definitionsList">
      { definitions.map( (definition) => <Definition key={ definition.id } {...definition} />) }
    </div>
  )
}