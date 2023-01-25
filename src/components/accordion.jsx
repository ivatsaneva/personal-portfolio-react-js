import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function AccordionItem() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  function Icon({ id, open }) {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${id === open ? "rotate-45" : ""} `}
      >
        <path
          d="M18 19C18.5523 19 19 18.5523 19 18L19 9C19 8.44771 18.5523 8 18 8C17.4477 8 17 8.44771 17 9L17 17L9 17C8.44771 17 8 17.4477 8 18C8 18.5523 8.44771 19 9 19L18 19ZM0.292893 1.70711L17.2929 18.7071L18.7071 17.2929L1.70711 0.292893L0.292893 1.70711Z"
          fill="black"
        />
      </svg>
    );
  }
  return (
    <Fragment>
      <Accordion
        open={open === 1}
        className="pb-1"
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(1)} className="text-lg pb-4 font-light"> Experience </AccordionHeader>
        <AccordionBody>
          <div className='accordion-content'>
            <ul className='pl-4'>
              <li className='pb-2 leading-8'>
                <div className='position'><div className='font-medium inline-block leading-8  '>UX/UI Designer & Web Developer</div> <span className='devider'>-</span> <div className='company inline-block'>Boil Agency</div></div>
                <div className='year'>2021 - Current</div>
              </li>
              <li className='leading-8'>
                <div className='position'><div className='font-medium inline-block leading-8'>Jr. Front-end Developer</div> <span className='devider'>-</span> <div className='company inline-block'>Webma Studio</div></div>
                <div className='year'>2017 - 2021</div>
              </li>
            </ul>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className="text-lg pb-4 font-light">Education</AccordionHeader>
        <AccordionBody>
        <div className='accordion-content'>
            <ul className='pl-4'>
              <li className='pb-2 leading-8'>
                <div className='position'><div className='font-medium inline-block leading-8'>JS Advanced</div> <span className='devider'>-</span> <div className='company inline-block'>SoftUni</div></div>
                <div className='year'>2022 - 2023</div>
              </li>
              <li className='pb-2'>
                <div className='position leading-8'><div className='font-medium inline-block leading-8'>Software Engineering</div> <span className='devider'>-</span> <div className='company inline-block'>Cardiff Metropolitan University</div></div>
                <div className='year'>2020 - 2021</div>
              </li>
              <li>
                <div className='position leading-8'><div className='font-medium inline-block leading-8'>Software Systems and Technologies</div> - <div className='company inline-block'>VUM</div></div>
                <div className='year'>2018 - 2021</div>
              </li>
            </ul>
          </div>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
