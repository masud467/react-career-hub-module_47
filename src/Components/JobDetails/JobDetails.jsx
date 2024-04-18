import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    const handleApplyJob =()=> {
        saveJobApplication(idInt)
        toast.success("Applied Successfully !");
    }
    return (
        <div className="mb-5">
            <h1 className="text-2xl text-center font-bold mb-10">Job Details</h1>
            <div className="grid gap-5 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h1 className=""><span className="text-xl font-semibold">Job Description:</span> {job.job_description}</h1>
                    <h1 className="my-5"><span className="text-xl font-semibold">Job Responsibility:</span> {job.job_responsibility}</h1>
                    <h1 className="text-xl font-semibold">Educational Requirements:</h1> 
                    <p>{job.educational_requirements}</p>
                    <h1 className="text-xl font-semibold mt-5">Experiences:</h1>
                    <p>{job.experiences}</p>
                </div>
                <div className="border bg-[#F4F1FF] ">
                    <div className="p-5">
                    <h1 className="text-2xl mb-8">Jod Details</h1>
                    <p>Salary: {job.salary}</p>
                    <p>Job Title: {job.job_title}</p>
                    <h1 className="mt-5 mb-8">Contact Information</h1>
                    <p><span>Phone:</span> {job.contact_information.phone} </p>
                    <p><span>Email:</span> {job.contact_information.email}</p>
                    <p><span>Address:</span> {job.contact_information.address} </p>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;