
interface OwcLinkCardProps {
    title: string
    href: string
    content: string
}

export function OwcLinkCard({ href, title, content }: OwcLinkCardProps) {
    return (
        <a className="max-w-sm rounded rounded-3xl overflow-hidden shadow-lg bg-owc-warm-orange hover:bg-owc-warm-orange-light "
           href={href}>
            <div className="px-6 py-4">
                <div className="font-bold text-2xl">{title}</div>
                <p className="text-gray-700 text-base">
                    {content}
                </p>
            </div>
        </a>
    );
}