import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){

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
        );
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