import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJob = async () => {
    const response = await fetch(url);
    const gigs = await response.json();

    setJob(gigs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJob();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  // console.log(job)
  // job.map((item) =>{
  //   return item
  // })

  const {id, company, title, dates, duties} = job[value];

  return (
    <div className="section">
      <div>
        <h2 className="title">Your Experiences:</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
      {job.map((item, i) => {
        return (
            <button key={item.id} onClick={()=> setValue(i)}
            className={`btn ${i === value && 'active-btn'}`}>{item.company}</button>
        );
      })}
      </div>


      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>

        {duties.map((duty, i) => {
          return(
            <div key={i} className= 'job-desc'>
              <FaAngleDoubleRight className="job-icon">
              </FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          )
        })}
      </article>
      </div>
    </div>
  );
}

export default App;
