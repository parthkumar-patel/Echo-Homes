import imgh1 from "../images/imgh1.jpg";
import imgh2 from "../images/imgh2.jpg";
import imgh3 from "../images/imgh3.jpg";
import imgv1 from "../images/imgv1.jpg";
import imgv2 from "../images/imgv2.jpeg";
import imgv3 from "../images/imgv3.jpg";
import "../styles/Galary.css";

export default function Galary() {
  return (
    <div className="Container">
      <section className="self-center md:-translate-y-8 2xl:-translate-y-20">
        <h1 className="typs-heading-hero">
          Swap homes &amp; travel <i className="italic">freely</i>
        </h1>
        <h5 className="typs-body-1 mt-6 text-secondary md:max-w-full md:pe-12 xl:pe-72 2xl:pe-96">
          Members-only home exchange network, powered by close community. Share
          homes and travel for $0/nightly.
        </h5>
        <div className="mt-6 flex flex-row items-center gap-x-5">
          <a
            className='font-inter flex shrink-0 items-center justify-center rounded-full duration-150 disabled:pointer-events-none disabled:cursor-not-allowed whitespace-pre font-semibold border border-transparent bg-button-primary text-button-primary hover:bg-button-primary-hover active:bg-button-primary-hover disabled:bg-button-primary-disabled disabled:text-overlay data-[disabled="true"]:bg-button-primary-disabled data-[disabled="true"]:text-overlay min-w-20 px-5 py-2 text-s13 lg:px-7 lg:py-3 lg:text-s16 cursor-pointer'
            href="/onboarding"
          >
            Apply now
          </a>
          <h3 className="typs-caption-3">Renters &amp; owners welcome</h3>
        </div>
      </section>
      <div className="row">
        <div className="col-lg-3 col-md-3 mb-4 mb-lg-0">
          <img
            src={imgh1}
            className="w-100 shadow-1-strong  mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={imgv1}
            className="w-100 shadow-1-strong  mb-4"
            alt="Wintry Mountain Landscape"
          />

          <img
            src={imgh3}
            className="w-100 shadow-1-strong  mb-4"
            alt="Waves at Sea"
          />
        </div>

        <div className="col-lg-3 mb-3 mb-lg-0">
          <img
            src={imgv2}
            className="w-100 shadow-1-strong  mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src={imgh2}
            className="w-100 shadow-1-strong  mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={imgv3}
            className="w-100 shadow-1-strong  mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  );
}
