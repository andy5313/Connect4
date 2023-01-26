import { useRef } from 'react';

const Form = () => {
  const nicknameRef = useRef(null);
  const ageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nicknameRef.current.value, ageRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nickname:
        <input type="text" ref={nicknameRef} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" ref={ageRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
  
};

export default Form;