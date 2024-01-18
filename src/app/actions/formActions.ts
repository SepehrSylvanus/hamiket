"use server";

import { writeFile } from "fs/promises";
import { join } from "path";

export const formUpload = async (data: FormData) => {
  const formDate: { [key: string]: string | File } = {
    profilePic: data.get("profilePic") as File,
    name: data.get("name") as string,
    gender: data.get("gender") as string,
    birthDate: data.get("birthDate") as string,
    age: data.get("age") as string,
  };
  
  console.log(formDate);
 if(formDate.profilePic instanceof File){
  console.log(formDate.profilePic.name)
 }
  const file: File | null = data.get("profilePic") as unknown as File;
  if (!file) {
    throw new Error("No file uploaded");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const path = join(process.cwd(), "public", file.name);
  await writeFile(path, buffer);
  console.log(`open ${path} to see the uploaded file`);
};
