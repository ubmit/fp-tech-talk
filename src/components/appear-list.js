import { Appear } from '@mdx-deck/components'

export default props => (
  <ul>
    <Appear>
      {props.items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </Appear>
  </ul>
)
