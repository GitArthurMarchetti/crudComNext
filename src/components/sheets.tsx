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

import { IAssets, defaultModal } from "../types"

interface AssetModalProps {
  asset: IAssets,
  update: (asset:IAssets) => void
}

export default function MySheet(props: AssetModalProps) {
  const [assetData, setAsset] = useState<IAssets>(props.asset);
 

  const handleChange = (field: keyof IAssets, value: string | number) => {
    setAsset({ ...assetData, [field]: value });
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
            <Label htmlFor="code" className="text-right">
              Código
            </Label>
            <Input id="code" value={assetData.code} className="col-span-3"  onChange={(e) => handleChange('code', Number(e.target.value))}/>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input id="name" value={assetData.name} className="col-span-3"   onChange={(e) => handleChange('name', e.target.value)}/>
          </div>
n
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="descripition" className="text-right">
              Descripition
            </Label>
            <Input id="descripition" value={assetData.descripition} className="col-span-3" onChange={(e) => handleChange('descripition', e.target.value)}/>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Localização
            </Label>
            <Input id="location"  value={assetData.location} className="col-span-3"  onChange={(e) => handleChange('location', e.target.value)}/>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="finalValue" className="text-right">
              Valor Inicial
            </Label>
            <Input id="finalValue"  value={assetData.finalValue} className="col-span-3"  onChange={(e) => handleChange('finalValue', Number(e.target.value))}/>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="finalValue" className="text-right">
              Valor Final
            </Label>
            <Input id="finalValue"  value={assetData.finalValue} className="col-span-3"  onChange={(e) => handleChange('finalValue', Number(e.target.value))}/>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="percentage" className="text-right">
              Porcentagem de desvalorização
            </Label>
            <Input id="percentage"  value={assetData.percentage} className="col-span-3" maxLength={100} onChange={(e) => handleChange('percentage', Number(e.target.value))}/>
          </div>

        </div>
        <SheetFooter>
          <SheetClose asChild>
          <Button type="submit" onClick={() => props.update(assetData)}>Salvar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
        </>
    )
}