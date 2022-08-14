import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom';

function NewMeetupPage(){
    const history = useNavigate();
    function addMeetUpHandler(meetupData){
        fetch(
            // form data from NewMeetupForm is saved in firebase as table
            'https://react-getting-started-947f3-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=>{
            history('/');
            // '/new-meetup' using this keeps the form data after submit
        });
    }

    return(
        <section>
            <h1>new Meetup form</h1>
            <NewMeetupForm onAddMeetUp={addMeetUpHandler}/>
            {/* check syntax and function definition
             and parameter in NewMeetupForm props.onAddMeetUp(meetupFormData) and addMeetUpHandler(meetupData)*/}
        </section>
    );
}

export default NewMeetupPage;