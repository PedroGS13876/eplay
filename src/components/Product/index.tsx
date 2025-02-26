import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//place-hold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et
      dolores magni, quaerat numquam autem! Amet commodi, iste tempore, placeat
      soluta similique atque sunt est quas numquam veritatis sapiente tenetur!
    </Descricao>
  </Card>
)

export default Product
