"use client";
import { UpdateProfileModal } from "@/components/UpdateProfileModal";
import { useSession } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
  const userData = useSession();
  const user = userData.data?.user;

  return (
    <div className="space-y-3 py-7">
      <Card className="flex flex-col justify-center items-center mx-auto max-w-96 border border-blue-800 shadow-lg">
        <Avatar className="h-24 w-24">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <p className="text-2xl font-semibold">{user?.name}</p>
        <p className="text-gray-400 font-semibold">{user?.email}</p>
        <UpdateProfileModal />
      </Card>
    </div>
  );
};

export default ProfilePage;
