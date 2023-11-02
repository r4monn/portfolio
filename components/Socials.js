import Link from "next/link";

import {RiInstagramLine, RiFacebookLine, RiGithubLine, RiLinkedinLine, RiDiscordLine, RiContactsLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link href={''} className='hover:text-violet-500 transition-all duration-300'><RiInstagramLine /></Link>
      <Link href={''} className='hover:text-violet-500 transition-all duration-300'><RiLinkedinLine /></Link>
      <Link href={''} className='hover:text-violet-500 transition-all duration-300'><RiDiscordLine /></Link>
      <Link href={''} className='hover:text-violet-500 transition-all duration-300'><RiGithubLine /></Link>
      <Link href={''} className='hover:text-violet-500 transition-all duration-300'><RiFacebookLine /></Link>
      <Link href={''} className='hover:text-violet-500 transition-all duration-300'><RiContactsLine /></Link>
    </div>
  );
};

export default Socials;
