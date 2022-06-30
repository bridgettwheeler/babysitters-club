import BabysittersList from "../components/BabysittersList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
        <Link to="/bookings/new"><button>Book Me!</button></Link>
        {/* It would be nice to do custom route here that creates a booking for this specific babysitter without having to fill the form out from scratch. Like if this sitter is preselected */}
        
    </div>
  )
}


export default BabysittersContainer