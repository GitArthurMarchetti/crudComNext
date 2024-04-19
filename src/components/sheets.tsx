'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

import { IPlayer, defaultModal } from "../types"

interface PlayerModalProps {
  player: IPlayer,
  update: (fish:IPlayer) => void
}

export default function MySheet(props: PlayerModalProps) {
  const [playerData, setPlayer] = useState<IPlayer>(props.player);
 

  const handleChange = (field: keyof IPlayer, value: string | number) => {
    setPlayer({ ...playerData, [field]: value });
  };

    return(
        <>
        <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Editar</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edite Jogador</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" value={playerData.name} className="col-span-3"   onChange={(e) => handleChange('name', e.target.value)}/>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="age" className="text-right">
              Ano
            </Label>
            <Input id="age" value={playerData.age} className="col-span-3" onChange={(e) => handleChange('age', Number(e.target.value))}/>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="profession" className="text-right">
              Profissão
            </Label>
            <Input id="profession"  value={playerData.profession} className="col-span-3"  onChange={(e) => handleChange('profession', e.target.value)}/>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Cidade natal
            </Label>
            <Input id="username"  value={playerData.hometown} className="col-span-3"  onChange={(e) => handleChange('hometown', e.target.value)}/>
          </div>

        </div>
        <SheetFooter>
          <SheetClose asChild>
          <Button type="submit" onClick={() => props.update(playerData)}>Salvar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
        </>
    )
}