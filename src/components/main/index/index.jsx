import React from "react";
import TopBar from "@/components/main/index/topBar";
import TopSection from "@/components/main/index/topSection";

class Index extends React.Component {
    render() {
        return (
            <div id="index">
                <TopBar />
                <TopSection />
            </div>
        );
    }
}

export default Index;
