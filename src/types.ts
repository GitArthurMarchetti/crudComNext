export interface IPlayer{
    id: number,
    name: string,
    age: number,
    profession: string,
    hometown: string,
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

