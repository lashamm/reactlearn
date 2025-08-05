import { atom } from "recoil";

export const sortState = atom({
    key:'sort',
    default: localStorage.getItem('sort') || 'asc'
})

export const limitState = atom({
    key:'limit',
    default: localStorage.getItem('limit') || 20
})