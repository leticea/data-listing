import { Check, X } from "lucide-react";
import { Button } from "./ui/button";

export function CreateTagForm() {
  return (
    <form className="w-full">
      <div>
        <label>Tag name</label>
        <input type="text" />
      </div>

      <div>
        <label>Slug</label>
        <input type="text" readOnly />
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button>
          <X className="size-3" />
          Cancel
        </Button>
        <Button className="bg-teal-400 text-teal-950" type="submit">
          <Check className="size-3" />
          Save
        </Button>
      </div>
    </form>
  );
}
