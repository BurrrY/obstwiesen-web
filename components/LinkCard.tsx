import {Maybe} from "@graphql-tools/utils";
import Image from "next/image";
import {ImageLoader} from "@/components/ImageLoader";
import {File} from "@/__generated__/graphql";

interface OwcLinkCardProps {
    title: string,
    href: string,
    content: string,
    banner?: Maybe<File>
}

export function OwcLinkCard({ href, title, content, banner }: OwcLinkCardProps) {

    let url = banner?.path || ""
    const hasImage = url.length>0

    return (
        <a className="max-w-sm rounded rounded-3xl overflow-hidden shadow-lg bg-owc-warm-orange hover:bg-owc-warm-orange-light "
           href={href}>

            {hasImage ? (
                <div className="bg-white overflow-hidden h-40">
                    <Image src={url}
                           className="w-full"
                           loader={ImageLoader} alt="Banner Image"
                           sizes="100vw"

                           width={70}
                           height={45}
                           style={{
                               width: '100%',
                               height: 'auto',
                           }}
                    />
                    </div>
                        ): ("")}

                <div className="px-6 py-4">
                    <div className="font-bold text-2xl">{title}</div>
                <p className="text-gray-700 text-base">
                    {content}
                </p>
            </div>
        </a>
    );
}