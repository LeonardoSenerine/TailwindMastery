import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <>
      <div className="grid items-center gap-3 grid-cols-profile ">
        <img
          src="https://github.com/LeonardoSenerine.png"
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-1 flex-col truncate ">
          <span className="text-sm font-semibold text-zinc-700">
            Leonardo Senerine
          </span>
          <span className="text-sm truncate text-zinc-500">
            senerineleonardo@gmail.com
          </span>
        </div>
        <button
          type="button"
          className="ml-auto p-2 hover:bg-zinc-50 rounded-md"
        >
          <LogOut className="h-5 w-5 text-zinc-500" />
        </button>
      </div>
    </>
  );
}
