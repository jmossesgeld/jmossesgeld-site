const Box = ({ children, className, ...props }: any) => {
  return (
    <div
      className={
        "backdrop-blur-lg relative my-10 border-indigo-100 border-2 p-3 mx-4 rounded-lg shadow-md md:right-28 hover:scale-110 transition-all duration-200 " +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
};

const BodyText = ({ children, className, ...props }: any) => {
  return (
    <div className={"text-md mt-2 max-w-xl mx-4 " + className} {...props}>
      {children}
    </div>
  );
};

const Heading = ({ children, className, ...props }: any) => {
  return (
    <h1 className={"font-black text-2xl mx-4 mt-6 " + className} {...props}>
      {children}
    </h1>
  );
};

const Date = ({ children, ...props }: any) => {
  return (
    <div
      className="bg-purple-300 rounded-md mb-4 font-bold text-white py-1 px-3 mx-4 w-max my-5"
      {...props}
    >
      {children}
    </div>
  );
};

const Trail = ({ year, right: left }: { year: string; right?: boolean }) => {
  return (
    <div className="flex flex-col h-full gap-4 mx-auto w-max mt-10">
      {[0, 1, 2].map((i) => (
        <div key={i} className="rounded-full bg-purple-300 w-5 h-5 top-0"></div>
      ))}
      <div
        className={
          "absolute mt-5 text-6xl font-bold text-violet-200  " +
          (left ? "right-1/2 mr-10 " : "ml-12 md:ml-24 ")
        }
      >
        {year}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about">
      <div className="max-w-xl mx-auto py-20">
        <h1 className="font-black text-4xl mt-16 mb-8 text-center">Career Timeline</h1>
        <Trail year="2022" />
        <div></div>
        <Box>
          <Date>January 2021 to present</Date>
          <Heading>Accounting and I.T. Specialist</Heading>
          <BodyText>
            <ul className="list-disc marker:text-indigo-400 space-y-3 ml-4">
              <li>
                Finished studies in programming and web development and currently working on
                projects with local clients.
              </li>
              <li>
                Most recent project is the development of a web-based payroll software aimed to
                greatly reduce complexity of payroll preparation. Features include timekeeping,
                Excel report generation, employee management, automatic computation for late,
                absences, overtime, withholding taxes, and more.
              </li>
              <li>
                Other projects include, POS systems, Inventory Management systems and Automatic BIR
                reports generation for tax reports submissions.
              </li>
            </ul>
          </BodyText>
        </Box>
        <Trail year="2021" />
        <div></div>
        <Box>
          <Date>January 2018 to January 2021 </Date>
          <Heading>Senior Auditor / Accountant</Heading>
          <BodyText> NPC and Co., CPAs</BodyText>
          <BodyText>
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
          </BodyText>
          <BodyText className="font-semibold">
            My years of working as a public accountant led me to have a strong understanding of how
            to work in a fast-paced environment, how to deal with clients, and how to work in a
            team.
          </BodyText>
        </Box>
        <Trail year="2018" />
        <div></div>
        <Box>
          <Date>May 2017 to October 2017</Date>
          <Heading>Philippine Licensure Examination for Certified Public Accountants</Heading>
          <BodyText>Professional Regulation Commission | Board of Accountancy</BodyText>
          <BodyText>
            <ul className="list-disc marker:text-indigo-400 space-y-3 ml-4">
              <li>Prepared for six months for the licensure exam.</li>
              <li>Passed and scored within top 16% of the examinees nationwide.</li>
            </ul>
          </BodyText>
        </Box>

        <Trail year="2017" />
        <div></div>
        <Box>
          <Date>October 2016 - April 2017</Date>
          <Heading>Tax Associate</Heading>
          <BodyText>NPC and Co., CPAs</BodyText>
          <BodyText>
            <ul className="list-disc marker:text-indigo-400 space-y-3 ml-4">
              <li>
                Worked in the firm as an undergraduate. Handled preparation, computation and filing
                of tax returns for the clients.
              </li>
              <li>
                Assignments are always delivered on time with zero missed deadlines even under
                pressurizing time constraints.
              </li>
            </ul>
          </BodyText>
        </Box>
        <Trail year="2016" />
        <div></div>
        <Box>
          <Date>June 2013 - April 2017</Date>
          <Heading>Bachelor of Science in Accountancy</Heading>
          <BodyText>Polytechnic University of the Philippines</BodyText>
          <BodyText>
            <ul className="list-disc marker:text-indigo-400 space-y-3 ml-4">
              <li>
                Recognized for the Accounting System Thesis in 2016, which was written in Visual
                Basic.
              </li>
              <li>One of the top performers in the class.</li>
            </ul>
          </BodyText>
        </Box>
        <Trail year="2013" />
      </div>
    </section>
  );
}
