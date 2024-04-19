'use client'

import { useState } from "react"
import { IPlayer } from "../types"

interface PlayerModalProps {
    player: IPlayer,
    close: () => void,
    deletePlayer: (id: number) => void,
    update: (player: IPlayer) => void
}

export default function PlayerModal({ player, close, deletePlayer, update }: PlayerModalProps) {
    const [playerData, setPlayerData] = useState(player)
    return (
        <section className="fixed backdrop-brightness-75 w-screen h-screen top-0 flex justify-center pt-20">
            <div onClick={close} className="fixed cursor-pointer z-0 top-0 w-screen h-screen"></div>
            <div className="bg-white z-10 w-[30%] h-fit ma-h-[80%] p-6 outline rounded-lg ">
                <input className="text-center w-full text-2xl" type="text" value={playerData.name} onChange={(e) => setPlayerData({ ...playerData, name: e.target.value })} /><br />
                <input className="text-center w-full opacity-80 focus:" type="number" value={playerData.age} onChange={(e) => setPlayerData({ ...playerData, age: Number(e.target.value) })} />
                <input className="text-center w-full opacity-80 focus:" type="string" value={playerData.profession} onChange={(e) => setPlayerData({ ...playerData, profession: e.target.value })} />
                <input className="text-center w-full opacity-80 focus:" type="string" value={playerData.hometown} onChange={(e) => setPlayerData({ ...playerData, hometown: e.target.value })}></input>
                <div className="border-t w-full flex gap-6 border-red-500">
                    <button onClick={() => { update(playerData); close() }} className="flex-1 border rounded-lg mt-6 p-2 hover:bg-green-500 hover:text-white transition">salvar</button>
                    <button onClick={() => { deletePlayer(player.id); close() }} className="flex-1 border rounded-lg mt-6 p-2 hover:bg-red-500 hover:text-white transition">deletar</button>
                </div>
            </div>
        </section>
    )
}