import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){

    function addMeetUpHandler(meetupData){
        fetch(
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
        </section>
    );
}

export default NewMeetupPage;