import Project from "./project";

export default function Projects() {
  return (
    <div id="projects" className={"px-2 my-16 md:mx-32"}>
      <h1 className="font-black text-4xl py-16 text-center ">Projects</h1>
      <div className="flex flex-wrap md:space-x-4 justify-center justify-items-stretch">
        <Project
          src="/images/payroll.gif"
          title="Mage Payroll System"
          description={
            <p>
              A web-based payroll software aimed to greatly reduce complexity of payroll
              preparation.
              <br />
              Instead of the tedious timekeeping, computation of overtime, tardiness, absences,
              mandatory deductions, etc., the users can reduce their payroll preparation times by
              90% by using this software.
            </p>
          }
          codeLink="https://github.com/jmossesgeld/ph-payroll-manager"
          liveLink="https://mage-payroll-system.web.app/"
        />
        <Project
          src="/images/typing.gif"
          title="Online Typing Speed Test"
          description="A web-based typing speed test which allows users to test their typing speed. The users keyboard speed are
          measured based on words per minute (WPM)."
          codeLink="https://github.com/jmossesgeld/react-typing-speed"
          liveLink="http://react-typing-speed.herokuapp.com/"
        />
      </div>
    </div>
  );
}
