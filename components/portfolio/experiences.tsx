import Image from "next/image";
import { useInView } from "react-intersection-observer";

const bodyText = "text-md mt-2 max-w-xl mx-4 ";
const heading = "font-black text-xl mx-4 mt-6 ";
const workBox =
  "backdrop-blur-lg relative my-10 md:my-20 border-indigo-100 border-2 p-3 mx-4 rounded-lg shadow-md md:odd:left-28 md:even:right-28 hover:scale-110 transition-all duration-200";

export default function About() {
  const { ref, inView } = useInView({});
  return (
    <div className={"" + (inView ? " animate-fade-in-down" : " opacity-0")} ref={ref} id="about">
      <div className="flex justify-evenly items-center flex-col h-4/5 mx-auto text-center  bg-indigo-100 py-24">
        <div
          className={bodyText + " italic bg-violet-200 rounded-xl p-8 flex flex-col items-center"}
        >
          <Image
            src="/images/profile2.jpg"
            height={200}
            width={200}
            alt="profile img"
            className="rounded-full"
            priority
          />
          <p className="mt-6">
            I am a web developer with a passion for creating value by improving
            and simplifying business processes through building modern tools and software.
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto">
        <h1 className="font-black text-4xl mt-16 text-center">Work Experience</h1>
        <div className={workBox}>
          <h3 className={heading}>Accounting and I.T. Consultant</h3>
          <em className={bodyText}>2021-present</em>
          <p className={bodyText}>
            <ul className="list-disc marker:text-indigo-400 space-y-3 ml-4">
              <li>
                Providing web and software solutions for clients alongside with accounting and tax
                services.
              </li>
              <li>
                Clients handled include manufacturing companies, factories, construction companies,
                and hospitals.
              </li>
              <li>
                Most recent project is the development of a web-based payroll software aimed to
                greatly reduce complexity of payroll preparation. Instead of the tedious
                timekeeping, computation of overtime, tardiness, absences, mandatory deductions,
                etc., the users, by using the software, can reduce their payroll preparation times
                by 90%.
              </li>
              <li>
                Assignments are always delivered on time with zero missed deadlines even on
                pressurizing time constraints.
              </li>
            </ul>
          </p>
        </div>

        <div className={workBox}>
          <h3 className={heading}>Senior Auditor/ Accountant</h3>
          <p className={bodyText}> NATHANIEL P. COLOBONG AND CO., CPAS</p>
          <em className={bodyText}>2017-2021 (4 years)</em>
          <p className={bodyText}>
            <ul className="list-disc marker:text-indigo-400 space-y-3 ml-4">
              <li>
                Primarily responsible for leading and working with teams of auditors and accountants
                in internal and external audits.
              </li>
              <li>
                Clients handled include manufacturing companies, factories, construction companies,
                and hospitals.
              </li>
              <li>
                Reporting and presenting findings to client&apos;s top management, making
                recommendations and offering solutions.
              </li>
              <li>
                Managed to improve productivity and compliance of my clients by 75% in average.
              </li>
            </ul>
          </p>
          <p className={bodyText + " font-semibold"}>
            My years of working as a public accountant led me to have a strong understanding of how
            to work in a fast-paced environment, how to deal with clients, and how to work in a
            team.
          </p>
        </div>
      </div>
    </div>
  );
}
