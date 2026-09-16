import Image from "next/image";
import PrintButton from "../components/PrintButton";
import ProjectAccordion from "../components/ProjectAccordion";
import { resume } from "../data/resume";

const ExternalLink = ({ href, children }) => (
  <a
    className="rounded-[10px] border border-white/10 px-[14px] py-[11px] text-[13px] text-[#d9dce3] hover:border-[#8dffb7]/50 hover:text-[#8dffb7]"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

const sectionClassName =
  "border-b border-white/10 py-[92px] max-[820px]:py-16 print:border-[#e4e6eb] print:py-[9mm]";
const sectionHeadingClassName =
  "mb-11 grid grid-cols-[60px_1fr] items-baseline max-[820px]:mb-[30px] max-[820px]:grid-cols-[42px_1fr] print:mb-[5mm] print:grid-cols-[11mm_1fr]";
const sectionNumberClassName =
  "m-0 text-[20px] font-extrabold tracking-[0.16em] text-[#8dffb7] print:text-[7pt] print:text-[#137a44]";
const sectionTitleClassName =
  "m-0 text-[32px] tracking-[-0.04em] max-[820px]:text-[27px] print:text-[16pt]";
const tagListClassName =
  "flex flex-wrap justify-end gap-1.5 max-[820px]:justify-start print:gap-[1.2mm]";
const tagClassName =
  "whitespace-nowrap rounded-full border border-white/10 px-[9px] py-1.5 text-[10px] text-[#c7ccd6] print:border-[#dfe2e7] print:px-[2mm] print:py-[1.2mm] print:text-[6.2pt] print:text-[#4c535e]";

const timelineStart = 2010;
const timelineEnd = 2024;
const timelineYears = Array.from(
  { length: timelineEnd - timelineStart },
  (_, index) => timelineStart + index,
);

const getTimelineValue = (date) => {
  const [year, month] = date.split(".").map(Number);

  return year + (month - 1) / 12;
};

const getTimelineStyle = (start, end) => {
  const range = timelineEnd - timelineStart;
  const left = ((getTimelineValue(start) - timelineStart) / range) * 100;
  const width =
    ((getTimelineValue(end) + 1 / 12 - getTimelineValue(start)) / range) * 100;

  return {
    left: `${left}%`,
    width: `${width}%`,
  };
};

export default function Home() {
  const { profile } = resume;
  const timelineItems = [
    ...resume.overseasExperience,
    ...resume.education,
    ...resume.activities,
    ...resume.training,
  ].sort((a, b) => a.start.localeCompare(b.start));
  const projects = [...resume.projects].sort((a, b) =>
    b.period.localeCompare(a.period),
  );

  return (
    <main className="mx-auto max-w-[1240px] px-[42px] pb-[72px] max-[820px]:px-5 max-[820px]:pb-[50px] print:max-w-none print:p-0">
      <header className="sticky top-0 z-20 grid h-[76px] grid-cols-[1fr_auto_auto] items-center gap-7 border-b border-white/10 bg-[#0b0d12]/80 backdrop-blur-[18px] max-[820px]:grid-cols-[1fr_auto] print:hidden">
        <a
          className="text-[22px] font-extrabold tracking-[-0.03em]"
          href="#top"
        >
          KH.
        </a>
        <nav className="flex gap-6 text-[13px] text-[#9fa6b4] max-[820px]:hidden">
          <a className="hover:text-[#f5f6f8]" href="#experience">
            Experience
          </a>
          <a className="hover:text-[#f5f6f8]" href="#projects">
            Projects
          </a>
          <a className="hover:text-[#f5f6f8]" href="#about">
            About
          </a>
        </nav>
        <PrintButton />
      </header>

      <section
        className="grid min-h-[650px] grid-cols-[1fr_280px] items-center gap-[90px] border-b border-white/10 py-[70px] pt-[88px] max-[820px]:min-h-0 max-[820px]:grid-cols-1 max-[820px]:gap-[42px] max-[820px]:py-14 print:min-h-0 print:grid-cols-[1fr_34mm] print:gap-[12mm] print:border-[#e4e6eb] print:py-[8mm] print:pt-[3mm]"
        id="top"
      >
        <div>
          <p className="mb-[18px] text-[11px] font-extrabold tracking-[0.16em] text-[#8dffb7] print:mb-[4mm] print:text-[7.5pt] print:text-[#137a44]">
            FRONTEND DEVELOPER · CAREER PORTFOLIO
          </p>
          <h1 className="m-0 max-w-[760px] whitespace-pre-line text-[clamp(32px,5.3vw,44px)] font-bold break-all leading-[1.15] tracking-[-0.052em] print:text-[26pt] print:leading-[1.12]">
            {profile.headline}
          </h1>
          <p className="mt-7 max-w-[760px] text-[17px] leading-[1.8] text-[#c8cbd3] print:mt-[5mm] print:text-[9.2pt] print:leading-[1.65] print:text-[#444b56]">
            {profile.summary}
          </p>

          <div className="mt-7 flex flex-wrap gap-x-[18px] gap-y-2 text-[13px] text-[#9fa6b4] print:mt-[5mm] print:gap-x-[4mm] print:gap-y-[2mm] print:text-[7.7pt] print:text-[#606570]">
            {[
              profile.name,
              profile.birth,
              profile.location,
              profile.email,
              profile.phone,
            ].map((item) => (
              <span
                className="after:ml-[18px] after:inline-block after:size-[3px] after:rounded-full after:bg-[#454b57] after:align-middle last:after:hidden print:after:ml-[4mm]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-[25px] flex gap-2.5 print:hidden">
            <ExternalLink href={profile.portfolio}>Portfolio ↗</ExternalLink>
            <ExternalLink href={profile.github}>GitHub ↗</ExternalLink>
            <ExternalLink href={profile.resumeUrl}>Resume ↗</ExternalLink>
          </div>
        </div>

        <div className="self-center max-[820px]:grid max-[820px]:grid-cols-[120px_1fr] max-[820px]:items-center max-[820px]:gap-[18px]">
          <div className="aspect-[5/7] overflow-hidden rounded-[20px] bg-[#252a35] max-[820px]:rounded-[14px] print:rounded-[3mm] print:bg-[#eceff3]">
            <Image
              className="block size-full object-cover"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${profile.photo}`}
              alt="김하림 프로필"
              width={300}
              height={420}
              priority
            />
          </div>
          <div className="mt-[18px] grid max-[820px]:m-0 print:mt-[3mm]">
            <strong className="text-xl print:text-[11pt]">
              {profile.name}
            </strong>
            <span className="mt-1 text-[13px] text-[#9fa6b4] print:text-[7.5pt] print:text-[#606570]">
              {profile.role}
            </span>
            <small className="mt-[3px] text-[#8dffb7] print:text-[7.5pt] print:text-[#137a44]">
              {profile.careerLabel}
            </small>
          </div>
        </div>
      </section>

      {/* <section
        className="grid grid-cols-[repeat(var(--highlight-count),minmax(0,1fr))] gap-px border-b border-white/10 bg-white/10 max-[820px]:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] print:grid-cols-[repeat(var(--highlight-count),minmax(0,1fr))] print:border-[#e4e6eb] print:bg-[#e4e6eb]"
        style={{ "--highlight-count": resume.highlights.length }}
      >
        {resume.highlights.map((item) => (
          <article
            className="bg-[#0b0d12] px-2 py-[34px] print:bg-white print:px-[2mm] print:py-[5mm]"
            key={item.label}
          >
            <strong className="block text-[37px] tracking-[-0.05em] print:text-[17pt]">
              {item.value}
            </strong>
            <span className="mt-[5px] block text-xs text-[#9fa6b4] print:text-[7pt] print:text-[#606570]">
              {item.label}
            </span>
          </article>
        ))}
      </section> */}

      <section className={sectionClassName}>
        <div className={sectionHeadingClassName}>
          <p className={sectionNumberClassName}>01</p>
          <h2 className={sectionTitleClassName}>Core Competencies</h2>
        </div>
        <div className="ml-[60px] grid grid-cols-2 gap-3.5 max-[820px]:ml-0 max-[820px]:grid-cols-1 print:ml-[11mm] print:gap-[2.5mm]">
          {resume.core.map((item) => (
            <article
              className="rounded-[18px] border border-white/10 bg-[#12151c] p-[26px] print:break-inside-avoid print:rounded-[3mm] print:border-[#e6e8ec] print:bg-[#f8f9fb] print:p-[4mm]"
              key={item.title}
            >
              <h3 className="m-0 text-[17px] print:text-[9pt]">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-[#9fa6b4] print:mt-[2mm] print:text-[7.5pt] print:leading-[1.55] print:text-[#5a606b]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClassName} id="experience">
        <div className={sectionHeadingClassName}>
          <p className={sectionNumberClassName}>02</p>
          <h2 className={sectionTitleClassName}>Work Experience</h2>
        </div>
        <div className="ml-[60px] max-[820px]:ml-0 print:ml-[11mm]">
          {resume.experience.map((item) => (
            <article
              className="grid grid-cols-[280px_1fr] gap-[38px] border-t border-white/10 py-[30px] last:border-b max-[820px]:grid-cols-1 max-[820px]:gap-3.5 print:grid-cols-[43mm_1fr] print:gap-[6mm] print:border-[#e4e6eb] print:py-[5mm]"
              key={item.company}
            >
              <div>
                <span className="text-xs text-[#9fa6b4] print:text-[7.5pt] print:leading-[1.55] print:text-[#606570]">
                  {item.period}
                </span>
                <h3 className="mt-1.5 text-[23px] print:text-[11.5pt]">
                  {item.company}
                </h3>
              </div>
              <div>
                <strong className="text-[15px] print:text-[8.5pt]">
                  {item.role}
                </strong>
                <p className="mt-2.5 text-sm leading-[1.7] text-[#9fa6b4] print:text-[7.5pt] print:leading-[1.55] print:text-[#606570]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClassName} id="projects">
        <div className={sectionHeadingClassName}>
          <p className={sectionNumberClassName}>03</p>
          <h2 className={sectionTitleClassName}>Projects</h2>
        </div>

        <div className="grid gap-[18px] print:gap-[4mm]">
          {projects.map((project, index) => (
            <article
              className="relative grid grid-cols-[58px_1fr] rounded-[22px] border border-white/10 bg-[#12151c] py-[30px] pr-7 pt-[26px] max-[820px]:grid-cols-[40px_1fr] max-[820px]:pr-[18px] print:break-inside-avoid print:grid-cols-[8mm_1fr] print:rounded-[3mm] print:border-[#dfe2e7] print:bg-white print:py-[5mm] print:pr-[5mm] print:pl-0"
              key={`${project.title}-${project.period}`}
            >
              <div className="pt-1 text-center text-[11px] font-extrabold text-[#8dffb7] print:text-[7pt] print:text-[#137a44]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <ProjectAccordion
                summary={
                  <>
                    <div>
                      <span className="text-[11px] text-[#9fa6b4] print:text-[7pt] print:text-[#606570]">
                        {project.period}
                      </span>
                      <h3 className="mt-1.5 text-2xl tracking-[-0.03em] print:mt-[1mm] print:text-[12.5pt]">
                        {project.title}
                      </h3>
                    </div>
                    <div
                      className={`${tagListClassName} print:mt-[2mm] print:justify-start`}
                    >
                      {project.tech.map((tech) => (
                        <span className={tagClassName} key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                }
              >
                <p className="mt-[22px] max-w-[860px] text-sm leading-[1.75] text-[#c8cbd3] print:mt-[3mm] print:text-[7.7pt] print:leading-[1.55] print:text-[#474d57]">
                  {project.intro}
                </p>

                {project.impact && (
                  <div className="mt-[22px] rounded-[14px] border border-[#8dffb7]/25 bg-[#8dffb7]/5 px-5 py-[18px] print:mt-[3mm] print:rounded-[2.5mm] print:border-[#cfe5d7] print:bg-[#f3faf6] print:p-[3mm]">
                    <span className="block text-[10px] font-extrabold tracking-[0.12em] text-[#8dffb7] print:text-[6pt] print:text-[#137a44]">
                      KEY IMPACT
                    </span>
                    <strong className="mt-1.5 block text-[17px] print:mt-[1mm] print:text-[8.5pt]">
                      {project.impact.title}
                    </strong>
                    <p className="mt-2 text-[13px] leading-[1.7] text-[#b8c6bd] print:mt-[1.3mm] print:text-[7.2pt] print:leading-[1.5] print:text-[#4f6257]">
                      {project.impact.text}
                    </p>
                  </div>
                )}

                <ul className="mt-[22px] grid list-none gap-2.5 p-0 print:mt-[3mm] print:gap-[1.3mm]">
                  {project.achievements.map((item) => (
                    <li
                      className="relative pl-[17px] text-[13px] leading-[1.65] text-[#aeb4c0] before:absolute before:left-0 before:top-[0.7em] before:size-[5px] before:rounded-full before:bg-[#606775] print:pl-[3mm] print:text-[7.25pt] print:leading-[1.5] print:text-[#4f5560] print:before:size-[1mm]"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </ProjectAccordion>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={sectionHeadingClassName}>
          <p className={sectionNumberClassName}>04</p>
          <h2 className={sectionTitleClassName}>Tech Stack</h2>
        </div>
        <div className="ml-[60px] grid grid-cols-2 gap-x-14 gap-y-[25px] max-[820px]:ml-0 max-[820px]:grid-cols-1 print:ml-[11mm] print:grid-cols-2 print:gap-x-[8mm] print:gap-y-[4mm]">
          {Object.entries(resume.skills).map(([group, skills]) => (
            <div key={group}>
              <h3 className="mb-2.5 text-xs text-[#9fa6b4] print:text-[7pt] print:text-[#606570]">
                {group}
              </h3>
              <div className={`${tagListClassName} justify-start`}>
                {skills.map((skill) => (
                  <span className={tagClassName} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={sectionHeadingClassName}>
          <p className={sectionNumberClassName}>05</p>
          <h2 className={sectionTitleClassName}>Journey</h2>
        </div>

        <div className="ml-[60px] max-[820px]:ml-0 print:ml-[11mm]">
          <div className="overflow-hidden pb-2">
            <div className="min-w-0">
              <div className="mb-3 grid grid-cols-[280px_1fr] gap-6 px-5 max-[820px]:hidden print:hidden">
                <span className="text-[10px] font-bold tracking-[0.14em] text-[#6f7683]">
                  EDUCATION · EXPERIENCE · ACTIVITY
                </span>
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: `repeat(${timelineYears.length}, minmax(0, 1fr))`,
                  }}
                >
                  {timelineYears.map((year) => (
                    <span
                      className="border-l border-white/10 pl-2 text-[10px] text-[#6f7683] last:border-r"
                      key={year}
                    >
                      {String(year).slice(2)}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-2.5 print:gap-[2mm]">
                {timelineItems.map((item) => (
                  <article
                    className="grid grid-cols-[280px_1fr] items-center gap-6 rounded-2xl border border-white/10 bg-[#12151c] px-5 py-4 max-[820px]:grid-cols-1 max-[820px]:gap-3 print:block print:break-inside-avoid print:rounded-[3mm] print:border-[#e6e8ec] print:bg-[#f8f9fb] print:px-[4mm] print:py-[3mm]"
                    key={`${item.title}-${item.period}`}
                  >
                    <div>
                      <span className="text-[10px] font-extrabold tracking-[0.12em] text-[#8dffb7] print:text-[6.5pt] print:text-[#137a44]">
                        {item.category}
                      </span>
                      <h3 className="mt-1 text-[15px] leading-[1.45] print:text-[8.5pt]">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="mt-1 text-xs text-[#c5cad3] print:text-[7pt] print:text-[#4c535e]">
                          {item.subtitle}
                        </p>
                      )}
                      {item.description && (
                        <p className="mt-2 text-[11px] leading-[1.6] text-[#8f96a3] print:mt-[1mm] print:text-[6.5pt] print:leading-[1.45] print:text-[#606570]">
                          {item.description}
                        </p>
                      )}
                      {item.note && (
                        <strong className="mt-2 block text-xs text-[#d9dce3] print:mt-[1mm] print:text-[7pt] print:text-[#303640]">
                          {item.note}
                        </strong>
                      )}
                    </div>

                    <div className="relative h-16 max-[820px]:h-auto print:h-auto">
                      <div className="absolute inset-x-0 top-[34px] h-px bg-white/10 max-[820px]:hidden print:hidden" />
                      <div
                        className="absolute top-[30px] h-[9px] min-w-[10px] rounded-full bg-[#8dffb7] shadow-[0_0_18px_rgba(141,255,183,0.18)] before:absolute before:-left-0.5 before:-top-0.5 before:size-[13px] before:rounded-full before:border-[3px] before:border-[#12151c] before:bg-[#8dffb7] max-[820px]:hidden print:hidden"
                        style={getTimelineStyle(item.start, item.end)}
                      >
                        <span className="absolute bottom-[15px] left-0 whitespace-nowrap text-[10px] font-semibold text-[#cbd0d8]">
                          {item.period}
                        </span>
                      </div>
                      <span className="hidden w-fit rounded-full border border-[#8dffb7]/25 bg-[#8dffb7]/5 px-2.5 py-1 text-[11px] font-semibold text-[#8dffb7] max-[820px]:inline-flex print:inline-flex print:border-[#cfe5d7] print:bg-[#f3faf6] print:px-[2mm] print:py-[1mm] print:text-[6.5pt] print:text-[#137a44]">
                        {item.period}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={sectionHeadingClassName}>
          <p className={sectionNumberClassName}>06</p>
          <h2 className={sectionTitleClassName}>Additional Information</h2>
        </div>

        <div className="ml-[60px] grid grid-cols-2 gap-3.5 max-[820px]:ml-0 max-[820px]:grid-cols-1 print:ml-[11mm] print:gap-[2.5mm]">
          <article className="rounded-[18px] border border-white/10 bg-[#12151c] p-[26px] print:break-inside-avoid print:rounded-[3mm] print:border-[#e6e8ec] print:bg-[#f8f9fb] print:p-[4mm]">
            <p className="text-[10px] font-extrabold tracking-[0.14em] text-[#8dffb7] print:text-[6.5pt] print:text-[#137a44]">
              SPECIALTY & HOBBIES
            </p>
            <div className="mt-5 grid gap-5 print:mt-[3mm] print:gap-[3mm]">
              <div>
                <span className="text-xs text-[#7f8795] print:text-[7pt] print:text-[#606570]">
                  특기
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5 print:gap-[1.2mm]">
                  <span className={tagClassName}>
                    {resume.personal.specialty}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-xs text-[#7f8795] print:text-[7pt] print:text-[#606570]">
                  취미
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5 print:gap-[1.2mm]">
                  {resume.personal.hobbies.map((hobby) => (
                    <span className={tagClassName} key={hobby}>
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[18px] border border-white/10 bg-[#12151c] p-[26px] print:break-inside-avoid print:rounded-[3mm] print:border-[#e6e8ec] print:bg-[#f8f9fb] print:p-[4mm]">
            <p className="text-[10px] font-extrabold tracking-[0.14em] text-[#8dffb7] print:text-[6.5pt] print:text-[#137a44]">
              LICENSE
            </p>
            {resume.licenses.map((license) => (
              <div
                className="mt-5 print:mt-[3mm]"
                key={license.registrationNumber}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[17px] print:text-[9pt]">
                    {license.name}
                  </h3>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-[#9fa6b4] print:border-[#dfe2e7] print:text-[6pt] print:text-[#606570]">
                    {license.grade}
                  </span>
                </div>
                <dl className="mt-4 grid grid-cols-[82px_1fr] gap-x-4 gap-y-2 text-xs print:mt-[2mm] print:grid-cols-[18mm_1fr] print:gap-y-[1mm] print:text-[7pt]">
                  <dt className="text-[#7f8795] print:text-[#606570]">
                    발급기관
                  </dt>
                  <dd>{license.issuer}</dd>
                  <dt className="text-[#7f8795] print:text-[#606570]">
                    등록번호
                  </dt>
                  <dd>{license.registrationNumber}</dd>
                  <dt className="text-[#7f8795] print:text-[#606570]">
                    취득일
                  </dt>
                  <dd>{license.issuedAt}</dd>
                </dl>
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className={sectionClassName} id="about">
        <div className={sectionHeadingClassName}>
          <p className={sectionNumberClassName}>07</p>
          <h2 className={sectionTitleClassName}>About Me</h2>
        </div>
        <div className="ml-[60px] max-w-[850px] max-[820px]:ml-0 print:ml-[11mm]">
          {resume.introduction.map((paragraph) => (
            <p
              className="mb-[18px] text-[15px] leading-[1.9] text-[#c2c7d1] print:mb-[3mm] print:text-[7.8pt] print:leading-[1.65] print:text-[#474d57]"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={sectionHeadingClassName}>
          <p className={sectionNumberClassName}>08</p>
          <h2 className={sectionTitleClassName}>How I Work</h2>
        </div>
        <div className="ml-[60px] grid grid-cols-2 gap-3.5 max-[820px]:ml-0 max-[820px]:grid-cols-1 print:ml-[11mm] print:grid-cols-2 print:gap-[2.5mm]">
          {resume.workingPrinciples.map((principle, index) => (
            <article
              className="rounded-[18px] border border-white/10 bg-[#12151c] p-[26px] print:break-inside-avoid print:rounded-[3mm] print:border-[#e6e8ec] print:bg-[#f8f9fb] print:p-[4mm]"
              key={principle.title}
            >
              <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#8dffb7] print:text-[6.5pt] print:text-[#137a44]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[17px] leading-[1.45] print:mt-[2mm] print:text-[9pt]">
                {principle.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.75] text-[#9fa6b4] print:mt-[2mm] print:text-[7pt] print:leading-[1.55] print:text-[#5a606b]">
                {principle.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="flex justify-between pt-[42px] text-[#9fa6b4] print:pt-[7mm] print:text-[#606570]">
        <div className="grid gap-[3px]">
          <strong className="text-[#f5f6f8] print:text-[8pt] print:text-[#101217]">
            {profile.name}
          </strong>
          <span className="text-xs print:text-[6.5pt]">{profile.role}</span>
        </div>
        <p className="m-0 text-xs print:text-[6.5pt]">Thank you for reading.</p>
      </footer>
    </main>
  );
}
