export interface Note{
    id:number;
    title:string;
    body:string;
    date:Date;
}

export interface Todo{
    id:number;
    task:string;
    isActive:boolean;
    color?:string;
}