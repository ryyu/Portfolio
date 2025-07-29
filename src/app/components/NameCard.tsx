import React from 'react'

type nameCardType = {
    selected: string,
    setIsSelected: (arg0: string) => void
}

const NameCard = ({
    selected,
    setIsSelected
}: nameCardType) => {
  return (
    <div className="flex flex-col justify-start gap-4 pe-6">
        <h1 className="text-4xl">Ryan Yu</h1>
        <div>
            <p onClick={() => {console.log("setting state to Kiddleton"); setIsSelected('Kiddleton')}}>-Kiddleton</p>
            <p onClick={() => {
                console.log("Setting Is Selected to Codago"); setIsSelected("Codago")}}>-Codago</p>
            <p>-Projects</p>
        </div>
    </div>
  )
}

export default NameCard