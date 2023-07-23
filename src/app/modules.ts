export interface Note{
    id:number;
    title:string;
    body:string;
    date:Date;
    color?:string;
}

export interface Todo{
    id:number;
    task:string;
    isActive:boolean;
    color?:string;
}