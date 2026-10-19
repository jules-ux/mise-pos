export type VatGroup='A'|'B'|'C'|'D'|'X';
export const VAT_GROUPS:Record<VatGroup,number|undefined>={A:21,B:12,C:6,D:0,X:undefined};
export type FiscalEventType='N'|'P'|'T'|'refund'|'correction';
export interface FdmAdapter{sign(input:{total_cents:number;vat_group:VatGroup}):Promise<{ticket_no:string;qr:string}>}
export interface FiscalService{settle(input:{total_cents:number;vat_group:VatGroup;event:FiscalEventType}):Promise<{ticket_no:string;status:'signed'}>}
export const splitCents=(total:number,parts:number)=>Array.from({length:parts},(_,i)=>Math.floor(total/parts)+(i<total%parts?1:0));
export const totalCents=(lines:{price_cents:number;qty:number}[])=>lines.reduce((sum,l)=>sum+l.price_cents*l.qty,0);
