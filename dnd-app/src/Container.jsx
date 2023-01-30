import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './Card.jsx'
export const Container = () => {
  
    const [cards, setCards] = useState([
      {
        experience: "ZXhwMDhiMzg1MmUtNmJkOS0xMWVkLWFkYjEtMDZhNDM4ODNmMDBj",
        id: "cm9sMWMwMGQzODgtOWIzMS0xMWVkLThhMTgtMGE2NzZkNzZlMmVh",
        name: "New hdhfdhjffg",
        roleType: "SIGNER",
        signerIndex: "1",
        signerParent: null
      },
      {
        experience: "ZXhwYWY0ZmRiZTEtNTUxOC0xMWVkLTlmMGMtMDJmYWMzNDAyNDM4",
        id: "cm9sY2M4ZWFmNjEtOWUyNS0xMWVkLTlmMDYtMGFjYjMxNWY4ZTg2",
        name: "bnbb",
        roleType: "WITNESS",
        signerIndex: "2",
        signerParent: "1"
      },
      {
        experience: "ZXhwYmQ4NGMxZDgtMDJjMC0xMWVkLWIwMjAtMGE0YWI0M2MzMzFl",
        id: "cm9sODg2NTU2ODQtOWU0MC0xMWVkLWJlMzQtMDYzMDNkYWI2MmJh",
        name: "appro",
        roleType: "APPROVER",
        signerIndex: "3",
        signerParent: null
      },
      {
        experience: "ZXhwYmQ4NGMxZDgtMDJjMC0xMWVkLWIwMjAtMGE0YWI0M2MzMzFl",
        id: "cm9sZWM4OTViMWUtOWU1NS0xMWVkLTkzMjktMDI1ZjhjZWI4Yjg4",
        name: "New Signer",
        roleType: "SIGNER",
        signerIndex: "4",
        signerParent: null
      },
    ])

    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
    }, [])

    return (
      <>
        <div className="">{cards && cards.map((card, i) => (
          <Card
          key={card.id}
          index={i}
          id={card.id}
          name={card.name}
          roleType={card.roleType}
          moveCard={moveCard}
        />
          ))}
        </div>
      </>
    )
  
}
