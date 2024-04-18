import { FaLocationDot } from "react-icons/fa6";
import { AiTwotoneDollar } from "react-icons/ai";
import { Link } from "react-router-dom";




/* eslint-disable react/prop-types */
const Job = ({ job }) => {
  const { id,logo, job_title,company_name,remote_or_onsite,location,job_type,salary,} = job;
  return (
    <div className="">
      <div className="  bg-base-100 shadow-xl p-6 rounded-2xl">
        
        <figure className=''>
          <img
            src={logo}
            alt=""
          />
        </figure>
        <div className="">
          <h2 className="card-title my-5">{job_title}</h2>
          <p>{company_name}</p>
          <div className="mt-5">
            <button className="border rounded border-[#7E90FE] px-6 py-2 font-extrabold mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="border rounded border-[#7E90FE] px-6 py-2 font-extrabold text-[#7E90FE]">{job_type}</button>
          </div>
          <div className="flex gap-5 my-5">
             <h2 className="flex gap-2"><FaLocationDot className="text-2xl"></FaLocationDot>{location}</h2>
             <h2 className="flex gap-2"><AiTwotoneDollar className="text-2xl"></AiTwotoneDollar>Salary: {salary}</h2>
          </div>
          <div className="card-actions">
          <Link to={`/job/${id}`}>
             <button className="btn btn-primary">View Details </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Job;
