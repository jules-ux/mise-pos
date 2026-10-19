export type Status = 'vrij'|'bezet'|'besteld'|'klaar'|'rekening';
export type Product = { id:string; name:string; price:number; category:string; station:string; unavailable?:boolean; modifier?:boolean };
export const categories = ['Klassiekers','Bistro tapas','Hoofdgerechten','Nagerechten','Cocktails','Wijn'];
export const products: Product[] = [
 {id:'steak',name:'Steak Tartaar',price:2800,category:'Klassiekers',station:'Keuken',modifier:true},
 {id:'lamb',name:'Lamskroon',price:2400,category:'Klassiekers',station:'Keuken'},
 {id:'croque',name:'Croque Monsieur',price:1600,category:'Bistro tapas',station:'Keuken'},
 {id:'fish',name:'Zeebaars',price:2600,category:'Hoofdgerechten',station:'Keuken'},
 {id:'kriek',name:'Kriek',price:450,category:'Cocktails',station:'Bar'},
 {id:'water',name:'Plat water',price:400,category:'Wijn',station:'Bar'},
 {id:'espresso',name:'Espresso',price:300,category:'Nagerechten',station:'Bar'}
];
export const euro = (c:number) => `€ ${(c/100).toFixed(2).replace('.', ',')}`;
export const tables = [1,2,3,4,5,6,7,8].map((id)=>({id, zone:id<5?'Binnen':'Terras', guests:id===4?2:0, total:id===4?4800:0, status:(id===4?'besteld':id===7?'klaar':'vrij') as Status, minutes:id===4?12:0}));
export const staff = [{name:'Sofie',role:'Ober',pin:'1234'},{name:'Marc',role:'Manager',pin:'0000'},{name:'Karim',role:'Keuken',pin:'2222'}];
