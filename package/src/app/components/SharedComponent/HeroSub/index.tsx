import React, { FC } from "react";

interface HeroSubProps {
    title: string;
    /** The field BetterCMS derived the title as. */
    titleField?: string;
}

const HeroSub: FC<HeroSubProps> = ({ title, titleField }) => {

    return (
        <>
            <section className="py-40 bg-herosub-bg bg-no-repeat bg-cover lg:mt-40 sm:mt-44 mt-20">
                <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                    <h2 className="text-white md:text-56 text-36 font-medium" data-bcms-field={titleField} data-bcms-kind={titleField && "text"}>{title}</h2>
                </div>
            </section>
        </>
    );
};

export default HeroSub;