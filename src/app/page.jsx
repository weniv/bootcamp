"use client";
import { useEffect, useState, useCallback } from "react";
import Banner from "@/components/banner/Banner";
import CategoryList from "@/components/category/CategoryList";
import CampList from "@/components/card/CampList";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { usePathname, useSearchParams } from "next/navigation";
import handleAnalyticsPageView from "@/utils/handleAnalyticsPageView";

export const CATEGORIES = [
    { id: 0, text: "전체" },
    { id: 4, text: "KDT" },
    { id: 1, text: "프론트엔드" },
    { id: 2, text: "백엔드" },
    { id: 3, text: "데이터분석" },
];

export default function Home() {
    const [activeID, setActiveID] = useState(0);

    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // 페이지뷰 수집
        const url = pathname + searchParams.toString();
        handleAnalyticsPageView(url);
    }, [pathname, searchParams]);

    return (
        <>
            <Header />
            <div className="layout-grow">
                <Banner />
                <main className="max-width">
                    <CategoryList list={CATEGORIES} state={activeID} setState={setActiveID} />
                    <h2 className="a11y-hidden">{CATEGORIES[activeID].text} 강의 목록</h2>
                    <CampList activeID={activeID} />
                </main>
            </div>
            <Footer />
        </>
    );
}
