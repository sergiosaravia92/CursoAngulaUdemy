import { rejects } from "assert";
import { read } from "fs";
import { promise } from "protractor";

export function toBase64(file: File){
    return new Promise((resolve,rejects) => {
        const reader= new FileReader();
        reader.readAsDataURL(file);
        reader.onload= () => resolve(reader.result);
        reader.onerror= (error) => rejects(error);
    })
}