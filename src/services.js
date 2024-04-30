'use server'

import exp from 'constants'
import sql from './db'

export async function insert(info) {
    return await sql`INSERT INTO assets
     (id, code, name, descripition, location, incialValue, finalValue, percentage)
     VALUES (
             ${info.id},
             ${info.code},
             ${info.name},
             ${info.descripition},
             ${info.location},
             ${info.inicialValue},
             ${info.finalValue},
             ${info.percentage})`
}

export async function select() {
    return await sql`SELECT * FROM assets`
}

export async function remove(id) {
    return await sql`DELETE FROM assets WHERE id = ${id}`
}

export async function update(asset) {
    if (asset.id !== undefined && asset.name !== undefined && asset.age !== undefined && asset.profession !== undefined) {
        console.log(asset)
        return await sql`UPDATE assets SET 
    code = ${asset.code}
    name = ${asset.name},
    descripition = ${asset.descripition},
    location = ${asset.location},
    inicialValue = ${asset.inicialValue},
    finalValue = ${asset.inicialValue},
    percentage = ${asset.percentage}
    WHERE npm riid = ${asset.id}`
    } else {
        // Se algum campo estiver faltando, lança um erro
        throw new Error('Campos de patrimonio incompletos');
    }
}