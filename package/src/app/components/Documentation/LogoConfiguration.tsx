import bcmsDocumentation from "../../../../bcms-content/documentation.json";
import { bcms, bcmsStyle } from "../../../bcms-content";
export const LogoConfiguration = () => {
  return (
    <>
      <h3 className=" text-xl font-semibold mt-8 text-black" data-bcms-field="desgy-h3-logo" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-h3-logo")}>{bcms(bcmsDocumentation, "desgy-h3-logo", "Logo")}</h3>
      <div className="p-6 rounded-md border mt-4 border-dark_border/60">
        <p className="text-base font-medium text-muted/60 flex lg:flex-row flex-col" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-1-change-logo-over", '1. Change Logo over here : <span class="font-semibold text-base overflow-x-auto"> src/components/Layout/Header/Logo/index.tsx</span> ') }} data-bcms-field="desgy-p-1-change-logo-over" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-1-change-logo-over")}></p>
        <div className="py-4 px-3 rounded-md bg-dark_grey mt-8">
          <div className="text-sm text-gray-400">
            <p dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-link-href", "&#x3C;Link href=&#x22;/&#x22;&#x3E;") }} data-bcms-field="desgy-p-link-href" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-link-href")}></p>
            <p dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-image", "&#x3C;Image") }} data-bcms-field="desgy-p-image" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-image")}></p>
            <p dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-srcimageslogologosvg", "src=&#x22;/images/logo/logo.svg&#x22;") }} data-bcms-field="desgy-p-srcimageslogologosvg" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-srcimageslogologosvg")}></p>
            <p dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-altlogo", "alt=&#x22;logo&#x22;") }} data-bcms-field="desgy-p-altlogo" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-altlogo")}></p>
            <p dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-width160", 'width=160') }} data-bcms-field="desgy-p-width160" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-width160")}></p>
            <p dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-height50", 'height=50') }} data-bcms-field="desgy-p-height50" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-height50")}></p>
            <p dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-quality100", 'quality=100') }} data-bcms-field="desgy-p-quality100" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-quality100")}></p>
            <p dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-stylewidth-auto-height-auto", "style=&#x7B;width: &#x22;auto&#x22;, height:\n              &#x22;auto&#x22;&#x7D;") }} data-bcms-field="desgy-p-stylewidth-auto-height-auto" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-stylewidth-auto-height-auto")}></p>
            <p>/&#x3E;</p>
          </div>
        </div>
      </div>
    </>
  );
};
