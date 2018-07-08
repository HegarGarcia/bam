export interface IProduct {
  id: string;
  cantidad: number;
  fechaCosecha?: Date;
  fechaPlantada?: Date;
  propietario: string;
  nombre: string;
  precioPorUnidad: number;
  clasificacion: string;
  unidad: string;
}
