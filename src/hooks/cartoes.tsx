import React, { createContext, useContext, useEffect, useState } from 'react'
import { CardProps } from '../components/Card'
import request from '../service/request';

interface CartoesContextData {
  cartoes: CardProps[];
  createCartao: (card: CardProps) => Promise<boolean>; 
}

const CartoesContext = createContext<CartoesContextData>({} as CartoesContextData);

const CartoesProvider = ({ children }: {children: React.ReactNode}) => {
  const [cartoes, setCartoes] = useState<CardProps[]>([]);

  const createCartao = async(card: CardProps) => {
    return request({
      route: 'cards',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card)
    })
    .then(res => res.json())
    .then(() => {
      setCartoes(currentState => [...currentState, card]);
      return true;
    })
    .catch(err => {
      console.log(err);
      return false;
    })
  }

  useEffect(() => {
    request({route: 'cards'})
    .then(res => res.json())
    .then((response) => setCartoes(response))
    .catch(err => console.log(err))
  }, [])

  return (
    <CartoesContext.Provider
      value={{
        cartoes,
        createCartao
      }}
    >
      {children}
    </CartoesContext.Provider>
  )
}

const useCartoes = () => useContext(CartoesContext)

export {
  CartoesProvider,
  useCartoes
}