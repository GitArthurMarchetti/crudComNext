'use server'

import exp from 'constants'
import sql from './db'

export async function insert(info){
    return await sql`INSERT INTO players (name, age, profession, hometown) VALUES (${info.name}, ${info.age}, ${info.profession}, ${info.hometown})`
}

export async function select(){
    return await sql`SELECT * FROM players`
}

export async function remove(id){
    return await sql`DELETE FROM players WHERE id = ${id}`
}

export async function update(player){
    if (player.id !== undefined && player.name !== undefined && player.age !== undefined && player.profession !== undefined) {
    console.log(player)
    return await sql`UPDATE players SET 
    name = ${player.name},
    age = ${player.age},
    profession = ${player.profession},
    hometown = ${player.hometown}
    WHERE id = ${player.id}`
    }else {
        // Se algum campo estiver faltando, lança um erro
        throw new Error('Campos de jogador incompletos');
      }
}