import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import { Helmet } from "react-helmet-async";


const Appliedjobs = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  const [displayJob,setDisplayJob] = useState([])

  const handleFilterJobs = filter => {
    if(filter==='all'){
        setDisplayJob(appliedJob)
    }
    else if(filter==='remote'){
        const remoteJob = appliedJob.filter(job=> job.remote_or_onsite==="Remote")
        setDisplayJob(remoteJob)
    }
    else if(filter==='onsite'){
        const onsiteJob = appliedJob.filter(job=> job.remote_or_onsite==='Onsite')
        setDisplayJob(onsiteJob)
    }
  }


  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job=>storedJobIds.includes(job.id))
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJob(jobsApplied);
      setDisplayJob(jobsApplied)
      // console.log(jobs,storedJobIds,jobsApplied)
    }
  }, []);
  return (
    <div>
      <Helmet>
        <title>Career Hub | applied jobs</title>
      </Helmet>
      
      <h1 className="text-2xl">I applied the jobs: {appliedJob.length}</h1>

      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu  bg-base-100 rounded-box w-52">   
        {/* dropdown-content z-[1] */}
          <li onClick={()=>handleFilterJobs('all')}><a>All</a></li>
          <li onClick={()=>handleFilterJobs('remote')}><a>Remote</a></li>
          <li onClick={()=>handleFilterJobs('onsite')}><a>Onsite</a></li>
        </ul>
      </details>

      <ul className="space-y-4">
        {
            displayJob.map((job) => (
                <li key={job.id}>
                  <span>{job.job_title}</span>
                  <p>{job.company_name}</p>
                  <p>{job.remote_or_onsite}</p>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default Appliedjobs;
