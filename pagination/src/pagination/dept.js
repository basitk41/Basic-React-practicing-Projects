export const dept = [
    {id:1,name:"Computer Science"},
    {id:2,name:"Botany"},
    {id:3,name:"Chemistry"},
    {id:4,name:"Zoology"},
    {id:5,name:"Economics"},
];
export function getDept(){
    return dept.filter(d=>d);
}