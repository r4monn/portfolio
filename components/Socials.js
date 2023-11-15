import Link from "next/link";

import {RiInstagramLine, RiFacebookLine, RiGithubLine, RiLinkedinLine, RiDiscordLine, RiContactsLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link href={'https://www.instagram.com/ramondiiaas/'} target="_blank" className='hover:text-violet-500 transition-all duration-300'><RiInstagramLine /></Link>
      <Link href={'https://www.linkedin.com/in/ramon-diiaas/'} target="_blank" className='hover:text-violet-500 transition-all duration-300'><RiLinkedinLine /></Link>
      <Link href={''} target="_blank" className='hidden hover:text-violet-500 transition-all duration-300'><RiDiscordLine /></Link>
      <Link href={'https://github.com/r4monn'} target="_blank" className='hover:text-violet-500 transition-all duration-300'><RiGithubLine /></Link>
      <Link href={''} target="_blank" className='hidden hover:text-violet-500 transition-all duration-300'><RiFacebookLine /></Link>
      <Link href={'/contact'} className='hover:text-violet-500 transition-all duration-300'><RiContactsLine /></Link>
    </div>
  );
};

export default Socials;
