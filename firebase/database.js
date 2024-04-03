import { ref, set } from "firebase/database";
import { db } from "../firebase/config";

export function createPost(data) {
  return set(ref(db, "users/" + data?.name), data);
}
