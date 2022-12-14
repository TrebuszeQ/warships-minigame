import { TorpedoType } from "../interfaces/torpedo-type"

export interface WarshipType {
    name: string,
    width: number,
    height: number,
    backgroundImagePath: string,
    description: string,
    availableTorpedes: TorpedoType[]
}

// #warship {
//   z-index: 8;
//   display: block;
//   position: absolute;
//   margin: 0;
//   padding: 0;
//   width: 12.5%;
//   height: ${maxHeight * 0.025}px;
//   background-color: rgb(101, 101, 101);
// }
