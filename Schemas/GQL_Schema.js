import gql from "graphql-tag";

const typeDefs = gql`
  type Resumes {
    Submited_on: Date
    Link: String
    KeyWord_vector_id: ID!
    Id: ID!
    Job_Id: ID!
    Job_Title: String
    User_Id: String
  }

  type Resumes_ATS {
    Id: ID!
    Resumes_ID: ID!
    Contact_Information:String
    Objective:String
    Summary:String
    Education:String
    Education_Rateing:Int
    Experience:Float
    Skills:[String]
    Projects:[String]
    Projects_Rateing:[Float]
    Certifications:[String]
    Licenses:[String]
    Awards:[String]
    Honors:[String]
    Publications:[String]
    References:[String]
    Technical Skills:[String]
    Computer Skills:[String]
    Programming Languages:[String]
    Software Skills:[String]
    Soft Skills:[String]
    Language Skills:[String]
    Professional Skills:[String]
    Transferable Skills:[String]
    Work Experience:Float
    Professional Experience:Float
    Employment History:[String]
    Internship Experience:[String]
    Volunteer Experience:[String]
    Leadership Experience:[String]
    Research Experience:[String]
    Teaching Experience:[String]
  }

  type Resumes_ATS_PR {
    
  }

  type User {
    Id: ID!
    First_name: String
    Middel_name: String
    Last_name: String
    Gender: Int
    Job_Tracker_Id: ID!
    Job_Applied_Id:ID!
    Resume: String
    profile_path: String
    Contact_Information:String
    Intro: String    
  }
  

  type Job_Tracker {
    Id:ID!
    User_Id: ID!
    Applied: [String]
    Noted:[String]
    Responses:[String]
  }

  

  type Query {
    
  }
`;

export default typeDefs;
