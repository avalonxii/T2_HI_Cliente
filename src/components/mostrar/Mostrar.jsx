import { collection, getDocs } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { db } from '../../service/firebase'
import  Card  from './Card'

export default function Mostrar() {
    const [List, setList] = useState([])

    useEffect(() => {
        //get datos from firebase
         /* const mostrar = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'usuarios'))
                const docs = []
                querySnapshot.forEach(doc =>{
                    docs.push({...doc.data(), id:doc.id })
                })
        
                setList(docs)
        
            } catch (error) {
                console.log(error)
            }
        }

        mostrar()  */
    }, [List])

    return (
        <div>
            {List.map((u) => (
                <Card usuario={u} />
            ))}
        </div>
    )
}
