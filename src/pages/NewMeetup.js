import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom';

function NewMeetups() {
const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch("https://react-acad-default-rtdb.firebaseio.com/meetups.json", {
     method :'POST',
     body:JSON.stringify(meetupData),
     headers:{
        'Content-Type': 'application/json'
     }
    }
    ).then(()=>{
        navigate('/');
    });
  }

  return (
    <section>
      <h1>New Meet Up</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetups;
