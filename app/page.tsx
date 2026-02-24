import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "./components/Input";
import { SettingsTabs } from "./components/SettingsTabs";
import * as FileInput from "./components/Form/FileInput";
import { Select } from "./components/Form/Select";
import { SelectItem } from "./components/Form/Select/SelectItem";
import { TextArea } from "./components/Form/TextArea";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium dark:text-zinc-100 text-zinc-900">
        Settings
      </h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col  ">
        <div className="flex flex-col lg:items-center lg:flex-row dark:border-zinc-700 justify-between gap-4 border-b pb-5 border-zinc-200 ">
          <div className="space-y-1">
            <h2 className="text-lg font-medium dark:text-zinc-100 text-zinc-900 ">
              Personal info
            </h2>
            <span className="text-sm dark:text-zinc-400 text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="submit">
              Save
            </Button>
            <Button type="button" variant="primary">
              Cancel
            </Button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex flex-col w-full divide-y dark:divide-zinc-700 divide-zinc-200 gap-5 "
          action=""
        >
          <div className=" gap-3 flex flex-col pb-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
              htmlFor="firstName"
            >
              Name
            </label>

            <div className="lg:grid gap-6 flex flex-col lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Leonardo" />
              </InputRoot>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  className="text-sm font-medium dark:text-zinc-300 lg:sr-only text-zinc-700"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <InputRoot>
                  <InputControl id="lastName" defaultValue="Senerine" />
                </InputRoot>
              </div>
            </div>
            <div />
          </div>

          <div className="gap-3 flex flex-col pb-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="grid gap-6 grid-cols-1">
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

          <div className="gap-3 flex flex-col pb-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700 "
              htmlFor="photo"
            >
              Your photo
              <span className="text-sm font-normal mt-0.5 dark:text-zinc-400 text-zinc-500 block">
                This will be displayed on your profile.
              </span>
            </label>
            <div>
              <FileInput.Root className="flex lg:flex-row flex-col lg:items-start gap-5 ">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
            <div />
          </div>

          <div className="gap-3 flex flex-col pb-5 lg:grid lg:grid-cols-form ">
            <label
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
              htmlFor="role"
            >
              Role
            </label>
            <div className="grid gap-6 grid-cols-1  ">
              <InputRoot>
                <InputControl id="role" defaultValue="CTO" />
              </InputRoot>
            </div>
            <div />
          </div>

          <div className="gap-3 flex flex-col pb-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
              htmlFor="country"
            >
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="gap-3 flex flex-col pb-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
              htmlFor="timezone"
            >
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="gap-3 flex flex-col pb-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700 "
              htmlFor="bio"
            >
              Bio
              <span className="text-sm font-normal mt-0.5 dark:text-zinc-400 text-zinc-500 block">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className=" flex flex-col lg:grid gap-3 lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <TextArea
                id="bio"
                defaultValue="I'm a software engineer with 5 years of experience in building scalable web applications. I specialize in React, TypeScript, and Node.js."
              />
            </div>
          </div>

          <div className="gap-3 flex flex-col pb-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700 "
              htmlFor="projects"
            >
              Portfolio projects
              <span className="text-sm font-normal mt-0.5 dark:text-zinc-400 text-zinc-500 block">
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
            <Button variant="outline" type="submit">
              Save
            </Button>
            <Button type="button" variant="primary">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
