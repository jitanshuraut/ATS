import { Job_Tracker } from "../../Schemas/Mongo_Schema";
import { v4 as uuidv4 } from "uuid";

//     Id: ID,
//     User_Id: ID,
//     Applied: [String],
//     Noted: [String],
//     Responses: [String],

async function Create_Job_Tracker(User_Id, Applied, Noted, Responses) {
  try {
    const Id = String(uuidv4());

    console.log(id_user);
    const Job_Tracker_var = new Job_Tracker({
      Id,
      User_Id,
      Applied,
      Noted,
      Responses,
    });

    await Job_Tracker_var.save();

    console.log("-------------------------------------------------------");
    console.log(" ");
    console.log(Job_Tracker_var);
    console.log(" ");
    console.log("-------------------------------------------------------");

    return Job_Tracker_var;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
}

async function Edit_Job_Tracker(Id, User_Id, Applied, Noted, Responses) {
  try {
    const Edit_Job_Tracker_var = await Job_Tracker.updateOne(
      { Id: Id },
      { $push: { Applied: Applied } },
      { $push: { Noted: Noted } },
      { $push: { Responses: Responses } },
      { upsert: true }
    );
    console.log("-------------------------------------------------------");
    console.log(" ");
    console.log(Edit_Job_Tracker_var);
    console.log(" ");
    console.log("-------------------------------------------------------");

    return Edit_Job_Tracker_var;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
}

export { Create_Job_Tracker, Edit_Job_Tracker };
