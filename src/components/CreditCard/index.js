// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardDiv,
  PaymentMethodDiv,
  Heading,
  HeadingCard,
  Separator,
  CardImageDiv,
  CardNumber,
  CardHolderName,
  Input,
  PaymentSubDiv,
  ContentDisplayDiv,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeNumber = e => {
    setCardNumber(e.target.value)
  }

  const onChangeCardName = e => {
    setCardHolderName(e.target.value)
  }

  return (
    <MainContainer>
      <CardDiv>
        <HeadingCard>
          <Heading>CREDIT CARD</Heading>
          <Separator />
        </HeadingCard>
        <CardImageDiv data-testid="creditCard">
          <ContentDisplayDiv>
            <CardNumber>{cardNumber}</CardNumber>
            <p style={{color: 'white', fontWeight: '500'}}>CARDHOLDER NAME</p>
            <CardHolderName>{cardHolderName.toUpperCase()}</CardHolderName>
          </ContentDisplayDiv>
        </CardImageDiv>
      </CardDiv>
      <PaymentMethodDiv>
        <PaymentSubDiv>
          <h1>Payment Method</h1>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardHolderName}
            onChange={onChangeCardName}
          />
        </PaymentSubDiv>
      </PaymentMethodDiv>
    </MainContainer>
  )
}
export default CreditCard
