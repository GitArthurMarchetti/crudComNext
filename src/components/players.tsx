'use client'

import { useState } from "react";

import { insert, remove, update } from "../services";
import { IAssets, defaultModal } from "../types";

import PlayerModal from "./playersModal";
import MySheet from "./sheets";

import Image from 'next/image'


export default function Players(props: { list: any[] }) {
  let [list, setList] = useState(props.list)

  console.log(list);

  const defaultAssets = {
    id: parseInt(list[list.length - 1]?.id) + 1 || 0,
    code: "",
    name: "",
    description: '',
    location: '',
    inicialValue: "",
    finalValue: "",
    percentage: "",
  }

  const [modalState, setModalState] = useState(defaultModal)

  const [newAssets, setNewAssets] = useState(defaultAssets)

  function post() {
    setList([...list, newAssets])
    insert({ 
      id: newAssets.id,
      code: newAssets.code,
      name: newAssets.name,
      descripiton: newAssets.description,
      location: newAssets.location,
      inicialValue: newAssets.inicialValue,
      finalValue: newAssets.finalValue,
      percentage: newAssets.percentage
     })
  }

  function delete_(id: number) {
    remove(id)
    list = [...list.filter((i) => i.id != id)]
    setList(list)
  }



  // function catchPlayer_(editPlayer: IPlayer) {
  //   setModalState({
  //     data: editPlayer
  //   })
  // }


  function update_(asset: IAssets) {
    list = list.map((i) => i.id == asset.id ? asset : i)
    setList(list)
    update(asset)
    console.log(list);
  }

  return (
    <>

      {/* {
        modalState.display ? <PlayerModal update={update_} deletePlayer={delete_} close={() => setModalState(defaultModal)} player={modalState.data}/> : ""
      } */}


      <div className="z-10 flex text-center justify-center">
        <h1 className="text-3xl">SEUS PATRIMONIOS</h1>
        <input type="number" placeholder="Código" onChange={(e) => setNewAssets({ ...newAssets, code: e.target.value })} value={newAssets.code} />
        <input type="text" placeholder="Nome" onChange={(e) => setNewAssets({ ...newAssets, name: e.target.value })} value={newAssets.name} />
        <input type="text" placeholder="Descrição" onChange={(e) => setNewAssets({ ...newAssets, description: e.target.value })} value={newAssets.description} />
        <input type="text" placeholder="Localização" onChange={(e) => setNewAssets({ ...newAssets, location: e.target.value })} value={newAssets.location} />
        <input type="number" placeholder="Valor Inicial" onChange={(e) => setNewAssets({ ...newAssets, inicialValue: e.target.value })} value={newAssets.inicialValue} />
        <input type="number" placeholder="Valor Final" onChange={(e) => setNewAssets({ ...newAssets, finalValue: e.target.value })} value={newAssets.finalValue} />
        <input type="number" placeholder="Porcentagem de desvalorização" onChange={(e) => setNewAssets({ ...newAssets, percentage: e.target.value })} value={newAssets.percentage} />

        <button onClick={() => post()}>Enviar</button>
        {
          list.map((e) => (
            <div key={e.id}>
              <h2>{e.code} {e.name}, {e.descripiton}</h2>
              <h3>{e.location}, {e.hometown}</h3>
              <button onClick={() => delete_(e.id)}>Deletar</button>
              {/* <button onClick={() => catchPlayer(e)}>Editar</button> */}
              <MySheet asset={e} update={update_} />
            </div>
          )
          )
        }
      </div>
    </>
  );
}