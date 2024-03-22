import {useI18n} from "@/locales/client";

export function LoadingScreen() {
    const t = useI18n()
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row flex-wrap py-4">
                <aside className="lg:w-1/3 px-2">
                    <div className="top-0 p-4 w-full bg-owc-soft-coral-light p-4 rounded rounded-3xl">
                        <h1
                            className="block font-sans text-4xl mb-2 antialiased font-semibold leading-tight tracking-normal text-inherit">
                            {t('Loading...')}
                        </h1>

                        <div>
                        </div>


                    </div>
                </aside>

                <main role="main"
                      className="lg:w-2/3 p-3 px-4 bg-owc-deep-green rounded-3xl flex flex-col items-center">
                    <h2
                        className="block font-sans text-3xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                        {t('Loading...')}
                    </h2>
                </main>
            </div>
        </div>);
}
