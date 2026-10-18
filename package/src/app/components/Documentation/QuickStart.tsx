import bcmsDocumentation from "../../../../bcms-content/documentation.json";
import { bcms, bcmsStyle } from "../../../bcms-content";
export const QuickStart = () => {
  return (
    <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="start">
      <h3 className=" text-black text-2xl font-semibold mt-8" data-bcms-field="desgy-h3-quick-start" data-bcms-kind="text">{bcms(bcmsDocumentation, "desgy-h3-quick-start", "Quick Start")}</h3>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium" data-bcms-field="desgy-h6-1-requirements" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-h6-1-requirements")}>{bcms(bcmsDocumentation, "desgy-h6-1-requirements", "1. Requirements")}</h6>
        <p className="text-base font-medium text-muted/60" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-before-proceeding-you-need", 'Before proceeding, you need to have the latest stable <a href="https://nodejs.org/" class="text-primary">node.js</a> ') }} data-bcms-field="desgy-p-before-proceeding-you-need" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-before-proceeding-you-need")}></p>
        <h6 className="mt-4 mb-2 text-black font-medium text-base" data-bcms-field="desgy-h6-recommended-environment" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-h6-recommended-environment")}>{bcms(bcmsDocumentation, "desgy-h6-recommended-environment", "Recommended environment:")}</h6>
        <ul className="list-disc text-muted/60 ps-6">
          <li data-bcms-field="desgy-list-node-js-20[0]" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-list-node-js-20[0]")}>{bcms(bcmsDocumentation, "desgy-list-node-js-20[0]", "node js 20+")}</li>
          <li data-bcms-field="desgy-list-node-js-20[1]" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-list-node-js-20[1]")}>{bcms(bcmsDocumentation, "desgy-list-node-js-20[1]", "npm js 10+")}</li>
        </ul>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium" data-bcms-field="desgy-h6-2-install" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-h6-2-install")}>{bcms(bcmsDocumentation, "desgy-h6-2-install", "2. Install")}</h6>
        <p className="text-base font-medium text-muted/60" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-open-package-folder-and", 'Open package folder and install its dependencies. We recommanded yarn or npm. ') }} data-bcms-field="desgy-p-open-package-folder-and" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-open-package-folder-and")}></p>
        <h6 className="mt-4 mb-2 text-black text-dark font-medium text-base" data-bcms-field="desgy-h6-1-install-with-npm" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-h6-1-install-with-npm")}>{bcms(bcmsDocumentation, "desgy-h6-1-install-with-npm", "1) Install with npm:")}</h6>
        <div className="py-4 px-3 rounded-md bg-dark_grey">
          <p className="text-sm text-black/60" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-cd-project-folder", '<span class="text-yellow-500">cd</span> project-folder') }} data-bcms-field="desgy-p-cd-project-folder" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-cd-project-folder")}></p>
          <p className="text-sm text-black/60 mt-2" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-npm-install", "npm install") }} data-bcms-field="desgy-p-npm-install" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-npm-install")}></p>
        </div>
        <h6 className="mt-4 mb-2 text-black text-dark font-medium text-base" data-bcms-field="desgy-h6-1-install-with-yarn" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-h6-1-install-with-yarn")}>{bcms(bcmsDocumentation, "desgy-h6-1-install-with-yarn", "1) Install with yarn:")}</h6>
        <div className="py-4 px-3 rounded-md bg-dark_grey">
          <p className="text-sm text-black/60" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-cd-project-folder", '<span class="text-yellow-500">cd</span> project-folder') }} data-bcms-field="desgy-p-cd-project-folder" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-cd-project-folder")}></p>
          <p className="text-sm text-black/60 mt-2" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-yarn-install", "yarn install") }} data-bcms-field="desgy-p-yarn-install" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-yarn-install")}></p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium" data-bcms-field="desgy-h6-3-start" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-h6-3-start")}>{bcms(bcmsDocumentation, "desgy-h6-3-start", "3. Start")}</h6>
        <p className="text-base font-medium text-muted/60 mb-4" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-once-npm-install-is", "Once npm install is done now you an run the app.") }} data-bcms-field="desgy-p-once-npm-install-is" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-once-npm-install-is")}></p>

        <div className="py-4 px-3 rounded-md bg-dark_grey">
          <p className="text-sm text-black/60" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-npm-run-dev-or", "npm run dev or yarn run dev") }} data-bcms-field="desgy-p-npm-run-dev-or" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-npm-run-dev-or")}></p>
        </div>
        <p className="text-base font-medium text-muted/60 my-4" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-this-command-will-start", 'This command will start a local webserver <span class="dark:text-black">http://localhost:3000:</span>') }} data-bcms-field="desgy-p-this-command-will-start" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-this-command-will-start")}></p>
        <div className="py-4 px-3 rounded-md bg-dark_grey">
          <p className="text-sm text-black/60" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-desgyproject010-dev", '&gt; desgy_project@0.1.0 dev') }} data-bcms-field="desgy-p-desgyproject010-dev" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-desgyproject010-dev")}></p>
          <p className="text-sm text-black/60 mt-1" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-next-dev", '&gt; next dev') }} data-bcms-field="desgy-p-next-dev" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-next-dev")}></p>
          <p className="text-sm text-black/60 mt-6" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-nextjs-1424", '-Next.js 14.2.4') }} data-bcms-field="desgy-p-nextjs-1424" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-nextjs-1424")}></p>
          <p className="text-sm text-black/60 mt-1" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-local-httplocalhost3000", '-Local: http://localhost:3000') }} data-bcms-field="desgy-p-local-httplocalhost3000" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-local-httplocalhost3000")}></p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-6 border-dark_border/60">
        <h6 className="text-black text-lg font-medium" data-bcms-field="desgy-h6-4-build-deployment" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-h6-4-build-deployment")}>{bcms(bcmsDocumentation, "desgy-h6-4-build-deployment", "4. Build / Deployment")}</h6>
        <p className="text-base font-medium text-muted/60 mb-4" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-after-adding-url-run", "After adding url run below command for build a app.") }} data-bcms-field="desgy-p-after-adding-url-run" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-after-adding-url-run")}></p>

        <div className="py-4 px-3 rounded-md bg-dark_grey">
          <p className="text-sm text-black/60" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-npm-run-build-or", "npm run build or yarn build") }} data-bcms-field="desgy-p-npm-run-build-or" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-npm-run-build-or")}></p>
        </div>
        <p className="text-base font-medium text-muted/60 mt-6" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-p-finally-your-webiste-is", "Finally, Your webiste is ready to be deployed.🥳") }} data-bcms-field="desgy-p-finally-your-webiste-is" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-p-finally-your-webiste-is")}></p>
      </div>
    </div>
  );
};
