import { Container, Controls, MinusPlus, Price, TrashButton } from './styles'
import imagem from '../../../assets/cup.svg'
import { Minus, Plus, Trash } from 'phosphor-react'

export function Order() {
  return (
    <Container>
      <div>
        <img src={imagem} alt="" />
        <Controls>
          <h1>Expresso Tradicional</h1>
          <div>
            <MinusPlus>
              <button>
                <Minus size={14} />
              </button>
              <span> 1 </span>
              <button>
                <Plus />
              </button>
            </MinusPlus>

            <TrashButton>
              <button>
                <Trash size={14} />
              </button>
              <span>REMOVER</span>
            </TrashButton>
          </div>
        </Controls>
      </div>
      <Price>R$ 9,90</Price>
    </Container>
  )
}
