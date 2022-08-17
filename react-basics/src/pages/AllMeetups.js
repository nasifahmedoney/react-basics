import MeetupList from "../components/meetups/MeetupList";
import { useState,useEffect } from "react";


function AllMeetupsPage(){
const [dataIsLoading,setDataIsLoading] = useState(true);
const [loadedData,setLoadedData] = useState([]);


useEffect(()=>{
  setDataIsLoading(true);
  fetch(
    'https://react-getting-started-947f3-default-rtdb.firebaseio.com/meetups.json',
  ).then(response =>{
    return response.json();
  }).then(data => {
    const meetups = [];
    for(const key in data){
      const meetup = {
        id: key,
        ...data[key]
      }
      meetups.push(meetup);
      // console.log(meetups);
    }
    setDataIsLoading(false);
    setLoadedData(meetups);
  });
},[]);

if(dataIsLoading){
  return(
    <section>
      <p>Loading...</p>
    </section>
  );
}

    return (<section>
        <h1>All meetups</h1>
          <MeetupList meetup={loadedData} />
        </section>
        );
}

export default AllMeetupsPage;