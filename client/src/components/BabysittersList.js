import BabysitterCard from "./BabysitterCard";

const BabysittersList = ({user, babysitters}) => {
    const renderBabysitters = () => {
        return (
          <div>
          {babysitters.map(babysitter => <BabysitterCard key={babysitter.id} babysitter={babysitter} user={user} />)}
          </div>  
        )
    }
  return (
    <div>{renderBabysitters()}</div>
  )
}

export default BabysittersList
