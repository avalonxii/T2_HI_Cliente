import { collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { db } from "../../service/firebase";
import Card from "./Card";
import { Grid } from "@nextui-org/react";
import Menu from '../menu/Menu'

export default function Mostrar() {
  const [List, setList] = useState([]);

  useEffect(() => {
    //get datos from firebase
    const mostrar = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });

        setList(docs);
      } catch (error) {
        console.log(error);
      }
    };

    mostrar();
  }, []);

  return (
    <div>
        <Menu />
      <Grid.Container gap={3} >
        {List.map((u, key) => (
          <Card key={key} usuario={u} />
        ))}
      </Grid.Container>
    </div>
  );
}
