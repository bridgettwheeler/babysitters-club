import BabysittersList from "../components/BabysittersList";
import { useEffect, useState } from "react";



const BabysittersContainer = ({user}) => {
    const [babysitters, setBabysitters] = useState([])

    useEffect(() => {   
            fetch("/api/babysitters")
            .then(resp => resp.json())
            .then(data => {
                setBabysitters(data)
              })
      }, []);

      

    //   Use this if I want a sorting feature
//     const handleClick = (e) => {
//     e.preventDefault();
//     fetch("/api/babysitters")
//         .then(resp => resp.json())
//             .then(data => {
//                 setBabysitters(data)
//               })
// }
    

  return (
    <div>
        {/* <button onClick={handleClick}> Order by years of experience or rating...</button> */}
        <BabysittersList user={user} babysitters={babysitters} />
    </div>
  )
}


export default BabysittersContainer