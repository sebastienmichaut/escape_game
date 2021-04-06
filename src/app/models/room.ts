export class Room {
  id:number;
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  nbMin: number;
  nbMax: number;
  difficulty: number;
  isVirtual: boolean;
  times: string[];
}
