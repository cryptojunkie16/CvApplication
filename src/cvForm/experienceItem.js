import React from "react";
import { Input } from "../components/utilities/input";
import { Button } from "../components/utilities/button";

export const ExperienceItem = ({id, experienceItem, onChange, onDelete}) => {
    return(
        <>
            <Input 
            onChange={(e) => onChange(e, id)}
            type="text"
            name="position"
            placeholder="Position"
            value={experienceItem.position}/>
            <Input
            onChange={(e) => onChange(e, id)}
            type="text"
            name="company"
            placeholder="Company"
            value={experienceItem.company}/>
            <Input
            onChange={(e) => onChange(e, id)}
            type="text"
            name="city"
            placeholder="City"
            value={experienceItem.city}/>
            <Input
            onChange={(e) => onChange(e, id)}
            type="text"
            name="from"
            placeholder="From"
            value={experienceItem.from}/>
            <Input onChange={(e) => onChange(e, id)}
            type="text"
            name="to"
            placeholder="To"
            value={experienceItem.to}/>
            <Button text="Delete" onClick={() => onDelete(id)} delBtn></Button>
        </>
    )
}