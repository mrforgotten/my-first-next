const userIdList = [1, 2, 3, 4, 5];
const refList: JSX.Element[] = [];
for (const id of userIdList) {
  refList.push(
    <a key={id} href={`/user/${id}`}>
      <li>id {id}</li>
    </a>
  );
}
export default function UserPage() {
  return (
    <div className="mx-auto w-1/2 p-4">
      <h1>Your user page</h1>
      <ol>{refList}</ol>
    </div>
  );
}
