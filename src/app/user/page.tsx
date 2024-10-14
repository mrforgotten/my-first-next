import { getUserIdLIst, getUserIdProbList, userIdLiProb } from "./userProb";

export default function UserPage() {
  return (
    <div className="mx-auto w-1/2 p-4">
      <h1>Your user page</h1>
      <ol>{getUserIdProbList(getUserIdLIst, userIdLiProb)}</ol>
    </div>
  );
}
