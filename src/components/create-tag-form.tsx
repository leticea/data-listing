import { Check } from "lucide-react";
import { Button } from "./ui/button";

export function CreateTagForm() {
  return (
    <form>
      <div>
        <label>Tag name</label>
        <input type="text" />
      </div>

      <div>
        <label>Slug</label>
        <input type="text" readOnly />
      </div>

      <div>
        <Button>Cancel</Button>
        <Button type="submit">
          <Check className="size-3" />
          Save
        </Button>
      </div>
    </form>
  );
}
