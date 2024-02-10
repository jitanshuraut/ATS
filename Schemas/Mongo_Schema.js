import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    Id: ID,
    First_name: String,
    Middel_name: String,
    Last_name: String,
    Gender: Int,
    Job_Tracker_Id: ID,
    Job_Applied_Id: ID,
    Resume: String,
    profile_path: String,
    Contact_Information: String,
    Intro: String,
  },
  { timestamps: true }
);

const Resumes = new mongoose.Schema(
  {
    Submited_on: Date,
    Link: String,
    KeyWord_vector_id: ID,
    Id: ID,
    Job_Id: ID,
    Job_Title: String,
    User_Id: String,
  },
  { timestamps: true }
);

const Resumes_ATS = new mongoose.Schema(
  {
    Id: ID,
    Resumes_ID: ID,
    Contact_Information: String,
    Objective: String,
    Summary: String,
    Education: String,
    Education_Rateing: Int,
    Experience: Float,
    Skills: [String],
    Projects: [String],
    Projects_Rateing: [Float],
    Certifications: [String],
    Licenses: [String],
    Awards: [String],
    Honors: [String],
    Publications: [String],
    References: [String],
    Technical_Skills: [String],
    Computer_Skills: [String],
    Programming_Languages: [String],
    Software_Skills: [String],
    Soft_Skills: [String],
    Language_Skills: [String],
    Professional_Skills: [String],
    Transferable_Skills: [String],
    Work_Experience: Float,
    Professional_Experience: Float,
    Employment_History: [String],
    Internship_Experience: [String],
    Volunteer_Experience: [String],
    Leadership_Experience: [String],
    Research_Experience: [String],
    Teaching_Experience: [String],
  },
  { timestamps: true }
);

const Job_Tracker = new mongoose.Schema(
  {
    Id: ID,
    User_Id: ID,
    Applied: [String],
    Noted: [String],
    Responses: [String],
  },
  { timestamps: true }
);
