export type Trait='curiosity'|'stability'|'social'|'reflection';
export interface Option{label:string;detail:string;age:number;traits:Partial<Record<Trait,number>>;emoji:string}
export interface Question{id:number;kicker:string;text:string;options:Option[]}
export interface Result{age:number;title:string;subtitle:string;color:string;traits:Record<Trait,number>;answers:Option[]}
