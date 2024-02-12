import { interviewer } from "../../Schemas/Mongo_Schema";
import { v4 as uuidv4 } from "uuid";

// Id: ID,
// First_name: String,
// Middel_name: String,
// Last_name: String,
// Gender: Int,
// Job_Post_Id: ID,
// Company: String,
// profile_path: String,
// Contact_Information: String,

async function AddAdmin(
  First_name,
  Middel_name,
  Last_name,
  Gender,
  Company,
  profile_path,
  Contact_Information,
  Email
) {
  try {
    const id_user = String(uuidv4());
    const Job_Post_Id = String(uuidv4());

    console.log(id_user);
    const user = new interviewer({
      id_user,
      First_name,
      Middel_name,
      Last_name,
      Gender,
      Job_Post_Id,
      Company,
      profile_path,
      Contact_Information,
      Email,
    });

    await user.save();
    console.log("-------------------------------------------------------");
    console.log(" ");
    console.log(user);
    console.log(" ");
    console.log("-------------------------------------------------------");

    return user;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
}

export { AddAdmin };
