import React, { useState } from 'react';
import { FiHome, FiTrendingUp, FiBarChart2, FiTool, FiBook, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const navItems = [
    { label: 'Explore', icon: <FiHome /> },
    { label: 'Stocks', icon: <FiTrendingUp /> },
    { label: 'F&O', icon: <FiBarChart2 /> },
    { label: 'Mutual Funds', icon: <FiBook /> },
    { label: 'Tools', icon: <FiTool /> },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <aside
            className={`flex flex-col transition-all duration-300 h-full border-r border-sidebar-border bg-sidebar text-sidebar-foreground ${collapsed ? 'w-16' : 'w-48'
                }`}
        >
            {/* Collapse Button Trigger and Icon */}
            <div className="flex justify-end p-2">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1 rounded hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition bg-foreground text-background"
                    aria-label="Toggle sidebar"
                >
                    {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
                </button>

            </div>

            {/* Navigation Tabs inclued active tabs and on collapse only icons */}
            <nav className="flex-1 flex flex-col mt-2">
                {navItems.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className="flex items-center gap-3 px-4 py-3  border transition relative cursor-pointer"
                            style={{
                                backgroundColor: isActive ? 'var(--sidebar-primary)' : 'transparent',
                                color: isActive ? 'var(--sidebar-primary-foreground)' : 'var(--sidebar-foreground)',
                                borderColor: isActive ? 'var(--sidebar-primary)' : 'transparent',
                            }}
                        >
                            {/* Active indicator dot */}
                            {isActive && (
                                <span
                                    className="absolute left-0 rounded-r"
                                    style={{ width: '4px', height: '100%', backgroundColor: 'var(--primary)' }}
                                ></span>
                            )}

                            <span className="text-lg">{item.icon}</span>
                            {!collapsed && <span>{item.label}</span>}
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}
