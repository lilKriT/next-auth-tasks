import Image from "next/image";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type props = {
  user: User;
};

const UserCard = ({ user }: props) => {
  const greeting = user?.name ? <p>Hello, {user.name}</p> : null;

  const userImage = user?.image ? (
    <Image
      className="w-16 rounded-full m-4"
      src={user.image}
      width={200}
      height={200}
      alt="User image"
      priority
    />
  ) : null;

  return (
    <div>
      <p>{!user ? "No user" : "Yes user"}</p>
      {greeting}
      {userImage}
    </div>
  );
};

export default UserCard;
