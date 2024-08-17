import { Card, CardFooter } from "@nextui-org/card";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

export const Devloper = () => {
  return (
    <Card className="bottom-0 fixed flex flex-row justify-center items-center gap-x-4">
      <CardFooter>Devloped By Jayakrishna</CardFooter>

      <Link href="https://x.com/jkrishna_d">
        <FaXTwitter size={25} />
      </Link>
      <Link href="https://github.com/JkrishnaD">
        <BsGithub size={25} />
      </Link>
      <Link href="https://www.linkedin.com/in/jayakrishna-dabbara-a1b633261/">
        <BsLinkedin size={25} />
      </Link>
    </Card>
  );
};
