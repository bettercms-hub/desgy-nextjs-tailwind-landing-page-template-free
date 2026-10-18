import bcmsDocumentation from "../../../../bcms-content/documentation.json";
import { bcms, bcmsStyle } from "../../../bcms-content";
export const TypographyConfiguration = () => {
  return (
    <>
      <h3 className="text-xl font-semibold mt-8 text-black" data-bcms-field="desgy-h3-typography" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-h3-typography")}>{bcms(bcmsDocumentation, "desgy-h3-typography", "Typography")}</h3>
      <div className="p-6 rounded-md border mt-4 border-dark_border/60">
        <p className="text-base font-medium text-muted/60" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-1-change-font-family", '1. Change Font family over here : <span class="font-semibold text-base">src/app/layout.tsx</span> ') }} data-bcms-field="desgy-p-1-change-font-family" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-1-change-font-family")}></p>
        <div className="py-4 px-3 rounded-md bg-dark_grey mt-8">
          <p className="text-sm text-gray-400 flex flex-col gap-2 mb-3" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-import-montserrat-from-nextfontgoogle", 'import { Montserrat } from &quot;next/font/google&quot;;') }} data-bcms-field="desgy-p-import-montserrat-from-nextfontgoogle" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-import-montserrat-from-nextfontgoogle")}></p>
          <p className="text-sm text-gray-400 flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-const-montserrat-montserrat-subsets", 'const montserrat = Montserrat({ subsets: [&quot;latin&quot;] });') }} data-bcms-field="desgy-p-const-montserrat-montserrat-subsets" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-const-montserrat-montserrat-subsets")}></p>
        </div>
      </div>
    </>
  );
};
