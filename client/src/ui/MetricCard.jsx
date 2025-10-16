import React, { useState } from 'react';
import { FiTrendingUp, FiTrendingDown, FiBarChart2, FiList, FiActivity } from 'react-icons/fi';

export default function MetricCard({ label, value, unit = '', isNegative = false, tooltip = '' }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const isValueNegative = isNegative || Number(value) < 0;

  // simple or icon picking logic based on keywords in label
  const getIcon = (label) => {
    if (label.toLowerCase().includes('win')) return <FiTrendingUp />;
    if (label.toLowerCase().includes('loss') || label.toLowerCase().includes('drawdown')) return <FiTrendingDown />;
    if (label.toLowerCase().includes('profit') || label.toLowerCase().includes('pl')) return <FiBarChart2 />;
    if (label.toLowerCase().includes('trades') || label.toLowerCase().includes('total')) return <FiList />;
    return <FiActivity />;
  };

  return (
    <div
      className="relative bg-card text-card-foreground p-4 rounded-lg border border-border shadow hover:shadow-lg transition-all duration-200 cursor-default flex flex-col items-center justify-center"
      style={{ minHeight: '120px', minWidth: '120px' }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Icon */}
      <div className="w-8 h-8 mb-2 flex items-center justify-center rounded bg-accent text-accent-foreground">
        {getIcon(label)}
      </div>

      {/* Value */}
      <h2 className="text-xl font-bold select-text">
        {value}{unit}
      </h2>

      {/* Tooltip */}
      {tooltip && showTooltip && (
        <div
          className="absolute top-0 right-0 w-36 h-10 bg-popover text-popover-foreground rounded border border-border flex items-center justify-center text-xs p-1 shadow-lg z-50 pointer-events-none"
        >
          {tooltip}
        </div>
      )}

      {/* Label */}
      <p className="text-sm text-muted-foreground mt-2 text-center">{label}</p>
    </div>
  );
}
