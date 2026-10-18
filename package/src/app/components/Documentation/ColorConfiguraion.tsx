import bcmsDocumentation from "../../../../bcms-content/documentation.json";
import { bcms, bcmsStyle } from "../../../bcms-content";
export const ColorConfiguration = () => {
  return (
    <>
      <h3 className=" text-xl font-semibold mt-8 text-black" data-bcms-field="desgy-h3-colors" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-h3-colors")}>{bcms(bcmsDocumentation, "desgy-h3-colors", "Colors")}</h3>
      <div className="p-6 rounded-md border mt-4 border-dark_border/60">
        <p className="text-base font-medium text-muted/60" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-1-override-colors-for", '<span class="font-semibold text-lg text-black">1. Override Colors</span> <br />For any change in colors : tailwind.config.ts') }} data-bcms-field="desgy-p-1-override-colors-for" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-1-override-colors-for")}></p>
        <div className="py-4 px-5 rounded-md bg-dark_grey mt-8">
          <p className="text-sm text-black/60 flex flex-col gap-2">
            <span>primary: "#0066FF",</span>
            <span>purple: "#1E013A",</span>
            <span>grey: "#F4F5F6",</span>
            <span>border: "#DBDBDB",</span>
            <span>darkmode: "#00224a",</span>
            <span>deepSlate: "#02398A",</span>
          </p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-4 border-dark_border/60">
        <p className="text-base font-medium text-muted/60" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-2-override-theme-colors", '<span class="font-semibold text-lg text-black">2. Override Theme Colors</span> <br />For change , go to : tailwind.config.ts') }} data-bcms-field="desgy-p-2-override-theme-colors" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-2-override-theme-colors")}></p>
        <div className="py-4 px-5 rounded-md bg-dark_grey mt-8">
          <p className="text-sm text-black/60 flex flex-col gap-2">
            <span>primary: "#0066FF",</span>
            <span>darkmode: "#00224a",</span>
          </p>
        </div>
      </div>
    </>
  );
};
