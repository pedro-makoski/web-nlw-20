import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Link } from "react-router-dom"

import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import dayjs from "@/lib/dayjs";
import { useRooms } from "@/http/use-rooms";

export function RoomList() {
    const { data, isLoading } = useRooms()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Salas recentes</CardTitle>
                <CardDescription>Acesso rápido para as salas criadas recentemente</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-3'>
                {isLoading && <p className='text-muted-foreground text-sm'>Caregando salas...</p>}

                {data?.map(room => {
                  return (
                    <Link to={`/rooms/${room.id}`} key={room.id} className='flex items-center justify-between p-3 rounderd-lg border hover:bg-accent/50'>
                      <div className='flex-1 flex flex-col gap-1'>
                        <h2>{room.name}</h2>

                        <div className="flex items-center gap-2">
                          <Badge variant='secondary' className='text-xs'>
                            {room.questionsCount} pergunta(s)
                          </Badge>
                          <Badge variant='secondary' className='text-xs'>
                            {dayjs().toNow()}
                          </Badge>
                        </div>
                      </div>

                      <span className='flex items-center gap-2 text-sm'>
                        Entrar
                        <ArrowRight className='size-3'/>
                      </span>
                    </Link>
                  )
                })}
            </CardContent>
          </Card>
    )
}