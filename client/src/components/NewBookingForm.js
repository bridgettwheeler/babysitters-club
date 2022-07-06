import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

const NewBookingForm = ({user}) => {
  const [booking, setBooking] = useState({
    date: "",
  })


  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/bookings/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({booking})
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        // r.json().then(booking => setUser(currentUser => {...currentUser, bookings: [...user.bookings, booking]}) 
        navigate("/profile");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <Wrapper>
      <WrapperChild>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="date">Select date and time</Label>
            <Input
              onChange={ e => setBooking({...booking, [e.target.name]: e.target.value})}
              name="date"
              type="datetime-local"
              id="date"
              value={booking.date}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Book this sitter"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;


export default NewBookingForm