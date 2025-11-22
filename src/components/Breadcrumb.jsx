import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ButtonSecondary from "./ButtonSecondary";

export default function Breadcrumb({ pages = [] }) {
  const lastPageIndex = pages.length - 1;

  return (
    <div className="flex flex-row items-center gap-4">
      <ButtonSecondary
        href={pages[0]?.path || "/"}
        icon={<ArrowLeft size={16} strokeWidth={1.75} />}
      >
        Retour
      </ButtonSecondary>

      <div className="hidden xs:flex items-center justify-start flex-wrap">
        {pages.map((page, index) => (
          <div key={index} className="flex items-center">
            {index < lastPageIndex ? (
              <>
                <Link
                  href={page.path}
                  className="text-gray-100 hover:underline cursor-pointer"
                >
                  {page.name}
                </Link>
                <span className="mx-2 text-gray-100 ">/</span>
              </>
            ) : (
              <p className="text-orange-500 font-medium truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-max xl:max-w-max">
                {page.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
