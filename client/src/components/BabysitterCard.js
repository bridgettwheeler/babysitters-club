const BabysitterCard = ({babysitter}) => {
    return (
      <div>
          <h2>{babysitter.first_name}, age: {babysitter.age}</h2>
          {/* <h3>Has cared for {needs to count how many parent ids} families</h3> */}
          <h3>{babysitter.about_me}</h3>
          <h3>Desired Pay Rate:${babysitter.pay_rate}/hr</h3>      
          <br></br>
      </div>
    )
  }

export default BabysitterCard


