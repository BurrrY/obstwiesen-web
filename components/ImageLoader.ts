
interface ImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
}
export const ImageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
    return `${src}?w=${width}`;
};