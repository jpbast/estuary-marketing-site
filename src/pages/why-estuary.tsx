import * as React from "react";
import Sidebar from "../components/why-estuary/sidebar";
import MainContent from "../components/why-estuary/main-content";

const WhyEstuary = () => {
    return (
        <main className="why-estuary">
            <Sidebar state={undefined} />
            <MainContent state={undefined} />
        </main>
    )
}

export default WhyEstuary
