import { Link } from "react-router-dom";

const BabysitterCard = ({babysitter}) => {
    return (
      <div>
          <h2>{babysitter.first_name}, age: {babysitter.age}</h2>
          <h3>Desired Pay Rate:${babysitter.pay_rate}/hr</h3>
          {/* <h3>Has cared for {needs to count how many parent ids} families</h3> */}
          <p>{babysitter.about_me}</p>
          <Link to="/bookings/new"><button>Book Me!</button></Link>
          {/* It would be nice to do custom route here that creates a booking for this specific babysitter without having to fill the form out from scratch. Like if this sitter is preselected */}
          <br></br>
      </div>
    )
  }

export default BabysitterCard


