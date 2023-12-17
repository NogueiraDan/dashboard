import { Input } from "@/components/new-york/input";
import { Button } from "./ui/button";
import { Search as SearchIcon } from "lucide-react";

export function Search() {
  return (
    <div className="flex flex-row items-center gap-1">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
      <Button variant={"outline"}>
        <SearchIcon />
      </Button>
    </div>
  );
}
