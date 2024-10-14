type functionReturnUserIdList = () => number[];
type functionReturnUserIdLiProb = (id: number) => JSX.Element;

export function getUserIdLIst(): number[] {
  const userIdList = [1, 2, 3, 4, 5];
  return userIdList;
}

export function userIdLiProb(id: number): JSX.Element {
  return (
    <a key={id} href={`/user/${id}`}>
      <li>id {id}</li>
    </a>
  );
}

export function getUserIdProbList(
  getUserFn: functionReturnUserIdList,
  toLiProbFn: functionReturnUserIdLiProb
): JSX.Element[] {
  const userIdList = getUserFn();
  const renderElementList: JSX.Element[] = [];
  for (const id of userIdList) {
    toLiProbFn(id);
  }
  return renderElementList;
}