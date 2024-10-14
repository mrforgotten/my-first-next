interface UserProfileByIdParams {
  id: string;
}

interface UserProfileByIdProps {
  params: UserProfileByIdParams;
}

export default function UserProfileById({ params }: UserProfileByIdProps) {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto w-1/2 p-4">
        <h1>User name id is {params.id}</h1>
      </div>
    </div>
  );
}
