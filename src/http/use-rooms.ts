import { useQuery } from "@tanstack/react-query";
import type { getRoomsResponse } from "./types/get-room-response";

export function useRooms() {
    return useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3333/rooms');
            const data: getRoomsResponse = await response.json();

            return data;
        },
    });
}