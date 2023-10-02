import React, { useState } from "react";
import JSONDATA from './mock-data.json';

const Filters=()=>{
    const [searchTerm, setSearchTerm] = useState("");
    return(
        <div>
            <input type="text" placeholder="Search..." onChange={(event) => {setSearchTerm(event.target.value); }} />
            {
                    JSONDATA.filter((val)=>{
                        if (searchTerm == ""){
                            return val
                        }else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((val,key)=> {
                        return (
                            <div key={key}>
                                <p>{val.first_name}</p>  
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default Filters;




















