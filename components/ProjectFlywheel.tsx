import type { Flywheel } from "@/lib/projects";

type Props = {
  flywheel: Flywheel;
  accent: string;
};

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const radians = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(radians),
    y: cy + r * Math.sin(radians),
  };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

const nodePositions = [
  { left: "50%", top: "4%" },
  { left: "82%", top: "21%" },
  { left: "94%", top: "50%" },
  { left: "79%", top: "80%" },
  { left: "50%", top: "94%" },
  { left: "20%", top: "80%" },
  { left: "6%", top: "50%" },
  { left: "18%", top: "21%" },
];

type SupportPanelProps = {
  title: string;
  eyebrow: string;
  items: string[];
  kind: "force" | "friction";
};

function SupportPanel({ title, eyebrow, items, kind }: SupportPanelProps) {
  return (
    <aside className={`flywheel-support flywheel-support-${kind}`}>
      <div className="flywheel-support-head">
        <span aria-hidden="true">{kind === "force" ? "↗" : "◇"}</span>
        <div>
          <p>{eyebrow}</p>
          <h3>{title}</h3>
        </div>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export function ProjectFlywheel({ flywheel, accent }: Props) {
  const markerId = `flywheel-arrow-${accent}`;
  const gap = 8;
  const segment = 360 / flywheel.steps.length;

  return (
    <div className={`flywheel-shell accent-${accent}`}>
      <div className="flywheel-desktop-layout">
        <SupportPanel
          kind="force"
          eyebrow="What accelerates the loop"
          title="Force Multipliers"
          items={flywheel.forceMultipliers}
        />

        <div className="flywheel-visual" role="img" aria-label={`${flywheel.title} flywheel with ${flywheel.steps.length} stages`}>
          <svg className="flywheel-ring" viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <marker id={markerId} markerWidth="5" markerHeight="5" refX="4.2" refY="2.5" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="currentColor" />
              </marker>
            </defs>
            {flywheel.steps.map((_, index) => {
              const start = index * segment + gap;
              const end = (index + 1) * segment - gap;
              return (
                <path
                  key={index}
                  d={describeArc(50, 50, 36, start, end)}
                  className="flywheel-arc"
                  markerEnd={`url(#${markerId})`}
                />
              );
            })}
          </svg>

          <div className="flywheel-center">
            <span>{flywheel.kicker}</span>
            <strong>{flywheel.title}</strong>
          </div>

          {flywheel.steps.map((step, index) => (
            <div
              className={`flywheel-node flywheel-node-${index + 1}`}
              style={nodePositions[index]}
              key={step}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>

        <SupportPanel
          kind="friction"
          eyebrow="What keeps it reliable"
          title="Good Friction"
          items={flywheel.goodFriction}
        />
      </div>

      <div className="flywheel-mobile" aria-label={`${flywheel.title} flywheel stages`}>
        {flywheel.steps.map((step, index) => (
          <div className="flywheel-mobile-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
            {index < flywheel.steps.length - 1 && <i aria-hidden="true">↓</i>}
          </div>
        ))}
        <div className="flywheel-mobile-return" aria-hidden="true">↺ feeds the next cycle</div>

        <div className="flywheel-mobile-support">
          <SupportPanel
            kind="force"
            eyebrow="What accelerates the loop"
            title="Force Multipliers"
            items={flywheel.forceMultipliers}
          />
          <SupportPanel
            kind="friction"
            eyebrow="What keeps it reliable"
            title="Good Friction"
            items={flywheel.goodFriction}
          />
        </div>
      </div>
    </div>
  );
}
