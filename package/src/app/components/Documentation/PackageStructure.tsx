import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import tline from "/public/images/svgs/T-Line.svg";
import t_half_line from "/public/images/svgs/T-half_line.svg";
import straight_line from "/public/images/svgs/straight_group.svg";
import small_straight_line from "/public/images/svgs/smal_straight_line.svg";
import bcmsDocumentation from "../../../../bcms-content/documentation.json";
import { bcms, bcmsStyle } from "../../../bcms-content";

export const PackageStructure = () => {
  const Counts = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  return (
    <div id="structure" className="md:scroll-m-[130px] scroll-m-28">
      <h3 className="text-2xl font-semibold mt-8 text-black" data-bcms-field="desgy-h3-pacakge-structure" data-bcms-kind="text">
        {bcms(bcmsDocumentation, "desgy-h3-pacakge-structure", "Pacakge Structure")}
      </h3>
      <div className="rounded-md p-6 pt-3 border border-dark_border/60 mt-6">
        <div className="flex items-center gap-4">
          <h5 className="text-base font-medium text-muted mt-3 mb-1" data-bcms-field="desgy-h5-desgy-tailwind-nextjs-template" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-h5-desgy-tailwind-nextjs-template")}>{bcms(bcmsDocumentation, "desgy-h5-desgy-tailwind-nextjs-template", "Desgy Tailwind NextJs Template")}</h5>
        </div>
        <ul className="ps-0 md:ps-5 list-unstyled">
          <li className="py-2">
            <div className="flex items-center gap-3">
              <p className="text-xl text-black">|—</p>
              <span className="font-medium text-muted">
                <Icon
                  icon="tabler:folder"
                  className="text-primary text-base inline-block me-2"
                />
                <span data-bcms-field="desgy-span-packages" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-packages")}>{bcms(bcmsDocumentation, "desgy-span-packages", "packages")}</span>
              </span>
            </div>
            <ul className="ps-5 md:ps-5 list-unstyled">
              <li className="py-0">
                <ul className="ps-2 ps-md-3 list-unstyled">
                  <li className="py-2">
                    <ul className="ps-0 md:ps-5 list-unstyled">
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black">|—</p>
                          <span className="font-medium text-muted">
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                            />
                            <span data-bcms-field="desgy-span-markdown" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-markdown")}>{bcms(bcmsDocumentation, "desgy-span-markdown", "markdown")}</span>
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black">|—</p>
                          <span className="font-medium text-muted">
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                            />
                            <span data-bcms-field="desgy-span-public" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-public")}>{bcms(bcmsDocumentation, "desgy-span-public", "public")}</span>
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black">|—</p>
                          <span className="font-medium text-muted">
                            <Icon
                              icon="tabler:folder"
                              className="text-primary text-base inline-block me-2"
                            />
                            <span data-bcms-field="desgy-span-src" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-src")}>{bcms(bcmsDocumentation, "desgy-span-src", "src")}</span>
                          </span>
                        </div>
                        <div className="flex">
                          <div className="flex flex-col justify-between gap-2 mt-2">
                            {Counts.slice(0, 22).map((item) => {
                              return <p className="text-xl text-black">|</p>;
                            })}
                          </div>
                          <ul className="ps-5 md:ps-12 list-unstyled">
                            <li className="py-2">
                              <div className="flex items-center gap-3">
                                <p className="text-xl text-black">|—</p>
                                <span className="font-medium text-muted">
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                  />
                                  <span data-bcms-field="desgy-span-app" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-app")}>{bcms(bcmsDocumentation, "desgy-span-app", "app")}</span>
                                </span>
                              </div>
                              <div className="flex">
                                <div className="flex flex-col justify-between gap-2 mt-2">
                                  {Counts.slice(0, 16).map((item) => {
                                    return (
                                      <p className="text-xl text-black">|</p>
                                    );
                                  })}
                                </div>
                                <ul className="ps-5 md:ps-12 list-unstyled red">
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black">|—</p>
                                      <span className="font-medium text-muted">
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                        />
                                        <span data-bcms-field="desgy-span-site" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-site")}>{bcms(bcmsDocumentation, "desgy-span-site", "(site)")}</span>
                                      </span>{" "}
                                      <span className="fs-9 text-muted ms-4" data-bcms-field="desgy-group-icon[2].span-contains-all-the-pages" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-group-icon[2].span-contains-all-the-pages")}>{bcms(bcmsDocumentation, "desgy-group-icon[2].span-contains-all-the-pages", "(Contains all the pages)")}</span>
                                    </div>
                                    <div className="flex">
                                      <div className="flex flex-col justify-between gap-2 mt-2">
                                        {Counts.slice(0, 5).map(
                                          (item, index) => {
                                            return (
                                              <p
                                                key={index}
                                                className="text-xl text-black"
                                              >
                                                |
                                              </p>
                                            );
                                          }
                                        )}
                                      </div>

                                      <ul className="ps-5 md:ps-12 list-unstyled">
                                        <li className="py-2">
                                          <div className="flex items-center gap-3">
                                            <p className="text-xl text-black">
                                              |—
                                            </p>
                                            <span className="font-medium text-muted">
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                              />
                                              <span data-bcms-field="desgy-span-auth" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-auth")}>{bcms(bcmsDocumentation, "desgy-span-auth", "(auth)")}</span>
                                            </span>
                                          </div>
                                          <div className="flex">
                                            <div className="flex flex-col justify-between gap-1 mt-2">
                                              {Counts.slice(0, 2).map(
                                                (item) => {
                                                  return (
                                                    <p className="text-xl text-black">
                                                      |
                                                    </p>
                                                  );
                                                }
                                              )}
                                            </div>
                                            <ul className="ps-5 md:ps-12 list-unstyled">
                                              <li className="py-2">
                                                <div className="flex items-center gap-8">
                                                  <p className="text-xl text-black">
                                                    |
                                                  </p>
                                                  <div className="flex items-center gap-3">
                                                    <p className="text-xl text-black">
                                                      |—
                                                    </p>
                                                    <span className="font-medium text-muted">
                                                      <Icon
                                                        icon="tabler:folder"
                                                        className="text-primary text-base inline-block me-2"
                                                      />
                                                      <span data-bcms-field="desgy-span-signin" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-signin")}>{bcms(bcmsDocumentation, "desgy-span-signin", "signin")}</span>
                                                    </span>
                                                  </div>
                                                </div>
                                              </li>
                                              <li className="py-2">
                                                <div className="flex items-center gap-8">
                                                  <p className="text-xl text-black">
                                                    |
                                                  </p>
                                                  <div className="flex items-center gap-3">
                                                    <p className="text-xl text-black">
                                                      |—
                                                    </p>
                                                    <span className="font-medium text-muted">
                                                      <Icon
                                                        icon="tabler:folder"
                                                        className="text-primary text-base inline-block me-2"
                                                      />
                                                      <span data-bcms-field="desgy-span-signup" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-signup")}>{bcms(bcmsDocumentation, "desgy-span-signup", "signup")}</span>
                                                    </span>
                                                  </div>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                        </li>
                                        <li className="py-2">
                                          <div className="flex items-center gap-3">
                                            <p className="text-xl text-black">
                                              |—
                                            </p>
                                            <span className="font-medium text-muted">
                                              <Icon
                                                icon="tabler:folder"
                                                className="text-primary text-base inline-block me-2"
                                              />
                                              <span data-bcms-field="desgy-span-documentation" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-documentation")}>{bcms(bcmsDocumentation, "desgy-span-documentation", "documentation")}</span>
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black">|—</p>
                                      <span className="font-medium text-muted">
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                        />
                                        <span data-bcms-field="desgy-span-api" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-api")}>{bcms(bcmsDocumentation, "desgy-span-api", "api")}</span>
                                      </span>
                                    </div>
                                    <div className="flex">
                                      <div className="flex flex-col justify-between gap-2 mt-2">
                                        {Counts.slice(0, 2).map((item) => {
                                          return (
                                            <p className="text-xl text-black">
                                              |
                                            </p>
                                          );
                                        })}
                                      </div>
                                      <ul className="ps-5 md:ps-12 list-unstyled">
                                        <li className="py-2">
                                          <div className="flex items-center gap-8">
                                            <p className="text-xl text-black">
                                              |
                                            </p>
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black">
                                                |—
                                              </p>
                                              <span className="font-medium text-muted">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary text-base inline-block me-2"
                                                />
                                                <span data-bcms-field="desgy-span-auth-2" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-auth-2")}>{bcms(bcmsDocumentation, "desgy-span-auth-2", "auth")}</span>
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="py-2">
                                          <div className="flex items-center gap-8">
                                            <p className="text-xl text-black">
                                              |
                                            </p>
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black">
                                                |—
                                              </p>
                                              <span className="font-medium text-muted">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary text-base inline-block me-2"
                                                />
                                                <span data-bcms-field="desgy-span-contex" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-contex")}>{bcms(bcmsDocumentation, "desgy-span-contex", "contex")}</span>
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black">|—</p>
                                      <span className="font-medium text-muted">
                                        <Icon
                                          icon="tabler:folder"
                                          className="text-primary text-base inline-block me-2"
                                        />
                                        <span data-bcms-field="desgy-span-context" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-context")}>{bcms(bcmsDocumentation, "desgy-span-context", "Context")}</span>
                                      </span>
                                    </div>
                                    <div className="flex">
                                      <div className="flex flex-col justify-between gap-2 mt-2">
                                        {Counts.slice(0, 1).map((item) => {
                                          return (
                                            <p className="text-xl text-black">
                                              |
                                            </p>
                                          );
                                        })}
                                      </div>
                                      <ul className="ps-5 md:ps-12 list-unstyled">
                                        <li className="py-2">
                                          <div className="flex items-center gap-8">
                                            <p className="text-xl text-black">
                                              |
                                            </p>
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black">
                                                |—
                                              </p>
                                              <span className="font-medium text-muted flex items-center flex-wrap">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary text-base inline-block me-2"
                                                />
                                                <p className="max-w-12 lg:max-w-full truncate" dangerouslySetInnerHTML={{ __html: bcms(bcmsDocumentation, "desgy-group-icon[2].p-authdialogcontexttsx", "authDialogContext.tsx") }} data-bcms-field="desgy-group-icon[2].p-authdialogcontexttsx" data-bcms-kind="richtext" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-group-icon[2].p-authdialogcontexttsx")}></p>
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black">|—</p>
                                      <span className="font-medium text-muted" data-bcms-field="desgy-group-icon[2].span-globalcss" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-group-icon[2].span-globalcss")}>{bcms(bcmsDocumentation, "desgy-group-icon[2].span-globalcss", "global.css")}</span>
                                    </div>
                                  </li>
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black">|—</p>
                                      <span className="font-medium text-muted" data-bcms-field="desgy-group-icon[2].span-layouttsx" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-group-icon[2].span-layouttsx")}>{bcms(bcmsDocumentation, "desgy-group-icon[2].span-layouttsx", "layout.tsx")}</span>
                                    </div>
                                  </li>
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black">|—</p>
                                      <span className="font-medium text-muted" data-bcms-field="desgy-group-icon[2].span-not-foundtsx" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-group-icon[2].span-not-foundtsx")}>{bcms(bcmsDocumentation, "desgy-group-icon[2].span-not-foundtsx", "not-found.tsx")}</span>
                                    </div>
                                  </li>
                                  <li className="py-2">
                                    <div className="flex items-center gap-3">
                                      <p className="text-xl text-black">|—</p>
                                      <span className="font-medium text-muted" data-bcms-field="desgy-group-icon[2].span-pagetsx" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-group-icon[2].span-pagetsx")}>{bcms(bcmsDocumentation, "desgy-group-icon[2].span-pagetsx", "page.tsx")}</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="flex items-center flex-wrap gap-3">
                                <p className="text-xl text-black">|—</p>
                                <span className="font-medium text-muted">
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                  />
                                  <span data-bcms-field="desgy-span-components" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-components")}>{bcms(bcmsDocumentation, "desgy-span-components", "components")}</span>
                                </span>{" "}
                                <span className="fs-9 text-muted ms-4" data-bcms-field="desgy-group-icon[2].span-all-the-components-of" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-group-icon[2].span-all-the-components-of")}>{bcms(bcmsDocumentation, "desgy-group-icon[2].span-all-the-components-of", "(All the Components of this template.)")}</span>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="flex items-center gap-3">
                                <p className="text-xl text-black">|—</p>
                                <span className="font-medium text-muted">
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                  />
                                  <span data-bcms-field="desgy-span-styles" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-styles")}>{bcms(bcmsDocumentation, "desgy-span-styles", "styles")}</span>
                                </span>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="flex items-center gap-3">
                                <p className="text-xl text-black">|—</p>
                                <span className="font-medium text-muted">
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                  />
                                  <span data-bcms-field="desgy-span-types" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-types")}>{bcms(bcmsDocumentation, "desgy-span-types", "types")}</span>
                                </span>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="flex items-center gap-3">
                                <p className="text-xl text-black">|—</p>
                                <span className="font-medium text-muted">
                                  <Icon
                                    icon="tabler:folder"
                                    className="text-primary text-base inline-block me-2"
                                  />
                                  <span data-bcms-field="desgy-span-utils" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-utils")}>{bcms(bcmsDocumentation, "desgy-span-utils", "utils")}</span>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black">|—</p>
                          <span className="font-medium text-muted">
                            <i className="ti ti-file me-2 text-primary font-bold" />
                            <span data-bcms-field="desgy-span-nextconfigmjs" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-nextconfigmjs")}>{bcms(bcmsDocumentation, "desgy-span-nextconfigmjs", "next.config.mjs")}</span>
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black">|—</p>
                          <span className="font-medium text-muted">
                            <i className="ti ti-file me-2 text-primary font-bold" />
                            <span data-bcms-field="desgy-span-postcssconfigmjs" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-postcssconfigmjs")}>{bcms(bcmsDocumentation, "desgy-span-postcssconfigmjs", "postcss.config.mjs")}</span>
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black">|—</p>
                          <span className="font-medium text-muted">
                            <i className="ti ti-file me-2 text-primary font-bold" />
                            <span data-bcms-field="desgy-span-packagejson" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-packagejson")}>{bcms(bcmsDocumentation, "desgy-span-packagejson", "package.json")}</span>
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black">|—</p>
                          <span className="font-medium text-muted">
                            <i className="ti ti-file me-2 text-primary font-bold" />
                            <span data-bcms-field="desgy-span-tailwindconfigts" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-tailwindconfigts")}>{bcms(bcmsDocumentation, "desgy-span-tailwindconfigts", "tailwind.config.ts")}</span>
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xl text-black">|—</p>
                          <span className="font-medium text-muted">
                            <i className="ti ti-file me-2 text-primary font-bold" />
                            <span data-bcms-field="desgy-span-tsconfigjson" data-bcms-kind="text" data-bcms-style="2" style={bcmsStyle(bcmsDocumentation, "desgy-span-tsconfigjson")}>{bcms(bcmsDocumentation, "desgy-span-tsconfigjson", "tsconfig.json")}</span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
