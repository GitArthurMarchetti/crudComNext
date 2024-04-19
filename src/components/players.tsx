'use client'

import { useState } from "react";

import { insert, remove, update} from "../services";
import { IPlayer, defaultModal } from "../types";

import PlayerModal from "./playersModal";
import MySheet from "./sheets";

import Image from 'next/image'

export default function Players(props:{list:any[]}) {
    let [list, setList] = useState(props.list)

    console.log(list);

    const defaultPlayer = {
          id: parseInt(list[list.length-1]?.id) + 1 || 0,
          name: "",
          age: "",
          profession: '',
          hometown: '',
    } 

    const [modalState, setModalState] = useState(defaultModal)

    const [newPlayer, setNewPlayer] = useState(defaultPlayer)

    function post() {
        setList([...list, newPlayer])
        insert({id: newPlayer.id, name: newPlayer.name, age: newPlayer.age, profession: newPlayer.profession, hometown: newPlayer.hometown})
      }

      function delete_(id:number) {
        remove(id)
        list = [...list.filter((i) => i.id != id)]
        setList(list)
      }



      function catchPlayer_(editPlayer:IPlayer){
        setModalState({
          data: editPlayer
        })
      }

      
      function update_(player:IPlayer){
        list = list.map((i) => i.id == player.id ? player : i)
        setList(list)
        update(player)
        console.log(list);
      }

    return (
      <>

  {/* {
        modalState.display ? <PlayerModal update={update_} deletePlayer={delete_} close={() => setModalState(defaultModal)} player={modalState.data}/> : ""
      } */}
  

      <div className="z-10 flex text-center justify-center">
        <h1 className="text-3xl">PARTICIPANTES BBB 2024:</h1>
        <input type="text" placeholder="Nome" onChange={(e) => setNewPlayer({...newPlayer, name:e.target.value})} value={newPlayer.name}/>
        <input type="number" placeholder="Idade" onChange={(e) => setNewPlayer({...newPlayer, age:e.target.value})} value={newPlayer.age}/>
        <input type="text" placeholder="Profissão" onChange={(e) => setNewPlayer({...newPlayer, profession:e.target.value})} value={newPlayer.profession}/>
        <input type="text" placeholder="Cidade Natal" onChange={(e) => setNewPlayer({...newPlayer, hometown:e.target.value})} value={newPlayer.hometown}/>
        <button onClick={() => post()}>Enviar</button>
        {
          list.map((e) => (
            <div key={e.id}>
              <h2>{e.id} {e.name}, {e.age}</h2>
              <h3>{e.profession}, {e.hometown}</h3>
              <button onClick={() => delete_(e.id)}>Deletar</button>
              {/* <button onClick={() => catchPlayer(e)}>Editar</button> */}
            <MySheet player={e} update={update_}/>
            </div>
          )
          )
        }
        </div>
      </>
    );
  }