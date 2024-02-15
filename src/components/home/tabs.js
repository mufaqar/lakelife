"use client"
import React from "react";
import { TabsData } from '@/const/tabs'
import PostStyle1 from "../blog/post-style1";

const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul className="flex pt-3 pb-4 flex-row">
                        {TabsData?.map((item, idx) => {
                            return (
                                <li key={idx}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(item?.id);
                                    }}
                                    className="-mb-px md:mr-6 mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                                    <span
                                        className={
                                            "text-xs font-bold uppercase md:px-5 px-1 py-3 shadow-sm rounded block leading-normal " +
                                            (openTab === item?.id
                                                ? "text-white bg-primary"
                                                : "text-primary bg-white")
                                        }>
                                        {item?.categ}
                                    </span>
                                </li>
                            )
                        })}

                    </ul>
                    {TabsData?.map((item, idx) => {
                        return (
                            <div key={idx} className={`tab-content flex flex-col divide-y divide-gray-400 ${openTab === item?.id ? "block" : "hidden"}`}>
                                {item.post?.map((_item, _idx) => {
                                    return (<div key={_idx} className="py-10">
                                        <PostStyle1 data={_item} />
                                    </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Tabs;