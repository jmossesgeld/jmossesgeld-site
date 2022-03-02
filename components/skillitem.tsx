export default function SkillItem({ text }: { text: string }) {
  const bodyText =
    "m-2 text-pink-100 bg-violet-800 inline border-2 border-pink-200 hover:border-violet-900 rounded-full p-3 hover:bg-indigo-200 hover:text-violet-900 hover:scale-110 transition-all duration-100";
  return <div className={bodyText}>{text}</div>;
}
