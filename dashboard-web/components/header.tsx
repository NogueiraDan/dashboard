import { isOwner } from "@/lib/actions";
import { MainNav } from "./main-nav";
import ProfileMenu from "./profile-menu";
import { Search } from "./search";

export default async function Header() {
  const owner = await isOwner();
  return (
    <div className="flex flex-col mb-6 md:flex-row items-center justify-between gap-3">
      <MainNav className="bg-[#F4F4F5] items-center justify-center rounded-lg py-1 px-2 text-muted-foreground" />
      <div className="gap-3 flex flex-row justify-around items-center">
        <Search />
        <ProfileMenu isOwner={owner}/>
      </div>
    </div>
  );
}
