import { formatBytes } from "@/app/utils/format-bytes";
import { CheckCircle2, CloudUpload, Trash2 } from "lucide-react";
import { Button } from "../../Button";
import { tv, VariantProps } from "tailwind-variants";
export interface FileItemProps extends VariantProps<typeof fileItems> {
  name: string;
  size: number;
}

const fileItems = tv({
  slots: {
    container:
      "group flex items-start gap-4 rounded-lg border p-4 border-zinc-200",
    icon: "rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 ",
    deleteButton: "",
  },
  variants: {
    state: {
      progress: {
        container: "",
      },
      complete: {
        container: " border-violet-500",
      },
      error: {
        container: "bg-error-25 border-error-300",
        icon: "border-error-50 bg-error-100 text-error-600",
        deleteButton: "text-error-700 hover:text-error-900",
      },
    },
  },
  defaultVariants: {
    state: "progress",
  },
});
export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItems({ state });
  return (
    <>
      <div className={container()}>
        <div className={icon()}>
          <CloudUpload className="h-4 w-4" />
        </div>

        {state === "error" ? (
          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium  text-error-700">
                Upload Failed, please try again.
              </span>
              <span className="text-sm text-error-600">{name}</span>
            </div>
            <button className="text-sm font-smibold text-error-700 hover:text-error-900">
              Try again
            </button>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700">{name}</span>
              <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
            </div>
            <div className="flex w-full items-center gap-3">
              <span className="h-2 flex-1 rounded-full bg-zinc-100">
                <div
                  className="h-2 rounded-full bg-violet-600 "
                  style={{
                    width: state === "complete" ? "100%" : "80%",
                  }}
                ></div>
              </span>
              <span className="text-sm font-medium text-zinc-700">
                {state === "complete" ? "100%" : "80%"}
              </span>
            </div>
          </div>
        )}

        {state === "complete" ? (
          <CheckCircle2 className="h-5 w-5 text-white fill-violet-600" />
        ) : (
          <Button variant="ghost" type="button" className={deleteButton()}>
            <Trash2 className="h-5 w-5 " />
          </Button>
        )}
      </div>
    </>
  );
}
