import mongoose from "mongoose";
import connectToDatabase from "./db/connect.js";

//* connect database API
connectToDatabase();

export const Students = mongoose.model("Students", {
  prenom: {
    type: String,
  },
  nom: {
    type: String,
  },
  age: {
    type: Number,
  },
});

//* Get students:
export const findStudents = () => {
  const students = Students.find();
  return students;
};

//* Get student by id:
export const findStudentsById = async (id) => {
  try {
    const student = await Students.findById({ _id: id }).exec();
    return student;
  } catch (error) {
    throw new Error("Student not found"); // Re-throw the error for handling in the calling function
  }
};

//* delete student by id:
export const deleteStudentsById = (age) => {
  const remove = Students.deleteOne({ age: age });
  return remove;
};

//* findStudentsByAge
export const findStudentsByAge = async (age) => {
  try {
    const students = await Students.find({ age: age }).exec();
    return students;
  } catch (error) {
    throw new Error("Error finding students by age");
  }
};

// * Create student :
export const addStudent = async (data) => {
  const student = new Students(data); // Create student object
  try {
    const existingStudents = await findStudentsByAge(student.age);
    if (existingStudents.length > 0) {
      return null; // Return null to indicate that the student wasn't added
    } else {
      await student.save(); // Insert student into the database
      return student;
    }
  } catch (error) {
    throw new Error("Error adding student");
  }
};

//* Update by id:
export const updateStudentById = (id, data) => {
  const edite = Students.updateOne(
    { _id: id },
    { $set: data },
    { upsert: true }
  );
  return edite;
};
