import { BiUser } from "react-icons/bi";
import { GoClock } from "react-icons/go";
import { formatMinutes } from "@/utils";
import { Skeleton, Tooltip } from "@nextui-org/react";

type OfficeCardProps = {
  id: number;
  name: string;
  online: boolean;
  lines: {
    waiting: number;
    elapsed: number;
  }[];
  isLoading: boolean;
};

export default function OfficeCard(props: OfficeCardProps) {
  const waiting = props.lines.reduce((acc, line) => acc + line.waiting, 0);
  const elapsed =
    props.lines.reduce((acc, line) => acc + line.elapsed, 0) /
    props.lines.length;

  const elapsedFormatted = formatMinutes(elapsed);

  return (
    <div className={`w-[230px] relative cursor-pointer hover:scale-105`}>
      <Skeleton isLoaded={!props.isLoading}>
        <div
          className={`px-4 py-4 ${
            props.online ? " bg-secondary" : "bg-[#e2e2e2]"
          }  h-[120px]`}
        >
          <p
            className={`font-semibold ${
              props.online ? "text-white" : "text-[#8a8a8a]"
            }`}
          >
            {props.name}
          </p>
        </div>

        <Footer
          online={props.online}
          waiting={waiting}
          elapsed={elapsedFormatted}
        />
      </Skeleton>
    </div>
  );
}

function Footer(props: { online: boolean; waiting: number; elapsed: string }) {
  return (
    <div
      className={`${
        props.online ? "bg-[#00b886]" : "bg-[#8a8a8a]"
      } px-4 py-1 w-full flex gap-5 text-white absolute bottom-0`}
    >
      <Tooltip content="Personas en espera" placement="bottom">
        <div className="flex gap-1 items-center">
          <BiUser />
          <span className="">{props.waiting}</span>
        </div>
      </Tooltip>

      <Tooltip content="Tiempo de espera promedio" placement="bottom">
        <div className="flex gap-1 items-center">
          <GoClock />
          <span>{props.elapsed}</span>
        </div>
      </Tooltip>
    </div>
  );
}
