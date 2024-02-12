import { User } from "../../Schemas/Mongo_Schema";
import { v4 as uuidv4 } from "uuid";

// Id: ID,
// First_name: String,
// Middel_name: String,
// Last_name: String,
// Gender: Int,
// Job_Tracker_Id: ID,
// Job_Applied_Id: ID,
// Resume: String,
// profile_path: String,
// Contact_Information: String,
// Intro: String,

async function AddUser(
  First_name,
  Middel_name,
  Last_name,
  Gender,
  Resume,
  profile_path,
  Contact_Information,
  Email,
  Intro
) {
  try {
    const id_user = String(uuidv4());
    const Job_Tracker_Id = String(uuidv4());
    const Job_Applied_Id = String(uuidv4());

    console.log(id_user);
    const user = new User({
      id_user,
      First_name,
      Middel_name,
      Last_name,
      Gender,
      Job_Tracker_Id,
      Job_Applied_Id,
      Resume,
      profile_path,
      Contact_Information,
      Email,
      Intro,
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

export { AddUser };
