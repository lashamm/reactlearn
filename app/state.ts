import { atom } from "recoil";

export const sortState = atom({
    key:'sort',
    default: localStorage.getItem('sort') || 'asc'
})