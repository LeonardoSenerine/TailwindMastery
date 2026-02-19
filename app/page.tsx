import { Mail } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "./components/Input";
import { SettingsTabs } from "./components/SettingsTabs";
import * as FileInput from "./components/Form/FileInput";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col  ">
        <div className="flex justify-between items-center border-b pb-5 border-zinc-200 ">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 ">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border cursor-pointer border-zinc-300 text-zinc-700 hover:bg-zinc-50 ">
              Cancel
            </button>
            <button
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm cursor-pointer bg-violet-600 text-white hover:bg-violet-700 "
              form="settings"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex flex-col w-full divide-y divide-zinc-200 gap-5 "
          action=""
        >
          <div className="grid gap-3 pb-5 grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="firstName"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Leonardo" />
              </InputRoot>
              <InputRoot>
                <InputControl defaultValue="Senerine" />
              </InputRoot>
            </div>
            <div />
          </div>

          <div className="grid gap-3 grid-cols-form ">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="grid gap-6 grid-cols-1 pb-5 ">
              <InputRoot>
                <InputPrefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </InputPrefix>
                <InputControl
                  id="email"
                  type="email"
                  defaultValue="senerineleonardo@gmail.com"
                />
              </InputRoot>
            </div>
            <div />
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              className="text-sm font-medium text-zinc-700 "
              htmlFor="photo"
            >
              Your photo
              <span className="text-sm font-normal mt-0.5 text-zinc-500 block">
                This will be displayed on your profile.
              </span>
            </label>
            <div>
              <FileInput.Root className="flex items-start gap-5 ">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
            <div />
          </div>

          <div className="grid gap-3 grid-cols-form  ">
            <label className="text-sm font-medium text-zinc-700" htmlFor="role">
              Role
            </label>
            <div className="grid gap-6 grid-cols-1 pb-5 ">
              <InputRoot>
                <InputControl id="role" defaultValue="CTO" />
              </InputRoot>
            </div>
            <div />
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="country"
            >
              Country
            </label>
            <div></div>
            <div />
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="timezone"
            >
              Timezone
            </label>
            <div></div>
            <div />
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label className="text-sm font-medium text-zinc-700 " htmlFor="bio">
              Bio
              <span className="text-sm font-normal mt-0.5 text-zinc-500 block">
                Write a short introduction.
              </span>
            </label>
            <div></div>
            <div />
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              className="text-sm font-medium text-zinc-700 "
              htmlFor="projects"
            >
              Portfolio projects
              <span className="text-sm font-normal mt-0.5 text-zinc-500 block">
                Share a few snippets of your work.
              </span>
            </label>
            <div>
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.FileList />
                <FileInput.Control multiple />
              </FileInput.Root>
            </div>
            <div />
          </div>

          <div className="flex items-center justify-end gap-2 ">
            <button className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border cursor-pointer border-zinc-300 text-zinc-700 hover:bg-zinc-50 ">
              Cancel
            </button>
            <button
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm cursor-pointer bg-violet-600 text-white hover:bg-violet-700 "
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
