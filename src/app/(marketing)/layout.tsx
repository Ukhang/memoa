import Navbar from "./_components/Navbar";

type MarketingLayoutProps = {
    children: React.ReactNode
}

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
    return (
        <div className="h-full dark:bg-[#1F1F1F]">
            <Navbar/>
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    )
};

export default MarketingLayout;