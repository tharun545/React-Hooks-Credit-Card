// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
`

export const CardDiv = styled.div`
  background-color: #3b4b69;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: flex-start;
  align-items: center;
`

export const PaymentMethodDiv = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: center;
  align-items: center;
`
export const HeadingCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
`

export const Separator = styled.hr`
  width: 180px;
  background-color: #ffd773;
  height: 1px;
`
export const CardImageDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 300px;
  width: 550px;
  margin-top: 40px;
  border-radius: 25px;
`

export const ContentDisplayDiv = styled.div`
  padding: 30px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardNumber = styled.p`
  color: #ffffff;
`

export const CardHolderName = styled.p`
  color: #ffffff;
  font-weight: 700;
`
export const PaymentSubDiv = styled.div`
  box-shadow: 3px 5px 5px 10px #c3cad9;
  padding: 20px;
  text-align: center;
  width: 450px;
  border-radius: 5px;
`

export const Input = styled.input`
  height: 35px;
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
  padding: 10px;
`
