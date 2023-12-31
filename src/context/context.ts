import { createContext } from "react";

export const UserResponseContext = createContext<Array<{id:number,idResponse:number}> | []>([])