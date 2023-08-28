import React, { useState, ChangeEvent } from 'react'

interface Props {
    name: string
    email: string
    age: number
}


const Person = (props: Props) => {

    const [country, setCountry] = useState<string | null>(null)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }


    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <h1>{props.age}</h1>

            <input placeholder='write your country name' onChange={handleChange} />
            <h1>{country}</h1>
        </div>
    )
}

export default Person