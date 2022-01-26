import { useState } from "react";
function Conditional(){
    const[logeIn, setLogeIn] = useState(true)

return(
    <div>
        {logeIn?<h1>Welcome Subhan</h1>: <h1>Welcome Abdul</h1>}
    </div>
)
}
export default Conditional;