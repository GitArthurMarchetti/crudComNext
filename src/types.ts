export interface IAssets{
    id: number,
    code: number,
    name: string,
    descripition: string,
    location: string,
    inicialValue: number,
    finalValue: number,
    percentage: number
}

export const defaultModal = {
    data:{
        id: -1, 
        name: '', 
        age: 0,
        profession: '',
        hometown: '',
    }
}

