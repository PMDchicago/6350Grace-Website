export default function StatsBar() {
  const stats = [
    { number: '180', label: 'Total Units' },
    { number: '19', label: 'Stories' },
    { number: '1972', label: 'Est.' },
    { number: '60613', label: 'East Lakeview' },
  ];

  return (
    <aside className="stats-bar">
      <div className="container">
        <div className="stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
