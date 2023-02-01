import update from 'immutability-helper'
import { useCallback, useState, useEffect } from 'react'
import { Card } from './Card.jsx'
export const Container = () => {
  
  const [role, setRole] = useState([]);
    const [roles, setRoles] = useState([
      {
        experience: "ZXhwMDhiMzg1MmUtNmJkOS0xMWVkLWFkYjEtMDZhNDM4ODNmMDBj",
        id: "cm9sMWMwMGQzODgtOWIzMS0xMWVkLThhMTgtMGE2NzZkNzZlMmVh",
        name: "New hdhfdhjffg",
        roleType: "SIGNER",
        signerIndex: "1",
        signerParent: null,
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

    useEffect(() => {
      console.log('2', roles);
    }, [roles]);

    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setRoles((prevCards) => 
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
      // roles.map((card, index) => {
      //   console.log('card1', card);
      //   let { signerIndex } = card;
      //   signerIndex = dragIndex + 1;
      //   console.log('card', {...card, signerIndex});
      //   setRole({...card, signerIndex});
      //   console.log('role', role);
      // });
    }, []);
  
    return (
      <div className="m-5">
        <h1>react-dnd</h1>
        <div>{roles.map((card, i) => (
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
      </div>
    )
  
}
